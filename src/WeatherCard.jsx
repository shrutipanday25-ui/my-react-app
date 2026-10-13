function WeatherCard({ weatherData }) {
  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h2>{weatherData.city}</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Conditions: {weatherData.conditions}</p>
    </div>
  );
}

export default WeatherCard;