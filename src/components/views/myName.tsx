import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import { useRandomTextColor } from "../Hooks/RandomColorHooks";
import { useRandomFontWeight } from "../Hooks/RandomFontWeightHooks";

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

const TextContainer = styled.div<{ isBoxClicked: boolean }>`
  /* 스타일 설정 */
  opacity: ${({ isBoxClicked }) => (isBoxClicked ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const BoxContent = ({ isBoxClicked }: { isBoxClicked: boolean }) => {
  const fontType: Array<number> = [100, 300, 500, 700, 900];
  const fontWeight = useRandomFontWeight(fontType);
  const textcolor = useRandomTextColor();

  return (
    <TextContainer className="nameBox" isBoxClicked={isBoxClicked}>
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
  );
};
