import React from "react";
import "./timer.css";
import { useEffect, useState } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, seHour] = useState(0);
  useEffect(() => {
    setTimeout(() => setSecond(second + 1), 1000);
    if (second === 60) {
      setMinute(minute + 1);
      setSecond(0);
    }
    if (minute === 60) {
      seHour(hour + 1);
      setMinute(0);
      setSecond(0);
    }
  }, [second, minute, hour]);
  return (
    <div id="divTimer">
      <h1 id="timer">
        {" "}
        {hour}h:{minute}m:{second}s
      </h1>
    </div>
  );
};

export default Timer;
