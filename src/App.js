import React from 'react';
import './App.css';
import Countdown from 'react-countdown';

function App() {
  const now = new Date();
  const target = new Date('2021-01-20T12:00:00');
  // const target = Date.now() - 1000;

  const expired = now > target;

  return (
    <div style={{ textAlign: 'center' }}>

      {expired && (
      // timer is expired
      <h1 style={{ color: 'green' }}>
        YES!
      </h1>
      )}

      {!expired && (
      // timer is not expired
      <>
        <h1>NOT YET.</h1>

        <div
          className="clock"
        >

          <Countdown
            date={target}
          />
        </div>

      </>
      )}

    </div>
  );
}

export default App;
