const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  return (
    <div
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className='color-weight'>{weight}%</p>
      <p className='color-hex'>{`#${hex}`}</p>
    </div>
  );
};
export default SingleColor;
