// 리액트 라이브러리
import React from "react";
import styled from "styled-components";

// 리액트 컴포넌트

// * 본문

const HeaderStyle = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: white;
`;

export default function Header() {
  return (
    <>
      <HeaderStyle className="header">
        <h1>헤더 영역입니다.</h1>
      </HeaderStyle>
    </>
  );
}
