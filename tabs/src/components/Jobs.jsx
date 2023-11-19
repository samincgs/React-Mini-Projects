import Duties from './Duties.jsx';

const Jobs = ({ jobs }) => {
  const { title, company, dates, duties } = jobs[0];

  return (
    <div className='job-info'>
      <h2>{title}</h2>
      <span className='job-company'>{company}</span>
      <h4>{dates}</h4>
      <Duties duties={duties} />
    </div>
  );
};
export default Jobs;
