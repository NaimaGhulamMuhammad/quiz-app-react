import React, { Component } from "react";
import QuizArea from "./quizarea";
import ScoreArea from "./scoreArea";
import DataSet from "../Api/dataset";
import Result from "./Result";
import styles from "../App.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: DataSet,
      correct: 0,
      inCorrect: 0,
      isPassed: false,
      isFail: false,
      isFinished: false,
      count: 0,
      class: "answers "
    };
  }
  click = () => {
    this.setState({
      count: this.state.count + 1,
      class: "answers"
    });

    if (this.state.count === this.state.dataset.length - 1) {
      this.setState({
        isFinished: true
      });
    }
  };
  check = (ans) => {
    if (ans === this.state.dataset[this.state.count].ans) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ inCorrect: this.state.inCorrect + 1 });
    }
    if (this.state.correct > this.state.dataset.length - 2) {
      this.setState({ isPassed: true });
    } else {
      this.setState({ isFail: true });
    }
    this.setState({ class: "answers nonClick" });
  };

  render() {
    const args = {
      correct: this.state.correct,
      incorrect: this.state.inCorrect,
      passed: this.state.isPassed,
      failed: this.state.isFail,
      total: this.state.dataset.length
    };
    const isFinished = this.state.isFinished;
    return (
      <div className="main">
        {isFinished ? (
          <Result remarks={args} />
        ) : (
          <>
            <QuizArea
              dataset={this.state.dataset}
              count={this.state.count}
              clickHandler={() => {
                this.click();
              }}
              check={(ans) => this.check(ans)}
              class={this.state.class}
            />
            <ScoreArea
              correct={this.state.correct}
              incorrect={this.state.inCorrect}
            />{" "}
          </>
        )}
      </div>
    );
  }
}
export default Main;
