import "./App.css";
import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar
        title="Text Editor"
        about="About Us"
        togglemode={togglemode}
        mode={mode}
      />
      <Textform heading="Enter the text to analyze" mode={mode} />
      <Booklist mode={mode} />
    </>
  );
}

export default App;
