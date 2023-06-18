// 리액트 라이브러리, 훅스
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useRandomTextColor } from "../Hooks/RandomColorHooks";
import { useRandomFontWeight } from "../Hooks/RandomFontWeightHooks";

// 리액트 컴포넌트
import styles from "../../css/main.style";
// import Box from "../fragments/box";
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

const Box = styled.div<{ width: number; height: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 10px 20px;
  border: 2px solid white;
  transition: 0.4s ease;
  cursor: pointer;
`;

// 내 이름이 나오는 부분에 대한 스타일링
const MyName = styled.p<{ fontWeight: string; textcolor: string }>`
  font-size: 48px;
  font-weight: ${({ fontWeight }) => fontWeight};
  background: ${({ textcolor }) => textcolor};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); background 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-size: 200% auto;
  animation: ${gradientAnimation} 5s ease-in-out infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Main() {
  const fontType: Array<number> = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const fontWeight = useRandomFontWeight(fontType);
  const textcolor = useRandomTextColor();
  const [boxSize, setBoxSize] = useState({ width: 200, height: 200 });

  const handleClick = () => {
    setBoxSize((prevSize) => {
      if (prevSize.width === 200 && prevSize.height === 200) {
        return { width: 300, height: 300 };
      } else {
        return { width: 200, height: 200 };
      }
    });
  };

  return (
    <>
      <MainStyle className="main">
        <Box
          width={boxSize.width}
          height={boxSize.height}
          onClick={handleClick}
        >
          안녕하세요.
          <MyName
            className="nameText"
            fontWeight={fontWeight}
            textcolor={textcolor}
          >
            박준형
          </MyName>
          입니다.
        </Box>
      </MainStyle>
    </>
  );
}
