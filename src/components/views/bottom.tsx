// 리액트 라이브러리
import React from "react";
import styled from "styled-components";

// 리액트 컴포넌트

//* 본문

const BottomStyle = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: black;
  color: white;
`;

export default function Bottom() {
  return (
    <BottomStyle className="bottom">
      <h1>krapli441@gmail.com</h1>
    </BottomStyle>
  );
}
