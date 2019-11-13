import key from './key';

export default (city) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&appid=${key}`);
};