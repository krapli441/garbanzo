// 리액트 라이브러리
import React from "react";
import styled from "styled-components";

// 리액트 컴포넌트

//* 본문

const BottomStyle = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: white;
`;

export default function Bottom() {
  return <BottomStyle className="bottom">이곳은 바텀 바텀</BottomStyle>;
}
