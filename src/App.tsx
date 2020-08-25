import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Camera from "./components/Camera";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Camera />
      </header>
    </div>
  );
}

export default App;
