// 리액트 라이브러리
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 리액트 컴포넌트
import RandomGradientColor from "../utils/color";
import { text } from "stream/consumers";

// * 본문

// main div 스타일링
const MainStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MyName = styled.p<{ fontWeight: string }>`
  font-size: 48px;
  font-weight: ${({ fontWeight }) => fontWeight};
  transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  color: ${RandomGradientColor()};
`;

export default function Main() {
  const [fontWeight, setFontWeight] = useState("bold");
  const fontType: Array<string | number> = [
    100, 200, 300, 400, 500, 600, 700, 800, 900,
  ];

  // main 텍스트의 굵기가 랜덤으로 변함
  useEffect(() => {
    const timer = setInterval(() => {
      const randomFontWeight = Math.floor(Math.random() * fontType.length);
      const newFontWeight = String(fontType[randomFontWeight]);
      setFontWeight(newFontWeight);
    }, 1000);
  }, []);

  return (
    <>
      <MainStyle className="main">
        안녕하세요.
        <MyName className="nameText" fontWeight={fontWeight}>
          박준형
        </MyName>
        입니다.
      </MainStyle>
    </>
  );
}
