import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
  const [ListOfResturnts,setListOfResturnt]=useState(resList);
  return (
    <div className='body'>
    <div className='filter'>
    <button className="filter-btn"
    onClick={()=>{
      const filteredList = ListOfResturnts.filter(
        (res)=>res.info.avgRating>4
      );
      setListOfResturnt(filteredList);
    }}
    >Top Rated Restaurant</button>
    </div>
    <div className='res-container'>
   {
     ListOfResturnts.map((resturant)=>(
      <ResturantCard key={resturant.info.id} resData={resturant}/>
      ))}
     </div>
    </div>
  );
};
export default Body;