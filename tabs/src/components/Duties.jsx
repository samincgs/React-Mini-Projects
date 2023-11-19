import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Duties = ({ duties }) => {
  console.log(duties);
  return (
    <>
      {duties.map((duty) => {
        return (
          <div key={uuidv4()} className='job-desc'>
            <span className='job-icon'>
              <FaAngleDoubleRight />
            </span>
            <p className='job-duty'>{duty}</p>
          </div>
        );
      })}
    </>
  );
};
export default Duties;
