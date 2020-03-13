import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LeftEye from "./components/LeftEye/LeftEye";
import RightEye from "./components/RightEye/RightEye";
import Face from "./containers/Face";

function App() {
  return (
    <>
      <LeftEye />
      <RightEye />
      {/* <Face /> */}
    </>
  );
}

export default App;
