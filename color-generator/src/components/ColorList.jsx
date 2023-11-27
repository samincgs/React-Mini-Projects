import SingleColor from './SingleColor.jsx';
import { nanoid } from 'nanoid';

const ColorList = ({ colors }) => {
  return (
    <div className='list-container'>
      {colors.map((color, index) => {
        // console.log(color);
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </div>
  );
};
export default ColorList;
