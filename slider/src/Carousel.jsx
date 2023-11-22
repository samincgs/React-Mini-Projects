import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

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
            <FaQuoteRight className='icon' />
          </div>
        );
      })}
      <div className='btn-container'>
        <button type='button' className='prev'>
          <FaChevronLeft />
        </button>
        <button type='button' className='next'>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
