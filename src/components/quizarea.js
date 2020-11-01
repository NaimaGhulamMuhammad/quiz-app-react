import React from "react";
import Questions from "./questions";
import AnswerList from "./answerList";

function QuizArea(props) {
  return (
    <div className="quizarea">
      <div className="questions">
        <h1>Question {props.count + 1}</h1>
        <Questions question={props.dataset[props.count].q} />
      </div>
      <div className="anslist">
        <AnswerList
          ansList={props.dataset[props.count]}
          clickHandler={props.clickHandler}
          check={props.check}
          class={props.class}
        />
      </div>
    </div>
  );
}

export default QuizArea;
