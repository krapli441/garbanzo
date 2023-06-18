// customHooks.ts

import { useState, useEffect } from "react";
import RandomGradientColor from "../utils/color";

export function useRandomTextColor() {
  const [textColor, setTextColor] = useState(RandomGradientColor());

  useEffect(() => {
    const timer = setInterval(() => {
      setTextColor(RandomGradientColor());
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return textColor;
}
