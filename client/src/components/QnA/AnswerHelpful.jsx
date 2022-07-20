import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  font-weight: normal;
`;

function AnswerHelpful({ answerHelfulness, answerId, answerName, answerDate }) {
  const [helpfulToggle, setHelpfulToggle] = useState(false);
  const [reportToggle, setReportToggle] = useState(false);

  const convertDate = (string) => new Date(string.substring(0, 10))
    .toString().substring(0, 10);

  const handleEventPut = (event) => {
    // eslint-disable-next-line no-unused-expressions, no-nested-ternary
    !helpfulToggle && event.target.getAttribute('name') === 'helpful'
      ? (axios.put(`/qa/answers/${answerId}/helpful`)
        .then((response) => console.log('added +1 helpful'), setHelpfulToggle(true))
        .catch((err) => console.log(err))
      )
      : !reportToggle && event.target.getAttribute('name') === 'report'
        ? (axios.put('/qa/questions/answer/helpful', {
          answerId,
          type: event.target.getAttribute('name'),
        })
          .then((response) => console.log('+1'))
          .catch((err) => console.log(err)), setReportToggle(true))
        : null;
  };
  return (
    <div className="answer-helpful-div">
      by
      {' '}
      {answerName}
      ,
      {convertDate(answerDate)}
      &nbsp;Helpful?&nbsp;
      <Button
        className="answer-helpful-button"
        type="button"
        name="helpful"
        onClick={(event) => { handleEventPut(event); }}
      >
        Yes
      </Button>
      {/* &#40; */}
      &nbsp;(
      {helpfulToggle ? answerHelfulness + 1 : answerHelfulness}
      ) | &nbsp;
      {/* {answerHelfulness} */}
      {/* &#41; */}
      <Button
        className="answer-report"
        type="button"
        onClick={event => { handleEventPut(event);}}
      >
        Report
      </Button>
    </div>
  );
}

export default AnswerHelpful;