// 리액트 라이브러리
import React, { useState } from "react";

// 리액트 컴포넌트
import styled from "styled-components";

const MyNameBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export default function NameBox() {
  return <MyNameBox>박준형</MyNameBox>;
}
