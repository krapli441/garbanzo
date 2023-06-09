// 리액트 라이브러리
import React, { useState } from "react";
import { Box} from "@chakra-ui/react";

// 리액트 컴포넌트
import MyNameBox from "./myName";

export default function main() {
  return (
    <>
      <Box
        className="main"
        width={"100%"}
        height={"80vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <MyNameBox />
      </Box>
    </>
  );
}
