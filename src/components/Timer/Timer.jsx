import React from 'react';
import { useEffect, useState } from 'react';

const Timer = () => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute]  = useState(0);
    const [hour, seHour]  = useState(0);
    useEffect(() => {
    
        setTimeout(() => setSecond(second + 1), 1000)
        if(second === 60){
            setMinute(minute + 1);
            setSecond(0);
        }
        if (minute === 60){
            seHour(hour + 1);
            setMinute(0)
            setSecond(0);
        }

    }, [second, minute, hour]);
    return (
        <div>
            <h1 id="timer"> {hour}h:{minute}m:{second}s</h1>
        </div>
    );
};
/** 
  return (
      <div>
          <h1 id="timer"> 09:30 </h1>
      </div>
  );
*/

export default Timer;