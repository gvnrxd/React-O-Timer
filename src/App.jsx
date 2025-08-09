import { useState } from "react";
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

  return (
    <>
      <Header />
      <TimerSection value={timer} setTimer={setTimer} />
      <TimerButtons />
      <CustomInput
        value={timer}
        onInputChange={setTimer}
        onReset={handleReset}
      />
      <h3>Current Time: {timer}</h3>
      <Footer />
    </>
  );
}

export default App;
