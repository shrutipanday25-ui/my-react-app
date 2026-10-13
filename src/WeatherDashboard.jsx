import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import WeatherCard from "./WeatherCard";

function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (city.trim() === "") {
      setWeatherData(null);
      setError("");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError("");

    const timerId = setTimeout(() => {
      const mockWeather = {
        city: city,
        temperature: 28,
        humidity: 65,
        conditions: "Partly cloudy",
      };

      setWeatherData(mockWeather);
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [city]);

  return (
    <div>
      <h1>Weather Dashboard</h1>

      <SearchInput city={city} setCity={setCity} />

      {isLoading && <p>Loading weather...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <WeatherCard weatherData={weatherData} />
      )}
    </div>
  );
}

export default WeatherDashboard;