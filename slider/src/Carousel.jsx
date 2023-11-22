import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Carousel = ({ people, currentPerson, setCurrentPerson }) => {
  const prevButton = () => {};

  const nextButton = () => {};

  return (
    <div className='slider-container'>
      {people.map((person, index) => {
        const { image, name, job, desc } = person;
        return (
          <div
            className='slide'
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%)`,
            }}
          >
            <img src={image} alt={name} className='slider-img' />
            <h3 className='name'>{name}</h3>
            <p className='job'>{job}</p>
            <p className='desc'>{desc}</p>
            <FaQuoteRight className='icon' />
          </div>
        );
      })}
      <div className='btn-container'>
        <button type='button' className='prev' onClick={prevButton}>
          <FaChevronLeft />
        </button>
        <button type='button' className='next' onClick={nextButton}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
