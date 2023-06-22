// 리액트 라이브러리, 훅스
import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useRandomTextColor } from "../Hooks/RandomColorHooks";
import { useRandomFontWeight } from "../Hooks/RandomFontWeightHooks";

// 리액트 컴포넌트
import styles from "../../css/main.style";
import { Box } from "../fragments/box";
import Namebox from "./introduce";

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
const MyName = styled.p<{
  fontWeight: string;
  textcolor: string;
  opacity: number;
  fontSize: number;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  background: ${({ textcolor }) => textcolor};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); background 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-size: 200% auto;
  animation: ${gradientAnimation} 5s ease-in-out infinite;
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

const BoxContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Main() {
  const fontType: Array<number> = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const fontWeight = useRandomFontWeight(fontType);
  const textcolor = useRandomTextColor();
  // 기본 박스 크기
  const [boxSize, setBoxSize] = useState({ width: 12, height: 18 });
  const [opacity, setOpacity] = useState(1);
  const [fontSize, setFontSize] = useState(48);
  const [helloFontSize, setHelloFontSize] = useState(14);
  const [showText, setShowText] = useState(true);
  const [helloOpacity, setHelloOpacity] = useState(1);
  const [clickable, setClickable] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 클릭시 변경될 박스 크기
  const handleClick = () => {
    if (!clickable) return;

    setClickable(true); // 클릭 가능 상태를 비활성화

    setBoxSize((prevSize) => {
      setOpacity(1);
      setHelloOpacity(1);
      setFontSize(48);
      setHelloFontSize(14);

      setShowText(!showText); // showText 값을 토글로 변경

      if (prevSize.width === 95 && prevSize.height === 95) {
        return { width: 8, height: 15 };
      } else {
        setHelloFontSize(128);
        setHelloOpacity(0);
        setOpacity(0);
        setFontSize(256);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current); // 이전의 setTimeout을 취소
        }
        timeoutRef.current = setTimeout(() => {
          setShowText(false);
          setClickable(true); // 클릭 가능 상태로 변경
        }, 300); // 0.3초 후에 MyName 컴포넌트를 제거

        return { width: 95, height: 95 };
      }
    });
  };
  // 마우스 Enter 시 변경될 박스 크기
  const handleMouseEnter = () => {
    if (boxSize.width !== 95 || boxSize.height !== 95) {
      // 논리 연산자를 OR로 변경
      setBoxSize({ width: 15, height: 24 });
    }
  };

  // 마우스 Leave 시 변경될 박스 크기
  const handleMouseLeave = () => {
    if (boxSize.width !== 95 || boxSize.height !== 95) {
      // 논리 연산자를 OR로 변경
      setBoxSize({ width: 12, height: 18 });
    }
  };

  return (
    <>
      <MainStyle className="main">
        <Box
          width={boxSize.width}
          height={boxSize.height}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showText ? ( // 조건부 렌더링을 사용하여 showText 값이 true일 때만 MyName 컴포넌트를 렌더링한다.
            <BoxContents className="boxContents">
              <HelloName fontSize={helloFontSize} opacity={helloOpacity}>
                안녕하세요.
              </HelloName>
              <MyName
                className="nameText"
                fontSize={fontSize}
                fontWeight={fontWeight}
                textcolor={textcolor}
                opacity={opacity}
              >
                박준형
              </MyName>
              <HelloName fontSize={helloFontSize} opacity={helloOpacity}>
                입니다.
              </HelloName>
            </BoxContents>
          ) : (
            <Namebox />
          )}
        </Box>
      </MainStyle>
    </>
  );
}
