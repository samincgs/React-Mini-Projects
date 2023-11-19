import Duties from './Duties.jsx';

const Jobs = ({ jobs }) => {
  const { title, company, dates, duties } = jobs[0];

  return (
    <div className='job-container'>
      <div className='job-info'>
        <h2>{title}</h2>
        <span>{company}</span>
        <h4>{dates}</h4>
        <div className='job-duties'>
          <Duties duties={duties} />
        </div>
      </div>
    </div>
  );
};
export default Jobs;
