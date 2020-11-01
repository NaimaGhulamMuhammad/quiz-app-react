import React from "react";
import Answers from "./Answers";
import Button from "./button";

class AnswerList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const optList = this.props.ansList.options;
    // var options = [];
    // for(var i=0; i<optList.length; i++){
    // var r = Math.floor(Math.random()*optList.length)
    // options.push(<Answers ans={optList[r]}/>)
    // optList.splice(r,1)
    // }
    const ansList = optList.map((ans) => (
      <Answers
        ans={ans}
        key={ans}
        check={this.props.ansList}
        handleClick={this.props.check}
        class={this.props.class}
      />
    ));
    return (
      <>
        {ansList}
        <Button value="Next" handleClick={this.props.clickHandler} />
      </>
    );
  }
}

export default AnswerList;
