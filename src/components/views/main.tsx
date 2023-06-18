// 리액트 라이브러리
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// 리액트 컴포넌트
import RandomGradientColor from "../utils/color";
import styles from "../../css/main.style";

// * 본문

// main div 스타일링
const MainStyle = styled.div`
  ${styles.MainStyle}
`;

// 그라디언트 애니메이션 keyframes 설정
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// 내 이름이 나오는 부분에 대한 스타일링
const MyName = styled.p<{ fontWeight: string; textColor: string }>`
  font-size: 48px;
  font-weight: ${({ fontWeight }) => fontWeight};
  background: ${({ textColor }) => textColor};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); background 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-size: 200% auto;
	// 위에 선언한 keyframe을 animation에 넣어줌.
  animation: ${gradientAnimation} 5s ease-in-out infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Main() {
  const [fontWeight, setFontWeight] = useState("bold");
  const fontType: Array<string | number> = [
    100, 200, 300, 400, 500, 600, 700, 800, 900,
  ];
  const [textColor, setTextColor] = useState(RandomGradientColor());

  // main 텍스트의 굵기가 랜덤으로 변함
  useEffect(() => {
    const timer = setInterval(() => {
      const randomFontWeight = Math.floor(Math.random() * fontType.length);
      const newFontWeight = String(fontType[randomFontWeight]);
      setFontWeight(newFontWeight);
    }, 1000);
  }, []);

  // main 텍스트의 색깔이 랜덤으로 변함
  useEffect(() => {
    const timer = setInterval(() => {
      setTextColor(RandomGradientColor());
    }, 5000);

    return () => clearInterval(timer); // 타이머 정리
  }, []);

  return (
    <>
      <MainStyle className="main">
        안녕하세요.
        <MyName
          className="nameText"
          fontWeight={fontWeight}
          textColor={textColor}
        >
          박준형
        </MyName>
        입니다.
      </MainStyle>
    </>
  );
}
