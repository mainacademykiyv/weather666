import React from 'react';
import { Grid } from 'semantic-ui-react';

import kiev from './img/Kiev.jpg';
import LV from './img/LV.jpg';
import Sydney from './img/Sydney.jpg';

const Main = ({ weatherData }) => {

  console.log(weatherData)

  const setCurrentCityBg = () => {
    switch (weatherData.sys.id) {
      case 8903:
        return kiev;
      case 7113:
        return LV;
      case 9600:
        return Sydney;
      default:
        return kiev;
    }
  }

  return (
    weatherData
      ? <>
        <img
          style={{
            position: 'absolute',
            opacity: 0.4,
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            zIndex: -1,
            objectFit: 'cover',
          }}
          src={setCurrentCityBg()}
          alt={weatherData.name} />
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <img
                style={{
                  backgroundColor: '#00000070',
                  borderRadius: 6,
                  padding: '10px 50px',
                }}
                height={200}
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="img" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <ul
                style={{
                  listStyle: 'none',
                  width: 360,
                  margin: 'auto',
                  textAlign: 'left',
                  fontSize: 32,
                  lineHeight: 1.5
                }}
              >
                <li>Temperature: {(weatherData.main.temp - 271.15).toFixed(2)} *C</li>
                <li>Pressure: {weatherData.main.pressure / 1000} MPa  </li>
                <li>Humidity: {weatherData.main.humidity} % </li>
                <li>Speed of wind: {weatherData.wind.speed} m/s</li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
      : null
  )
};

export default Main;