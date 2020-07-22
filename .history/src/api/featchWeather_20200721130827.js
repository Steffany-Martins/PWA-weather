import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather";

const fetchWeather = async (query) => {
  const response = await axios.get(URL);
};
