import React, { useEffect, useState } from 'react'

function StopWatch() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliSeconds, setMilliSeconds] = useState(0);
    const [stop, setStop] = useState(true);

    // Starts Stopwatch
    const onStart = () => {
        setStop(false);
    };

    // Stops Stopwatch
    const onStop = () => {
        setStop(true);
    };

    // Resets Stopwatch
    const onReset = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setMilliSeconds(0);
        setStop(true);
    };
    // useEffect Logic
    useEffect(() => {
        let interval = null;
        if (!stop) {
            interval = setInterval(() => {

                setMilliSeconds(milliSeconds + 1)
                // milliSeconds > 999 taking longer than ms
                if (milliSeconds > 499) {
                    console.log("1 seconds");
                    setSeconds(seconds + 1);
                    setMilliSeconds(0);
                };
                if (seconds > 59) {
                    setMinutes(minutes + 1);
                    setSeconds(0);
                    console.log("1 minutes");
                };
                if (minutes > 59) {
                    setHours(hours + 1)
                    setMinutes(0);
                    console.log("1 hours");
                };
                if (hours >= 24) {
                    setHours(0);
                    setMinutes(0);
                    console.log("24 hours");
                };
            }, 1);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }
    },[stop,hours,milliSeconds,minutes,seconds]);
    return (
        <div className="stopwatch">
            <div className='stopwatch-timer' style={{ display: 'flex', justifyContent: "center" }}>
                <div className="hours">
                    <h3>{hours>=10 ? hours: "0" + hours }</h3>
                    <p>Hour</p>
                </div>
                <span className='colon'>:</span>
                <div className="minutes">
                    <h3>{minutes>=10 ? minutes: "0"+minutes }</h3>
                    <p>Min</p>
                </div>
                <span className='colon'>:</span>
                <div className="seconds">
                    <h3>{seconds>=10 ? seconds: "0"+seconds }</h3>
                    <p>Sec</p>
                </div>
                <span className='colon'>:</span>
                <div className="milli-seconds">
                    <h3>{milliSeconds}</h3>
                    <p>Ms</p>
                </div>
            </div>
            <div className="stopwatch-actions" style={{ display: 'flex', justifyContent: "center" }}>
                <div className="action-buttons">
                    <button onClick={onStart} >Start</button>
                </div>
                <div className="action-buttons">
                    <button onClick={onStop}>Stop</button>
                </div>
                <div className="action-buttons">
                    <button onClick={() => setStop(false)}>Resume</button>
                </div>
                <div className="action-buttons">
                    <button onClick={onReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default StopWatch
