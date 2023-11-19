const Buttons = ({ jobs, setCurrentCompany, currentCompany }) => {
  return (
    <div className='btn-container'>
      {jobs.map((item, index) => {
        return (
          <button
            type='button'
            key={item.id}
            className={index === currentCompany ? 'btn active-btn' : 'btn'}
            onClick={() => setCurrentCompany(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
