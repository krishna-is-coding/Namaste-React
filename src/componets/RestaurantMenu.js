import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div>
      <h1 className='font-bold text-2xl py-2 px-2'>{name}</h1>
      <p className='font-bold  py-1 px-2'>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      <h2 className='font-bold text-lg py-1 px-2'>Menu</h2>
      <ul className=' px-16'>
        {itemCards &&
          itemCards?.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Rs.
              {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
