// 리액트 라이브러리
import React, { useState } from "react";

// 리액트 컴포넌트
import { Box, Text } from "@chakra-ui/react";
import { useRandomFontWeight } from "../Hooks/RandomFontWeightHooks";
import { useRandomTextColor } from "../Hooks/RandomColorHooks";
import Introduce from "./introduce";

// css

export default function myNameBox() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const fontType: Array<number> = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const fontWeight = useRandomFontWeight(fontType);
  const textcolor = useRandomTextColor();

  const [showIntroduce, setShowIntroduce] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setShowIntroduce(!showIntroduce);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxWidth = isClicked ? "90%" : "10%";
  const boxHeight = isClicked ? "90%" : "17%";

  return (
    <Box
      className="myInfoBox"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={boxWidth}
      height={boxHeight}
      border={"2px solid white"}
      _hover={
        isClicked
          ? {}
          : {
              width: "15%",
              height: "23%",
            }
      }
      transition={"0.4s cubic-bezier(.14,.65,.66,.97)"}
      cursor={"pointer"}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isClicked && (
        <>
          <Text className="greetingText" fontSize={14}>
            안녕하세요.
          </Text>
          <Text
            className="myNameText"
            fontSize={48}
            fontWeight={fontWeight}
            bgGradient={textcolor}
            bgClip={"text"}
          >
            박준형
          </Text>
          <Text className="greetingText" fontSize={14}>
            입니다.
          </Text>
        </>
      )}
      {showIntroduce && <Introduce />}
      {/*showIntroduce 값이 true일 때만
      introduce.tsx 렌더링 */}
    </Box>
  );
}
