import { useState, useEffect } from "react";

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
