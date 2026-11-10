const CountryList = ({ matches, onClick }) => {
  if (!matches || matches.length === 1) return null;
  if (matches.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    );
  }

  return (
    <div>
      <ul>
        {matches.map(match =>
          <div key={match}>
            <li>
              {match}
              <button onClick={() => onClick(match)}>Show</button>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default CountryList;