// 리액트 라이브러리
import React from "react";

// 리액트 컴포넌트
import { Box, Image, Text } from "@chakra-ui/react";
import { useRandomFontWeight } from "../Hooks/RandomFontWeightHooks";

export default function myNameBox() {
  

  return (
    <Box
      className="myInfoBox"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"12%"}
      height={"18%"}
      border={"2px solid white"}
    >
      <Text className="greetingText" fontSize={14}>
        안녕하세요.
      </Text>
      <Text className="myNameText" fontSize={48} fontWeight={useRandomFontWeight}>
        박준형
      </Text>
      <Text className="greetingText" fontSize={14}>
        입니다.
      </Text>
    </Box>
  );
}
