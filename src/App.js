import React, { useState, useEffect } from 'react';

import fetchWeatherData from './api';

import './App.css';

import Header from './Header';
import Main from './Main';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeatherByCityName('Kiev');
  }, []);

  const getWeatherByCityName = (city) => {
    fetchWeatherData(city)
      .then(res => res.json())
      .then(data => setWeatherData(data))
      .catch(console.log)
  };

  // console.log(weatherData);

  return (
    <div className="App">
      <Header getWeatherByCityName={getWeatherByCityName} />

      <Main weatherData={weatherData} />
    </div>
  );
}

export default App;
