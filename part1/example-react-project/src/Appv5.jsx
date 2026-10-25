import { useState } from 'react';

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    );
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  );
};

const App = () => {
  const [ left, setLeft ] = useState(0);
  const [ right, setRight ] = useState(0);
  const [ allClicks, setAllClicks ] = useState([]);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
  };

  return (
    <div>
      <Display counter={left} />
      <Button
        onClick={handleLeftClick}
        text='left'
      />
      <Button
        onClick={handleRightClick}
        text='right'
      />
      <Display counter={right} />
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;