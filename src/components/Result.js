import React from "react";
import Pass from "../images/pass.png";
import Fail from "../images/fail.png";

function Result(props) {
  const image = props.remarks.passed ? Pass : Fail;
  return (
    <div className="result">
      <img src={image} />
      <h1>
        {props.remarks.passed ? <>Hurrah!! You Passed</> : <>Oops!! Fail</>}
      </h1>
      <p>
        Total : <span>{props.remarks.total}</span>
      </p>
      <p>
        Correct Answers : <span>{props.remarks.correct}</span>
      </p>
      <p>
        InCorrect Answers :<span>{props.remarks.incorrect}</span>
      </p>
      <p>
        Remarks :{" "}
        {props.remarks.passed ? <span>Passed</span> : <span>Fail</span>}
      </p>
    </div>
  );
}

export default Result;
