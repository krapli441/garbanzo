// 리액트 라이브러리
import React, { useState, useEffect } from "react";

// 외부 라이브러리
import { useMediaQuery } from "react-responsive";

// 리액트 컴포넌트
import { Box, Text } from "@chakra-ui/react";
import { useRandomFontWeight } from "../Hooks/RandomFontWeightHooks";
import { useRandomTextColor } from "../Hooks/RandomColorHooks";
import Introduce from "./introduce";

// css

const MyNameBox: React.FC = () => {
  // 반응형 웹 미디어 쿼리
  const isMedium = useMediaQuery({ maxWidth: 1285, maxHeight: 854 });
  const isSmall = useMediaQuery({ maxWidth: 870 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const fontType: Array<number> = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const fontWeight = useRandomFontWeight(fontType);
  const textcolor = useRandomTextColor();

  const [showIntroduce, setShowIntroduce] = useState(false);
  const [showText, setShowText] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setShowIntroduce(true);
      }, 400);

      return () => clearTimeout(timer);
    } else {
      setShowIntroduce(false);
    }
  }, [isClicked]);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setShowText(false);
      }, 400);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isClicked]);

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
      transition={"all 0.4s cubic-bezier(.14,.65,.66,.97)"}
      cursor={"pointer"}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showText && (
        <>
          <Text
            className="greetingText"
            fontSize={isMedium ? "0px" : "14px"}
            // transition={"all 0.2s ease"}
            opacity={isClicked ? 0 : 1}
            style={{
              transform: isClicked ? "scale(0)" : "scale(1)",
            }}
          >
            안녕하세요.
          </Text>
          <Text
            className="myNameText"
            fontSize={isSmall ? "20px" : isMedium ? "32px" : "48px"}
            fontWeight={fontWeight}
            bgGradient={textcolor}
            bgClip={"text"}
            transition={"all 0.2s ease"}
            opacity={isClicked ? 0 : 1}
            style={{
              transform: isClicked ? "scale(8)" : "scale(1)",
            }}
          >
            박준형
          </Text>
          <Text
            className="greetingText"
            fontSize={isMedium ? "0px" : "14px"}
            // transition={"all 0.2s ease"}
            opacity={isClicked ? 0 : 1}
            style={{
              transform: isClicked ? "scale(0)" : "scale(1)",
            }}
          >
            입니다.
          </Text>
        </>
      )}
      {showIntroduce && <Introduce />}
      {/*showIntroduce 값이 true일 때만
      introduce.tsx 렌더링 */}
    </Box>
  );
};

export default MyNameBox;
