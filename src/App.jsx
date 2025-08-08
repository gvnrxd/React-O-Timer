import { useState } from "react";
import Header from "./components/Header";
import TimerSection from "./components/TimerSection";
import TimerButtons from "./components/TimerButtons";
import CustomInput from "./components/CustomInput";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <TimerSection />
      <TimerButtons />
      <CustomInput />
      <Footer />
    </>
  );
}

export default App;
