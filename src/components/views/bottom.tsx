// 리액트 라이브러리
import React from "react";
import styled from "styled-components";

// 리액트 컴포넌트

//* 본문

const BottomStyle = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100vw;
  height: 10vh;
  background-color: black;
  color: white;
  margin-bottom: 20px;
`;

const BottomText = styled.div`
  font-size: 20px;
  margin-left: 60px;
`;

export default function Bottom() {
  return (
    <BottomStyle className="bottom">
      <BottomText>krapli441@gmail.com</BottomText>
    </BottomStyle>
  );
}
