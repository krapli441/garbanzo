// customHooks.ts

import { useState, useEffect } from "react";
import RandomGradientColor from "../utils/color";

export function useRandomFontWeight(fontType: Array<number>) {
  const [fontWeight, setFontWeight] = useState("bold");

  useEffect(() => {
    const timer = setInterval(() => {
      const randomFontWeight = Math.floor(Math.random() * fontType.length);
      const newFontWeight = String(fontType[randomFontWeight]);
      setFontWeight(newFontWeight);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return fontWeight;
}

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
