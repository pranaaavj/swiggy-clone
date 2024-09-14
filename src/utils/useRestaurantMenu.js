import { useEffect, useState } from 'react';
import { SWIGGY_API } from '../utils/constants';

const useRestaurantMenu = (id) => {
  const [restoInfo, setRestoInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(SWIGGY_API + id);
    const json = await response.json();
    setRestoInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  };

  return restoInfo;
};

export default useRestaurantMenu;
