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
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); background 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: ${({ opacity }) => opacity};
`;

export default function Main() {
  const fontType: Array<number> = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const fontWeight = useRandomFontWeight(fontType);
  const textcolor = useRandomTextColor();
  // 기본 박스 크기

  return (
    <>
      <MainStyle className="main">
        <Box width={10} height={20}>
          안녕하세요.
          <MyName
            fontWeight={fontWeight}
            textcolor={textcolor}
            opacity={1}
            fontSize={32}
          >
            박준형
          </MyName>
          입니다.
        </Box>
      </MainStyle>
    </>
  );
}
