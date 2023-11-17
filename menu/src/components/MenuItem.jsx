const MenuItem = ({ title, price, img, desc }) => {
  return (
    <div className='menu'>
      <img src={img} alt={title} className='img' />
      <div className='info-content'>
        <div className='info-center'>
          <h4 className='title'>{title}</h4>
          <span className='info-price'>${price}</span>
        </div>
        <p className='desc'>{desc}</p>
      </div>
    </div>
  );
};
export default MenuItem;
