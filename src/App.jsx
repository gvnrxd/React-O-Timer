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
  }
  function handleStart() {
    setTimerCountDown(timer);
  }
  function handleCountDown() {
    setTimerCountDown("Your " + timer + " minute timer has started");
  }

  return (
    <>
      <Header />
      <h2>{timerCountDown}</h2>
      <TimerSection
        timerCountDown={timerCountDown}
        timer={timer}
        setTimer={setTimer}
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
