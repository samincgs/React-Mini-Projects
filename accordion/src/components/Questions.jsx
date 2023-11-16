import SingleQuestion from './SingleQuestion.jsx';

const Questions = ({ questions, activeId, toggleActiveId }) => {
  return (
    <div className='container'>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleActiveId={toggleActiveId}
          />
        );
      })}
    </div>
  );
};
export default Questions;
