import { useEffect } from 'react';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Carousel = ({ people, currentPerson, setCurrentPerson }) => {
  const prevSlide = () => {
    if (currentPerson <= 0) {
      setCurrentPerson(people.length - 1);
    } else {
      setCurrentPerson(currentPerson - 1);
    }
  };

  const nextSlide = () => {
    if (currentPerson >= people.length - 1) {
      setCurrentPerson(0);
    } else {
      setCurrentPerson(currentPerson + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPerson]);

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
        <button type='button' className='prev' onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button type='button' className='next' onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
