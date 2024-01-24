import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);

  const { cloudinaryImageId, cuisines, name, costForTwo, sla, avgRating } =
    resData.info;

  return (
    <div className='m-4 p-4 w-[200px] rounded-lg bg-slate-200 hover:bg-gray-400 '>
      <img
        className='rounded-lg'
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt='megna-food'
      />
      <h1 className='font-bold py-4 text-lg'>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} </h4>
      <h4>{avgRating} Rating</h4>
    </div>
  );
};
export default RestaurantCard;
