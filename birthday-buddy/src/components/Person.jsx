const Person = ({ name, age, image }) => {
  return (
    <div className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h3 className='person-name'>{name}</h3>
        <p className='person-age'>{age}</p>
      </div>
    </div>
  );
};

export default Person;
