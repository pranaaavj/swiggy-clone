import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URI } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';

const Header = () => {
  const [buttonText, setButtonText] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className='flex justify-between items-center'>
      <div className='w-20'>
        <img
          className='logo'
          src={LOGO_URI}
        />
      </div>
      <div className='flex'>
        <ul className=' gap-x-10 text-base flex flex-row items-center pr-8'>
          <li>{onlineStatus ? 'Online 🟢' : 'Offline 🔴'}</li>
          <li className='flex justify-center hover:text-orange-500'>
            <img
              src='https://www.svgrepo.com/show/535437/home.svg'
              alt='cart logo'
              className='object-contain w-6 pr-2'
            />
            <Link to={'/'}>Home</Link>
          </li>
          <li className='flex justify-center hover:text-orange-500'>
            <img
              src='https://www.svgrepo.com/show/486514/about-filled.svg'
              alt='cart logo'
              className='object-contain w-6 pr-2'
            />
            <Link to={'/about'}>About Us</Link>
          </li>
          <li className='flex justify-center hover:text-orange-500'>
            <img
              src='https://www.svgrepo.com/show/448999/contact-us.svg'
              alt='cart logo'
              className='object-contain w-6 pr-2'
            />
            <Link to={'/contact'}>Contact Us</Link>
          </li>
          <li className='flex justify-center hover:text-orange-500'>
            <img
              src='https://www.svgrepo.com/show/488223/grocery-bag.svg'
              alt='cart logo'
              className='object-contain w-6 pr-2'
            />
            <Link to={'/grocery'}>Grocery</Link>
          </li>
          <li className='flex justify-center hover:text-orange-500'>
            <img
              src='https://www.svgrepo.com/show/535711/user.svg'
              alt='cart logo'
              className='object-contain w-6 pr-2 '
            />
            <button
              onClick={() => {
                buttonText == 'Login'
                  ? setButtonText('Logout')
                  : setButtonText('Login');
              }}>
              {buttonText}
            </button>
          </li>
          <Link to={'/cart'}>
            <li className='flex justify-center hover:text-orange-500'>
              <img
                src='https://www.svgrepo.com/show/533044/cart-shopping-fast.svg'
                alt='cart logo'
                className='object-contain w-6 pr-2'
              />
              Cart {cartItems.length}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
