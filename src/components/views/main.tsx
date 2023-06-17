// 리액트 라이브러리
import React from "react";
import styled from "styled-components";

// 리액트 컴포넌트
import { Button } from "../fragments/button";

// * 본문

// main div 스타일링
const MainStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  background-color: black;
  color: white;
`;

// main 텍스트 스타일링
const MyName = styled.p`
  font-size: 48px;
  font-weight: bold;
`;

// Pretendard 폰트 속성을 가져옴.
const fontWeight: (string | number)[] = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  "bold",
  "bolder",
  "lighter",
  "normal",
];

export default function Main() {
  return (
    <>
      <MainStyle className="main">
        <MyName className="nameText">박준형</MyName>
      </MainStyle>
    </>
  );
}
