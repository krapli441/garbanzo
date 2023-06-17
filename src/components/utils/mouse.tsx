// 리액트 라이브러리
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 리액트 컴포넌트

// * 본문

const MouseText = styled.div`
  font-size: 12px;
`;

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
      <MouseText>
        {mouseX}px, {mouseY}px
      </MouseText>
    </>
  );
}
