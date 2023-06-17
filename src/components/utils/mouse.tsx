// 리액트 라이브러리
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 리액트 컴포넌트

// * 본문

export default function MouseTracking() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setMouseX(x);
      setMouseY(y);
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.addEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div>
        {mouseX}px, {mouseY}px
      </div>
    </>
  );
}
