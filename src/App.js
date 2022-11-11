import React from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import WeatherGraph from "./components/WeatherGraph";
const apiKey = "18a50ec2677cda5f632f83396a361ee9";

function App() {
  const [weather, setWeather] = React.useState({});
  const [search, setSearch] = React.useState(false);

  return (
    <div className="app">
      <Header />
      <SearchBar
        setWeather={setWeather}
        apiKey={apiKey}
        setSearch={setSearch}
      />
      {search ? (
        <>
          <Weather weather={weather} />
          <WeatherGraph city={weather.city} apiKey={apiKey} />
        </>
      ) : (
        <h2>search for your location...</h2>
      )}
    </div>
  );
}

export default App;
