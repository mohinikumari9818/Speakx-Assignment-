import React from "react";

const QuestionList = ({ questions }) => {
  if (questions.length === 0) {
    return <p className="no-results">No questions found.</p>;
  } 

  return (
    <ul className="question-list">
      {questions.map((qs) => (
        <li key={qs.id} className="question-item">
          <div>
            <strong className="question-title">{qs.title}</strong>
            <span className="question-type">({qs.type})</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
