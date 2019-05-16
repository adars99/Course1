import React from "react";
import ReactDOM from "react-dom";
import Course from "./Course";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Course />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
