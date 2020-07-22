import React from "react";

import React, { useState } from "react";
import { fetchWeather } from "./api/featchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState(" ");
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="search..."
        value={query}
        onChange={setQuery}
      />
    </div>
  );
};

export default App;
