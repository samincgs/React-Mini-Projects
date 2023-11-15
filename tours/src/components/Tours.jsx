import Tour from './Tour.jsx';

const Tours = ({ tours }) => {
  return (
    <div>
      <div className='tour-title'>
        <h2>our tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          console.log(tour);
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </div>
  );
};
export default Tours;
