import { Button } from '@mui/material';
import { CDN_URI } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const RestaurantItems = (props) => {
  let { name, price, defaultPrice, imageId, id, cart } = props;
  const dispatch = useDispatch();

  price = price ?? defaultPrice;
  return (
    <div
      className='flex justify-between items-center p-4 border-b shadow-sm'
      key={id}>
      <div className='text-left'>
        <p className='text-md font-medium'>{name}</p>
        <p className='text-sm text-gray-500'>₹{price / 100}</p>
      </div>
      <div className='relative'>
        {imageId ? (
          <img
            className='w-24 h-24 object-cover rounded'
            src={CDN_URI + imageId}
            alt='product image'
          />
        ) : (
          <div className='w-24 h-24 bg-slate-200 rounded flex justify-center items-center'>
            <span className='text-lg'>No Image</span>
          </div>
        )}
        {!cart ? (
          <Button
            onClick={() => dispatch(addItem(props))}
            variant='contained'
            size='small'
            className='absolute top-20 left-4 rounded-lg bg-white text-green-600 normal-case font-semibold shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0'>
            ADD
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default RestaurantItems;
