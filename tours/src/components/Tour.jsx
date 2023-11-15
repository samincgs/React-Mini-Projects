const Tour = ({ id, image, info, name, price }) => {
  return (
    <div className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>$ {price}</span>
      <div className='tour-info'>
        <h3>{name}</h3>
        <p>{info}</p>
        <button type='button' className='btn'>
          not interested
        </button>
      </div>
    </div>
  );
};
export default Tour;
