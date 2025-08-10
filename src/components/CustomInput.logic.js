import React from "react";
import CustomInput from "./CustomInput";

// CustomInput.logic.js
function handleOnChange(event, onInputChange, min = 1, max = 1400) {
  // keep digits only (blocks pasted junk too)
  let v = event.target.value.replace(/[^\d]/g, "");

  // allow clearing
  if (v === "") {
    onInputChange("");
    return;
  }

  // clamp to [min, max]
  const n = Math.max(min, Math.min(max, Number(v)));
  onInputChange(String(n));
}

export default handleOnChange;
