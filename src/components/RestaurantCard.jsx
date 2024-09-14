import { CDN_URI } from '../utils/constants';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ resData }) => {
  const {
    info: { name, cuisines, avgRating, areaName, costForTwo, id },
  } = resData;
  return (
    <div className='w-60 h-auto m-0 p-4 bg-white rounded-lg relative hover:scale-95 transition-all ease-out duration-200'>
      <Link to={`/restaurant/${id}`}>
        <div className='relative'>
          <img
            className='w-full h-32 object-cover rounded-lg'
            src={CDN_URI + resData.info.cloudinaryImageId}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-lg'></div>
        </div>
        <div className='p-2 text-start'>
          <h4 className='text-xl font-semibold mb-1'>{name}</h4>
          <p className='text-sm text-stone-900 mb-1'>{avgRating}</p>
          <p className='absolute left-5 top-28 z-10 text-2xl font-extrabold text-zinc-50'>
            {costForTwo}
          </p>
          <p className='text-sm text-gray-600 mb-1 text-nowrap overflow-hidden'>
            {cuisines.join(', ')}
          </p>

          <p className='text-sm text-gray-600'>{areaName}</p>
        </div>
      </Link>
    </div>
  );
};

export const TopRated = (RestaurantCard) => {
  return (props) => {
    return (
      <div className='relative hover:scale-95 transition-all ease-out duration-200'>
        <div className='absolute top-3 left-3 z-50 bg-stone-400 rounded-ee-2xl rounded-ss-2xl p-1'>
          Top Rated !
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
