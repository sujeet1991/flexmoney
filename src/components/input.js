import React from "react";

const Input = (props) => {
  return (
    <div class="info">
      <label for="cardholdername">{props.label}</label>
      <input
        onChange={(e) => props.changeHandler(props.name, e.target.value)}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        id={props.id}
        type={props.type}
      />
      <span className="erroMsg">{props.error["nameError"]}</span>
    </div>
  );
};

export default Input;
