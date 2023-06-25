// 리액트 라이브러리
import React from "react";

// 리액트 컴포넌트
import { Box, Image, Text } from "@chakra-ui/react";
import Userinformation from "../utils/userInfo";
// import MouseTracking from "../utils/mouse";

export default function main() {
  return (
    <>
      <Box className="header" width={"100%"} height={"10vh"}>
        <Text>Krapli's Portfolio</Text>
          <Userinformation />
      </Box>
    </>
  );
}
