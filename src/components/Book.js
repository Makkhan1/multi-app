import React from "react";

export default function Book(props) {
  let mystyle = {
    backgroundColor: "black",
    color: "white",
    borderColor: "white",
  };

  let mystyle2 = {
    backgroundColor: "white",
    color: "black",
    borderColor: "black",
  };

  return (
    <div className="card" style={props.mode === "dark" ? mystyle : mystyle2}>
      <span className="number">#{props.number + 1}</span>
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <h4>{props.Brand}</h4>
    </div>
  );
}
