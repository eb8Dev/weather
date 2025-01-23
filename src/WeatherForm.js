import React, { useState } from 'react';

function WeatherForm({ onSearch }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location) {
      onSearch(location);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <input
        type="text"
        placeholder="Enter location (e.g., Guntur)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Get Forecast</button>
    </form>
  );
}

export default WeatherForm;

