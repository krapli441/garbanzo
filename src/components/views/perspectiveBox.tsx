// 리액트 라이브러리
import React, { useState, useEffect, useRef } from "react";

// 외부 라이브러리
import { Box } from "@chakra-ui/react";

const PerspectiveBox: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      const containerSize = containerElement.offsetWidth;
      const boxSize = 100;
      const maxOffset = (containerSize - boxSize) / 2;
      const sensitivity = 0.05;

      const moveBox = () => {
        const offsetX = (mousePosition.x - containerSize / 2) * sensitivity;
        const offsetY = (mousePosition.y - containerSize / 2) * sensitivity;
        const newX = Math.min(Math.max(-maxOffset, offsetX), maxOffset);
        const newY = Math.min(Math.max(-maxOffset, offsetY), maxOffset);
        setBoxPosition({ x: newX, y: newY });
      };
      moveBox();
    }
  }, [mousePosition]);

  useEffect(() => {
    if (containerRef.current)
      setMousePosition({
        x: containerRef.current.offsetWidth / 2,
        y: containerRef.current.offsetHeight / 2,
      });
  }, []);

  return (
    <Box ref={containerRef}       style={{
      width: "100vw",
      height: "100vh",
      position: "relative",
    }} onMouseMove={handleMouseMove}>
      <Box
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) translate(${boxPosition.x}px, ${boxPosition.y}px)`,
          transition: "transform 0.2s cubic-bezier(.06,.54,.5,.95)",
        }}
      ></Box>
    </Box>
  );
};

export default PerspectiveBox;
