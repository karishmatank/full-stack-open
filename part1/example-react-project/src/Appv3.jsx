import { useState } from 'react';

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const App = () => {
  const [ clicks, setClicks ] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    // We don't directly mutate the object that `clicks` references
    // We create a new object and set the new state through `setClicks`
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setClicks(newClicks);
  };

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };

  return (
    <div>
      <Display counter={clicks.left} />
      <Button
        onClick={handleLeftClick}
        text='left'
      />
      <Button
        onClick={handleRightClick}
        text='right'
      />
      <Display counter={clicks.right} />
    </div>
  );
};

export default App;