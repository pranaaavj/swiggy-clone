import RestaurantItems from './RestaurantItems';

const RestaurantCategory = ({
  title,
  itemCards,
  showItems,
  handleMultiSelection,
}) => {
  return (
    <div className='w-6/12 mx-auto my-2 text-center'>
      <div
        className='w-auto cursor-pointer mx-auto my-2 shadow-md text-center flex justify-between px-6 h-10 items-center'
        onClick={handleMultiSelection}>
        <span className='text-xl font-semibold'>
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>
        {itemCards.map((itemCard) => {
          return (
            showItems && (
              <RestaurantItems
                key={itemCard.card.info.id}
                {...itemCard.card.info}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantCategory;
