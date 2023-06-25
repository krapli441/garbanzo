// 리액트 라이브러리
import React from "react";

// 리액트 컴포넌트
import { Box, Image, Text } from "@chakra-ui/react";

export default function main() {
  return (
    <>
      <Box className="main" width={"100%"} height={"80vh"}>
        <Box className="myInfoBox">
          <Text>안녕하세요.</Text>
          <Text>박준형</Text>
          <Text>입니다.</Text>
        </Box>
      </Box>
    </>
  );
}
