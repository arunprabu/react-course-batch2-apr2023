import { useState } from 'react';

const Counter = () => {
  const [ticker, setTicker] = useState(0);

  const handleIncrement = () => {
    setTicker(ticker + 1);
  };

  return (
    <div>
      <h2>Counter | Testing State with Event</h2>
      <p data-testid="counterValue">Counter Value: {ticker}</p>
      <button
        type="button"
        data-testid="incrementBtn"
        className="btn btn-sm btn-success"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button type="button" className="btn btn-sm btn-danger">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
