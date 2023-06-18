import React, { useState, ReactNode } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 10px 20px;
  border: 2px solid white;
  transition: 0.4s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    width: 220px;
    height: 220px;
  }
`;

type BoxProps = {
  children: ReactNode;
  className?: string;
};


export default function ClickBox() {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand((prevExtend) => !prevExtend);
  };

  return (
    <Box
      style={{
        width: expand ? "220px" : "200px",
        height: expand ? "220px" : "200px",
      }}
      onClick={handleClick}
    ></Box>
  );
}
