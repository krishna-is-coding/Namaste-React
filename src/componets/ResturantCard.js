import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);

  const { cloudinaryImageId, cuisines, name, costForTwo, sla, avgRating } =
    resData;
  const { deliveryTime } = sla;
return (
    <div className="res-card">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="megna-food"
        className="res-logo"
      />
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
      <h4>{avgRating} Rating</h4>
    </div>
  );
};
export default RestaurantCard;