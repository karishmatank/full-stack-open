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
  const [ left, setLeft ] = useState(0);
  const [ right, setRight ] = useState(0);
  const [ allClicks, setAllClicks ] = useState([]);
  const [ total, setTotal ] = useState(0);

  const handleLeftClick = () => {
    // We don't mutate the array, we create a new one
    // and use the set function to set the new array state
    setAllClicks(allClicks.concat('L'));

    // State updates are async
    // After we call `setLeft`, the state of left hasn't updated yet
    // which is why we use an `updatedLeft` variable to use the new state immediately
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
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
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  );
};

export default App;