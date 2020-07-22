import React from "react";

import React, { useState } from "react";
import { fetchWeather } from "./api/featchWeather";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="search..."
        value={}
        onChange={}
      />
    </div>
  );
};

export default App;
