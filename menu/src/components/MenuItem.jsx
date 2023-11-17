const MenuItem = ({ title, price, img, desc }) => {
  return (
    <div className='menu'>
      <img src={img} alt={title} className='img' />
      <div className='info-content'>
        <div className='info-center'>
          <h4>{title}</h4>
          <span>${price}</span>
        </div>
        <p className='desc'>{desc}</p>
      </div>
    </div>
  );
};
export default MenuItem;
