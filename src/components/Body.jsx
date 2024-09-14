import RestaurantCard, { TopRated } from './RestaurantCard';
import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';
import '../../index.css';
import { Button, TextField } from '@mui/material';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfResto, setListOfResto] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const TopRatedRestaurants = TopRated(RestaurantCard);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );
      const data = await response.json();
      setListOfResto(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredList(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>
        Oops ! Looks like you're offline, Please check your internet connection
      </h1>
    );

  return listOfResto < 1 ? (
    <Shimmer />
  ) : (
    <div className='body mx-32'>
      <div className='flex m-6 align-middle justify-center'>
        <TextField
          id='outlined-basic'
          label='Search'
          variant='outlined'
          type='text'
          size='small'
          fullWidth
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button
          onClick={() => {
            const filteredRestoData = listOfResto.filter((resto) => {
              return resto.info.name
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            });

            setFilteredList(filteredRestoData);
          }}
          className='pl-4'>
          <img
            src='https://www.svgrepo.com/show/532555/search.svg'
            alt='search icon'
            className='object-contain w-10 pr-2'
          />
        </button>
        <button
          className='flex whitespace-nowrap'
          onClick={() => {
            const filteredRestoData = listOfResto.filter((resto) => {
              return resto.info.avgRating > 4.5;
            });
            setFilteredList(filteredRestoData);
          }}>
          <img
            src='https://www.svgrepo.com/show/450487/rating.svg'
            alt='search icon'
            className='object-contain w-10 pr-2 pt-1'
          />
        </button>
      </div>
      <div className='flex space-x-4 overflow-x-auto scollbar-visible py-5'>
        <Button
          variant='contained'
          size='medium'
          className='rounded-full bg-transparent text-neutral-950 normal-case font-medium shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0'>
          Filter
        </Button>
        <Button
          variant='contained'
          size='medium'
          className='rounded-full bg-transparent text-neutral-950 normal-case font-medium shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0'>
          Sort By
        </Button>
        <Button
          variant='contained'
          size='medium'
          className='rounded-full bg-transparent text-neutral-950 normal-case font-medium shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0'>
          Fast Delivery
        </Button>
        <Button
          variant='contained'
          size='medium'
          className='rounded-full bg-transparent text-neutral-950 normal-case font-medium shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0'>
          New on Swiggy
        </Button>
        <Button
          variant='contained'
          size='medium'
          className='rounded-full bg-transparent text-neutral-950 normal-case font-medium shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0'>
          Ratings 4.0+
        </Button>
        <Button
          variant='contained'
          size='medium'
          className='rounded-full bg-transparent text-neutral-950 normal-case font-medium shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0'>
          Pure Veg
        </Button>
        <Button
          variant='contained'
          size='medium'
          className='rounded-full bg-transparent text-neutral-950 normal-case font-medium shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0'>
          Offers
        </Button>
        <Button
          variant='contained'
          size='medium'
          className='rounded-full bg-transparent text-neutral-950 normal-case font-medium shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0'>
          Rs. 300- Rs. 600
        </Button>
        <Button
          variant='contained'
          size='medium'
          className='rounded-full bg-transparent text-neutral-950 normal-case font-medium shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0'>
          Less than Rs.300
        </Button>
        <Button
          variant='contained'
          size='medium'
          className='rounded-full bg-transparent text-neutral-950 normal-case font-medium shadow-sm border border-opacity-30 border-stone-500 border-solid flex-shrink-0'>
          Medium
        </Button>
      </div>
      <div className='grid grid-cols-4'>
        {filteredList.map((curr) => {
          console.log(curr);
          return curr.info.avgRating > 4.4 ? (
            <TopRatedRestaurants key={curr.info.id} resData={curr} />
          ) : (
            <RestaurantCard key={curr.info.id} resData={curr} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
