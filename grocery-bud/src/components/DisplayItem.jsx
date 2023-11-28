import SingleItem from './SingleItem.jsx';

const DisplayItem = ({ items, deleteItem }) => {
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} deleteItem={deleteItem} />;
      })}
    </div>
  );
};
export default DisplayItem;
