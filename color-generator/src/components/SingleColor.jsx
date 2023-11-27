const SingleColor = ({ color }) => {
  const { hex, weight } = color;
  return (
    <div className='color' style={{ backgroundColor: `#${hex}` }}>
      <p>{weight}%</p>
      <p>{`#${hex}`}</p>
    </div>
  );
};
export default SingleColor;
