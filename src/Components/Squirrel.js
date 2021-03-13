import React from 'react';

function Squirrel(props) {
  return (
    <div className="Squirrel">
      <h3>SQUIRREL CARD!</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Color: {props.color === "Gray" ? "Gray" : "Not Gray"}</p>
      <p>Runner: {props.running ? "🏃‍♂️" : " "}</p>
    </div>
  );
}

export default Squirrel;
