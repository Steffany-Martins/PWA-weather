import React, { useState } from "react";
import { fetchWeather } from "./api/featchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState(" ");

  const search = async (e) => {
    if (e.key == "Enter") {
      const data = await fetchWeather(query);
      console.log(data);
    }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
    </div>
  );
};

export default App;
