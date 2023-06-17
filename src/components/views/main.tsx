// 리액트 라이브러리
import React from "react";
import styled from "styled-components";

// 리액트 컴포넌트
import { Button } from "../fragments/button";

// * 본문

const MainStyle = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: black;
  color: white;
`;

export default function Main() {
  return (
    <>
      <MainStyle className="main">
        <Button>버튼</Button>
        <h1>박준형</h1>
      </MainStyle>
    </>
  );
}
