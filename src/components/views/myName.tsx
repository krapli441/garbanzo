// 리액트 라이브러리
import React from "react";

// 리액트 컴포넌트
import { Box, Text } from "@chakra-ui/react";
import { useRandomFontWeight } from "../Hooks/RandomFontWeightHooks";
import { useRandomTextColor } from "../Hooks/RandomColorHooks";

// css

export default function myNameBox() {
  const fontType: Array<number> = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const fontWeight = useRandomFontWeight(fontType);
  const textcolor = useRandomTextColor();

  return (
    <Box
      className="myInfoBox"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"10%"}
      height={"15%"}
      border={"2px solid white"}
      _hover={{
        width: "13%",
        height: "18%",
      }}
      transition={"0.4s cubic-bezier(.14,.65,.66,.97)"}
      cursor={"pointer"}
    >
      <Text className="greetingText" fontSize={14}>
        안녕하세요.
      </Text>
      <Text
        className="myNameText"
        fontSize={48}
        fontWeight={fontWeight}
        bgGradient={textcolor}
        bgClip={"text"}
        transition={"all 0.2s ease"}
      >
        박준형
      </Text>
      <Text className="greetingText" fontSize={14}>
        입니다.
      </Text>
    </Box>
  );
}
