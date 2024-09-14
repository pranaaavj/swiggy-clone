import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const [multiSelected, setMultiSelected] = useState([]);
  const { id } = useParams();

  restoInfo = useRestaurantMenu(id);

  const categories = restoInfo?.cards.filter((item) => {
    return (
      item.card?.card?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
  });

  function handleMultiSelection(index) {
    if (!multiSelected.includes(index)) {
      setMultiSelected([...multiSelected, index]);
    } else {
      const filteredMultiSelected = multiSelected.filter(
        (item) => item !== index
      );
      setMultiSelected(filteredMultiSelected);
    }
  }

  if (restoInfo === null) return <Shimmer />;

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={index}
            {...category?.card?.card}
            showItems={multiSelected.includes(index)}
            handleMultiSelection={() => {
              handleMultiSelection(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
