import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='p-2 m-2 border-gray-200 text-left flex justify-between'
        >
          <div className='w-8/12'>
            <div className='py-4'>
              <span>{item.card.info.name}</span>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultprice / 100}
              </span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>
          </div>
          <div className='w-3/12 p-4 '>
            <div className='absolute'>
              <button className=' px-3 mx-14 rounded-md bg-black text-white  shadow-lg '>
                Add+
              </button>
            </div>
            <img
              className='rounded-lg'
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
