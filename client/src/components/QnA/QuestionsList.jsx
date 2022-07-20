import React from 'react';
import propTypes from 'prop-types';
import Question from './Question';
import MoreQuestions from './MoreQuestions';

function QuestionsList({ questions, productId, searchInput, displayQuestions, setDisplayQuestions
}) {
  // const answerKey = questions.answers;
  // console.log(answerKey, 'keyyy');
  // console.log(displayQuestions, 'display questionsss');
  // console.log(questions, 'here is questionsss');
  return (
    <div className="question-list">
      {/* {console.log('SEARCH INPUT = ', searchInput)}
      {console.log('QUESTIONS = ', questions)} */}
      {searchInput === null
        ? displayQuestions.map((question, count) => {
          // count >= 2 ?
          //   console.log(question, count, 'here to test')
          //     (<MoreQuestions
          //       questions={questions}
          //       key={question.question_id}
          //     />)
          if (count >= 3) {
            return (
              <MoreQuestions
                questions={questions}
                key={question.question_id}
                displayQuestions={displayQuestions}
                setDisplayQuestions={setDisplayQuestions}
              />
            );
          }
          return (
            <Question
              question={question}
              productId={productId}
              key={question.question_id}
            />
          );
          // :
          // console.log('ELSE', question, count),
          // (<Question
          //   question={question}
          //   productId={productId}
          //   key={question.question_id}
          // />)
        })
        : questions.filter((question) => {
          if (question && question.question && question.question_body.toLowerCase()
            .includes(searchInput.toLowerCase())) {
            return question;
          }
        })
          .slice(0, 5).map((question, count) => (
            count >= 2
              ? (
                <MoreQuestions
                  questions={questions}
                  key={question.question_id}
                />
              )
              : (
                <Question
                  question={question}
                  questionId={productId}
                  key={question.question_id}
                />
              )
          ))}
    </div>
  )
}

QuestionsList.propTypes = {
  productId: propTypes.number,
  questions: propTypes.arrayOf(propTypes.objectOf(propTypes.any)),
};

QuestionsList.defaultProps = {
  productId: 40351,
  questions: [],
};

export default QuestionsList;
