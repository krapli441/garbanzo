// 리액트 라이브러리
import React from "react";
import styled from "styled-components";

// 리액트 컴포넌트

// * 본문

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100vw;
  height: 10vh;
  background-color: black;
  color: white;
`;

export default function Header() {
  return (
    <>
      <HeaderStyle className="header">
        <h1 className="titleText">krapli's portpolio</h1>
      </HeaderStyle>
    </>
  );
}
