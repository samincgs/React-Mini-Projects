import SingleColor from './SingleColor.jsx';
import { nanoid } from 'nanoid';

const ColorList = ({ colors }) => {
  return (
    <div className='list-container'>
      {colors.map((color) => {
        // console.log(color);
        return <SingleColor key={nanoid()} color={color} />;
      })}
    </div>
  );
};
export default ColorList;
