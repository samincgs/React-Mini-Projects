const Categories = ({ categories, findMenu }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='btn'
            key={index}
            onClick={() => findMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
