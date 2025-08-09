import React from "react";
import CustomInput from "./CustomInput";

// CustomInput.logic.js
function handleOnChange(event, onInputChange) {
  const value = event.target.value;
  if (/^\d*$/.test(value)) {
    // numbers only

    onInputChange(value === "" ? `0:00` : `${value}`);
  }
}

export default handleOnChange;
``