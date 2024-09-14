import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantItems from './RestaurantItems';
import { Button } from '@mui/material';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className='p-10 w-6/12 m-auto flex flex-col justify-center align-middle'>
      {items.map((item, index) => {
        return (
          <RestaurantItems
            key={index}
            {...item}
            cart
          />
        );
      })}
      <Button
        onClick={() => dispatch(clearCart())}
        variant='contained'
        size='small'
        className=' rounded-lg bg-white text-green-600 normal-case font-semibold shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0 mt-2'>
        Clear Cart
      </Button>
    </div>
  );
};

export default Cart;
