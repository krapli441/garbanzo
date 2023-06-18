import React from "react";
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

  &:hover,
  &:focus {
    width: 230px;
    height: 230px;
  }
`;

export default Box;
