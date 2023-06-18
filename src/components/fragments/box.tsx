import React from "react";
import styled from "styled-components";

const Box = styled.div<{ width: number; height: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}%;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 2px solid white;
  cursor: pointer;
  transition: 0.4s ease;
`;

export { Box };
