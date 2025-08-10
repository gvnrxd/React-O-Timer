import { React, useState } from "react";
import Header from "./components/Header";
import TimerSection from "./components/TimerSection";
import TimerButtons from "./components/TimerButtons";
import CustomInput from "./components/CustomInput";
import Footer from "./components/Footer";

function App() {
  const [timer, setTimer] = useState("");
  function handleReset() {
    setTimer("");
  }
  function handleStart() {
    alert(`A ${timer} minute timer has been started`);
  }

  return (
    <>
      <Header />
      <TimerSection value={timer} setTimer={setTimer} />
      <TimerButtons setTimer={setTimer} />
      <CustomInput
        value={timer}
        onInputChange={setTimer}
        onStart={handleStart}
        min={1}
        max={1400}
      />
      <Footer />
    </>
  );
}

export default App;
