import { React, useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import TimerSection from "./components/TimerSection";
import TimerButtons from "./components/TimerButtons";
import CustomInput from "./components/CustomInput";
import Footer from "./components/Footer";

function App() {
  const [timer, setTimer] = useState(""); // minutes as string
  const [timerCountDown, setTimerCountDown] = useState(null); // seconds or null
  const intervalRef = useRef(null);

  const clearTick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  function handleReset() {
    clearTick();
    setTimer("");
    setTimerCountDown(null);
  }

  function handleStart() {
    // staging mode: show minutes again (no ticking)
    setTimerCountDown(null);
  }

  function handleCountDown() {
    if (timer.trim() === "") return;
    const minutes = parseInt(timer, 10);
    if (isNaN(minutes) || minutes < 1 || minutes > 1400) {
      alert("Enter a value between 1 and 1400 minutes.");
      return;
    }
    const totalSeconds = minutes * 60;
    setTimerCountDown(totalSeconds);
    setTimer("");
    clearTick();

    intervalRef.current = setInterval(() => {
      setTimerCountDown((prev) => {
        if (prev == null) {
          clearTick();
          return null;
        }
        if (prev <= 1) {
          clearTick();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  const formatTime = (secs) => {
    if (secs == null) return "0:00";
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return h > 0
      ? `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
          .toString()
          .padStart(2, "0")}`
      : `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const displayTimer =
    timerCountDown != null
      ? formatTime(timerCountDown)
      : timer !== ""
      ? `${parseInt(timer || "0", 10)
          .toString()
          .padStart(2, "0")}:00`
      : "0:00";

  useEffect(() => {
    return clearTick; // cleanup on unmount
  }, []);

  return (
    <>
      <Header />

      <TimerSection
        timer={timer}
        displayTimer={displayTimer}
        onReset={handleReset}
      />

      <TimerButtons setTimer={(m) => setTimer(String(m))} />

      <CustomInput
        timer={timer}
        setTimer={setTimer}
        handleCountDown={handleCountDown}
        min={1}
        max={1400}
      />

      <Footer />
    </>
  );
}

export default App;
