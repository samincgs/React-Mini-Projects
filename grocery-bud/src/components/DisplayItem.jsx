import SingleItem from './SingleItem.jsx';

const DisplayItem = ({ items, deleteItem, crossItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            {...item}
            deleteItem={deleteItem}
            crossItem={crossItem}
          />
        );
      })}
    </div>
  );
};
export default DisplayItem;
