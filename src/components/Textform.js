import React, { useState } from "react";

export default function Usetextform(props) {
  //const [btntext, setbtntext] = useState("Enable dark mode");
  // const [mystyle, setMystyle] = useState(
  //   {
  //     color:"black",
  //     backgroundColor:"white"
  //   }
  // )

  // const handleclick=()=>
  // {
  //     if(mystyle.color==="black")
  //     {
  //       setMystyle({
  //         color:"white",
  //         backgroundColor:"black"
  //       })
  //       setbtntext("Enable light mode");
  //     }
  //     else{
  //       setMystyle({
  //         color:"black",
  //         backgroundColor:"white"
  //       });
  //       setbtntext("Enable dark mode");
  //     }
  // }

  const change = (event) => {
    setText(event.target.value);
  };

  const upper = () => {
    setText(text.toUpperCase());
  };
  const lower = () => {
    setText(text.toLowerCase());
  };
  const reset = () => {
    setText("");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <div className="my-3">
          <h2>{props.heading}</h2>
          <textarea
            name="text"
            id=""
            cols="120"
            rows="10"
            value={text}
            onChange={change}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={upper}>
          Upper Case
        </button>
        <button className="btn btn-primary" onClick={lower}>
          Lower Case
        </button>
        <button className="btn btn-primary" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="container">
        <h2 className="my-3">Your text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} words {text.length} character{" "}
        </p>
      </div>
    </>
  );
}
