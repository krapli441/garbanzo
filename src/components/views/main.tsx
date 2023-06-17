// 리액트 라이브러리
import React from "react";
import styled from "styled-components";

// 리액트 컴포넌트
import { Button } from "../fragments/button";

// * 본문

const MainStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  background-color: black;
  color: white;
`;

const MyName = styled.p`
  font-size: 48px;
  font-weight: bold;
`;

export default function Main() {
  return (
    <>
      <MainStyle className="main">
        <MyName>박준형</MyName>
      </MainStyle>
    </>
  );
}
