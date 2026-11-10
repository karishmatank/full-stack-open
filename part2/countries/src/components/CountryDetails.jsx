const CountryDetails = ({ data }) => {
  if (!data) return null;
  const { name, capital, area, languages, flags, weather } = data;

  return (
    <div>
      <h1>{name.common}</h1>
      <p>Capital {capital.join(', ')}</p>
      <p>Area {area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.entries(languages).map(([ key, language ]) =>
          <li key={key}>{language}</li>
        )}
      </ul>
      <img src={flags.png} alt={flags.alt} />

      <h2>Weather in {capital}</h2>
      <p>Temperature {weather.main.temp} Celsius</p>
      <img src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}></img>
      <p>Wind {weather.wind.speed} m/s</p>
    </div>
  );
};

export default CountryDetails;