// import React, { useState } from 'react';
// import WeatherForm from './WeatherForm';
// import WeatherInfo from './WeatherInfo';
// import './App.css';

// function App() {
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState('');
//   // console.log(apiKey);

//   const fetchWeather = async (city) => {
//     // const apiKey = '';
//     console.log(process.env.REACT_APP_WEATHER_APIKEY);
//     // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_APIKEY}&units=metric`;

//     try {
//       const response = await fetch(url);
//       if (!response.ok) throw new Error('City not found');
//       const data = await response.json();
//       setWeather(data);
//       setError('');
//     } catch (err) {
//       setError(err.message);
//       setWeather(null);
//     }
//   };

//   return (
//     <div className="app">
//       <h1>Simple Weather App</h1>
//       <WeatherForm onSearch={fetchWeather} />
//       {error && <p className="error">{error}</p>}
//       {weather && <WeatherInfo data={weather} />}
//     </div>
//   );
// }

// export default App;


// weatherstack

import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherChart from './WeatherChart';
import './App.css'; 


function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState('');

  const fetchWeatherData = async (location, startDate, endDate) => {
    const apiKey = 'ZCBPEWFX7766BHVBH6SMHZG4R'; // Replace with your API key
    console.log({ location, startDate, endDate });
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${startDate}/${endDate}?unitGroup=metric&key=${apiKey}&contentType=json`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();

      const processedData = data.days.map((day) => ({
        date: day.datetime,
        temperature: day.temp,
      }));

      setWeatherData(processedData);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeatherData([]);
    }
  };

  return (
    <div className="app">
      <h1>Weather Data Viewer</h1>
      <WeatherForm onSearch={fetchWeatherData} />
      {error && <p className="error">{error}</p>}
      {weatherData.length > 0 && <WeatherChart data={weatherData} />}
    </div>
  );
}

export default App;
