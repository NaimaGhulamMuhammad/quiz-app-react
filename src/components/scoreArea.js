import React from "react";
import Correct from "./Correct";
import InCorrect from "./Incorrect";

function ScoreArea(props) {
  return (
    <div className="scorearea">
      <Correct correct={props.correct} />
      <InCorrect incorrect={props.incorrect} />
    </div>
  );
}

export default ScoreArea;
