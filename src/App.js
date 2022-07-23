import React, { useState } from "react";
import "./App.css";
import Api from "./apitest";

 
function App(props) {
  return (
    <div className="app">
      <h1>weather מזג אוויר</h1>

      <Api/>
      
    </div>
  );
}
export default App;
