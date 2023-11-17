import MenuItem from './MenuItem.jsx';

const Menu = ({ menu }) => {
  return (
    <div className='container'>
      {menu.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};
export default Menu;
