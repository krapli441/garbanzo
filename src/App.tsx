// 리액트 라이브러리
import React from "react";
import { render } from "react-dom";
import { createRoot, Root } from "react-dom/client";
import styled from "styled-components";

// 리액트 컴포넌트
import Header from "./components/views/header";
import Main from "./components/views/main";
import Bottom from "./components/views/bottom";

// css
import "./css/container.css";

// * container 스타일링

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Bottom />
      </div>
    </>
  );
}
