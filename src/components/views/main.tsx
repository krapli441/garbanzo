// 리액트 라이브러리, 훅스
import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useRandomTextColor } from "../Hooks/RandomColorHooks";
import { useRandomFontWeight } from "../Hooks/RandomFontWeightHooks";

// 리액트 컴포넌트
import { Box } from "../fragments/box";
import { BoxContent } from "./myName";

// * 본문

const MainStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
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
          {!isBoxClicked && <BoxContent isVisible={!isBoxClicked} />}
        </Box>
      </MainStyle>
    </>
  );
}
