import React from "react";

function Button(props) {
  return (
    <div>
      <button type="submit" onClick={props.handleClick}>
        {props.value}
      </button>
    </div>
  );
}

export default Button;
