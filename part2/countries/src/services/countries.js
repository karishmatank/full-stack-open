import axios from 'axios';
const rootUrl = 'https://studies.cs.helsinki.fi/restcountries';

const getAllNames = () => {
  return axios
    .get(`${rootUrl}/api/all`)
    .then(response => {
      return response.data.map(country => country.name.common);
    });
};

const getInfo = (countryName) => {
  return axios
    .get(`${rootUrl}/api/name/${countryName}`)
    .then((response) => response.data);
};

export default { getAllNames, getInfo };