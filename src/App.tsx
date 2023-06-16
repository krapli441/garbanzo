import React from "react";
import { render } from "react-dom";
import { createRoot, Root } from "react-dom/client";
import Introduce from "./components/fragments/text";

export default function App() {
  return (
    <>
      <div className="container">
        <Introduce />
      </div>
    </>
  );
}
