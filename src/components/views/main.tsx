// 리액트 라이브러리, 훅스
import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useRandomTextColor } from "../Hooks/RandomColorHooks";
import { useRandomFontWeight } from "../Hooks/RandomFontWeightHooks";

// 리액트 컴포넌트
import styles from "../../css/main.style";
import { Box } from "../fragments/box";
import Namebox from "./introduce";
import { text } from "stream/consumers";

// * 본문

const MainStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
`;

const MyName = styled.p<{
  fontWeight: string;
  textcolor: string;
  opacity: number;
  fontSize: number;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  background: ${({ textcolor }) => textcolor};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: colorTransition 1s infinite;

  @keyframes colorTransition {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 50%;
    }
    100% {
      background-position: 100%;
    }
  }
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: ${({ opacity }) => opacity};
`;

const HelloName = styled.p<{
  fontSize: number;
  opacity: number;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  opacity: ${({ opacity }) => opacity};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: ${({ opacity }) => `rgba(255, 255, 255, ${opacity})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  align-items: center;
  flex-direction: column;
`;

export default function Main() {
  // 글씨체 굵기 배열
  const fontType: Array<number> = [100, 300, 500, 700, 900];
  const fontWeight = useRandomFontWeight(fontType);
  // 박준형 폰트 색상을 랜덤으로 생성하는 함수
  const textcolor = useRandomTextColor();

  // 박준형 이름 박스 클릭 이벤트
  const [isBoxClicked, setIsBoxClicked] = useState(false);
  const [boxSize, setBoxSize] = useState({ width: 10, height: 20 });

  const handleBoxClick = () => {
    setIsBoxClicked((prevClicked) => !prevClicked);
    if (isBoxClicked) {
      setBoxSize({ width: 10, height: 20 }); // 원래 크기
    } else {
      setBoxSize({ width: 95, height: 95 }); // 변경될 크기
    }
  };

  return (
    <>
      <MainStyle className="main">
        <Box
          width={boxSize.width}
          height={boxSize.height}
          onClick={handleBoxClick}
          className="clickBox"
        >
          <TextContainer isVisible={!isBoxClicked}>
            <HelloName fontSize={22} opacity={1}>
              안녕하세요.
            </HelloName>
            <MyName
              fontWeight={fontWeight}
              textcolor={textcolor}
              opacity={1}
              fontSize={50}
            >
              박준형
            </MyName>
            <HelloName fontSize={22} opacity={1}>
              입니다.
            </HelloName>
          </TextContainer>
        </Box>
      </MainStyle>
    </>
  );
}
