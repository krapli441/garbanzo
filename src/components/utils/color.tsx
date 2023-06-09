// 리액트 라이브러리
import React, { useState, useEffect } from "react";

// 리액트 컴포넌트

// * 본문

function RandomGradientColor() {
  const color1 = GenerateRandomHexColor();
  const color2 = GenerateRandomHexColor();
  const color3 = GenerateRandomHexColor();

  const gradient = `linear-gradient(to right, ${color1}, ${color2}, ${color3})`;

  return gradient;
}

function GenerateRandomHexColor() {
  const color = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${color}`;
}

export default RandomGradientColor;
