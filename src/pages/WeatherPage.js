import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/WeatherSlice"; // Import the correct action

const WeatherPage = () => {
  const { city } = useParams();
  const dispatch = useDispatch();

  // Get weather state from Redux
  const { data, status, error } = useSelector((state) => state.weather);

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city)); // Dispatch action
    }
  }, [city, dispatch]);

  return (
    <div>
      <h2>Weather in {city}</h2>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error || "Error fetching weather data."}</p>}

      {status === "succeeded" && data && (
        <div>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Weather: {data.weather[0].description}</p>

        </div>
      )}
    </div>
  );
};

export default WeatherPage;
