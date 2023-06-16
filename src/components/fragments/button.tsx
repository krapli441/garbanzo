import React from "react";
import styled from "styled-components";

const dynamicBackgroundColor = "black";
const Button = styled.button`
  background-color: ${dynamicBackgroundColor};
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
`;

export { dynamicBackgroundColor, Button };
