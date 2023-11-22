const Carousel = ({ people }) => {
  return (
    <div className='slider-container'>
      {people.map((person) => {
        const { image, name, job, desc } = person;
        return (
          <div className='slide'>
            <img src={image} alt={name} className='slider-img' />
            <h3 className='name'>{name}</h3>
            <p className='job'>{job}</p>
            <p className='desc'>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Carousel;
