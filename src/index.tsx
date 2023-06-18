// 리액트 라이브러리, 훅스
import React from "react";
import { render } from "react-dom";
import { createRoot, Root } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
