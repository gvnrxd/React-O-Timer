import React from "react";
import CustomInput from "./CustomInput";

// CustomInput.logic.js
function handleOnChange(e, onChange, min = 1, max = 1400) {
  // keep digits only (blocks pasted junk too)
  let v = e.target.value.replace(/[^\d]/g, "");

  // allow clearing
  if (v === "") {
    onChange("");
    return;
  }

  // clamp to [min, max]
  const n = Math.max(min, Math.min(max, Number(v)));
  onChange(String(n));
}

export default handleOnChange;
