// import React, { useState } from 'react';

// function WeatherForm({ onSearch }) {
//   const [city, setCity] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (city.trim()) {
//       onSearch(city);
//       setCity('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="weather-form">
//       <input
//         type="text"
//         placeholder="Enter city"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button type="submit">Get Weather</button>
//     </form>
//   );
// }

// export default WeatherForm;



// weatherstack

import React, { useState } from 'react';

function WeatherForm({ onSearch }) {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location && startDate && endDate) {
      onSearch(location, startDate, endDate);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
