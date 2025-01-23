import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherChart from './WeatherChart';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState('');

  const fetchWeatherData = async (location) => {
    const apiKey = 'e5b2bb4e6b834ef6a6f20016252301';
    const baseUrl = 'http://api.weatherapi.com/v1/forecast.json';

    try {
      const response = await fetch(`${baseUrl}?key=${apiKey}&q=${location}&days=3`);

      if (!response.ok) throw new Error('Failed to fetch data');

      const result = await response.json();

      // Process data to include temperature, humidity, and wind speed
      const data = result.forecast.forecastday.map((day) => ({
        date: day.date,
        location: location,
        temperature: day.day.avgtemp_c, // Average temperature
        humidity: day.day.avghumidity, // Average humidity
        windSpeed: day.day.maxwind_kph, // Maximum wind speed in km/h
      }));

      setWeatherData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeatherData([]);
    }
  };

  return (
    <div className="app">
      <h1>Weather Forecast Viewer</h1>
      <WeatherForm onSearch={fetchWeatherData} />
      {error && <p className="error">{error}</p>}
      {weatherData.length > 0 && <WeatherChart data={weatherData} />}
    </div>
  );
}

export default App;
