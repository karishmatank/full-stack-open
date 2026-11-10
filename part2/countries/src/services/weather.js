import axios from 'axios';
const rootUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = (lat, lon) => {
  const params = {
    lat,
    lon,
    appid: import.meta.env.VITE_OPENWEATHER_KEY,
    units: 'metric',
  };

  return axios
    .get(rootUrl, {
      params: params
    })
    .then(response => response.data);
};

const getWeatherIcon = (iconName) => {
  return axios
    .get(`https://openweathermap.org/img/wn/${iconName}.png`)
    .then(response => response.data);
};

export default { getWeather, getWeatherIcon };