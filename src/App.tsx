// 리액트 라이브러리
import React from "react";
import { render } from "react-dom";
import { createRoot, Root } from "react-dom/client";
import styled, { css } from "styled-components";

// 리액트 컴포넌트
import Header from "./components/views/header";
import Main from "./components/views/main";
import Bottom from "./components/views/bottom";

// css
import "./css/root.css";

// * center 스타일링

// * container 스타일링
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <>
      <Container className="container">
        <Header />
        <Main />
        <Bottom />
      </Container>
    </>
  );
}
