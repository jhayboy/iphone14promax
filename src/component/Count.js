import React, { useState, useEffect } from 'react';

function Countdown() {
  const [seconds, setSeconds] = useState(localStorage.getItem('countdownSeconds') || 300);
  const countdownInterval = 1000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, countdownInterval);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    localStorage.setItem('countdownSeconds', seconds);
  }, [seconds]);

  return (
    <div>
      <p>Countdown: {seconds} seconds</p>
    </div>
  );
}

export default Countdown;
