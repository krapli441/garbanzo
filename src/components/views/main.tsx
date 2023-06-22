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

const MainStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
`;

const MyName = styled.p`
  font-size:24px;
  font-family;
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
        </Box>
      </MainStyle>
    </>
  );
}
