import RestaurantCard from "./ResturantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
// let filterDatas = resObj;
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterDatas, setFilterDatas] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    // console.log("called use effect");
    // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.6105073&lng=77.1145653&str=Best%20Food%20Bank&trackingId=e12a47d4-5716-ea53-3dbe-f8e4fc6b078e&submitAction=ENTER&queryUniqueId=84fa4b8b-4671-714a-3f37-917d6df4ae01"
    );
    const json = await data.json();
    console.log(json);
    const restaurantCard =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;

    const restaurantCardInfo = [];
    restaurantCard.forEach((e) => {
      restaurantCardInfo.push(e?.card?.card?.info);
    });

    setListOfRestaurant(restaurantCardInfo);
    setFilterDatas(restaurantCardInfo);
  };
  if(listOfRestaurant.length==0)
  {
    return<Shimmer/>
  }
return listOfRestaurant.length==0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => {
              setSearchText(e.target.value);
              // setFilterDatas(listOfRestaurant);
            }}
          />
          <button
            onClick={() => {
              let filteredData = listOfRestaurant.filter((res) => {
                   return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilterDatas(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredData = filterDatas.filter((res) => {
              return res.avgRating > 4;
            });
            setFilterDatas(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
      {filterDatas.map((filterData) => {
          return (
           <RestaurantCard resData={filterData} key={filterData.id} />
            );
        })}
     
      </div>
    </div>
  );
};

export default Body;