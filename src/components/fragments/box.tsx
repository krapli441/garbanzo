import React, { useState, ReactNode } from "react";
import styled from "styled-components";

const Box = styled.div<{ width: number; height: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}%;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 10px 20px;
  border: 2px solid white;
  transition: 0.4s ease;
  cursor: pointer;
`;

export { Box };
