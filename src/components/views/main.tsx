// 리액트 라이브러리
import React from "react";
import styled from "styled-components";

// 리액트 컴포넌트
import Introduce from "../fragments/text";

// * 본문

const MainStyle = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: black;
`;

export default function Main() {
  return (
    <>
      <MainStyle className="main">
        <Introduce />
        이곳은 메인 메인
      </MainStyle>
    </>
  );
}
