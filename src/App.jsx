import { React, useState, useEffect } from "react";
import Header from "./components/Header";
import TimerSection from "./components/TimerSection";
import TimerButtons from "./components/TimerButtons";
import CustomInput from "./components/CustomInput";
import Footer from "./components/Footer";

function App() {
  const [timer, setTimer] = useState("");
  const [timerCountDown, setTimerCountDown] = useState("");
  function handleReset() {
    setTimer("");
    setTimerCountDown("");
  }
  function handleStart() {
    setTimerCountDown(timer);
  }
  function handleCountDown() {
    setTimerCountDown(`${timer} - 1`);
    setTimer("");
  }

  const displayTimer =
    timerCountDown !== ""
      ? `${timerCountDown}:00`
      : timer !== ""
      ? `${timer}:00`
      : "0:00";
  return (
    <>
      <Header />
      <h2>{timerCountDown}</h2>
      <TimerSection
        timerCountDown={timerCountDown}
        setTimerCountDown={setTimerCountDown}
        timer={timer}
        setTimer={setTimer}
        displayTimer={displayTimer}
      />
      <TimerButtons setTimer={setTimer} />
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
