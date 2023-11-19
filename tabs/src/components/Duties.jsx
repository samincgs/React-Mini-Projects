const Duties = ({ duties }) => {
  console.log(duties);
  return (
    <div>
      {duties.map((duty) => {
        return (
          <div className='job-desc'>
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
