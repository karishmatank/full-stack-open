import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import countriesService from './services/countries';
import weatherService from './services/weather';

const App = () => {
  const [query, setQuery] = useState('');
  const [allNames, setAllNames] = useState(null);
  const [candidates, setCandidates] = useState(null);
  const [match, setMatch] = useState(null);

  const onQueryChange = (event) => {
    setMatch(null);

    let input = event.target.value;
    setQuery(input);

    if (!input) {
      setCandidates(null);
    } else {
      setCandidates(allNames.filter(name => name.toLowerCase().includes(input.toLowerCase())));
    }
  };

  const fetchMatchInfo = async (name) => {
    let info;
    try {
      info = await countriesService.getInfo(name);
    } catch (error) {
      alert('Error getting match info: ' + error);
    }

    try {
      const [lat, lon] = info.capitalInfo.latlng;
      const weatherInfo = await weatherService.getWeather(lat, lon);
      info.weather = weatherInfo;

      // const iconName = weatherInfo.weather[0].icon;
      // const icon = await weatherService.getWeatherIcon(iconName);
      // info.weather.icon = icon;
    } catch (error) {
      alert('Error getting weather info: ' + error);
    }

    setMatch(info);
  };

  const onShowClick = async (countryName) => {
    await fetchMatchInfo(countryName);
  };

  useEffect(() => {
    countriesService
      .getAllNames()
      .then(countriesList => {
        setAllNames(countriesList);
      });
  }, []);

  useEffect(() => {
    // Never make a useEffect async, so we'll create an inner function instead
    const waitForData = async (countryName) => {
      await fetchMatchInfo(countryName);
    };

    if (candidates && candidates.length === 1) {
      const country = candidates[0];
      waitForData(country);
    }
  }, [candidates]);

  if (!allNames) {
    return null;
  }

  return (
    <div>
      <Filter query={query} onChange={onQueryChange} />
      <CountryList matches={candidates} onClick={onShowClick}/>
      <CountryDetails data={match} />
    </div>
  )
};

export default App;