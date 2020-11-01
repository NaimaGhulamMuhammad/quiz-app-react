import React from "react";
import styles from "./answers.css"



function Answers (props){

const choice = props.ans  
    return(
        <div className={props.class} onClick={() => props.handleClick(choice)}>
            <span  >{choice}</span>
        </div>
    )
}

export default Answers;