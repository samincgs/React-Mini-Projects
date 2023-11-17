const Categories = ({ categories, findMenu }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            type='button'
            className='btn'
            key={category}
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
