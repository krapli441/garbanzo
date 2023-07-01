// 리액트 라이브러리
import React, { useState, useEffect } from "react";

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
  const [showText, setShowText] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setShowText(true);
        setShowIntroduce(true);
      }, 400); // 애니메이션 효과가 끝난 후 Introduce 컴포넌트를 보여줄 시간 (400ms로 설정)

      return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머를 정리하여 메모리 누수 방지
    } else {
      setShowIntroduce(false);
    }
  }, [isClicked]);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        setShowText(false);
      }, 400); // 0.4초 후에 텍스트를 사라지게 함

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 400);
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
      transition={"0.4s cubic-bezier(.14,.65,.66,.97)"}
      cursor={"pointer"}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showText && (
        <>
          <Text
            className="greetingText"
            fontSize={14}
            transition={"all 0.2s ease"}
            opacity={isClicked ? 0 : 1}
            style={{
              transform: isClicked ? "scale(0)" : "scale(1)",
            }}
          >
            안녕하세요.
          </Text>
          <Text
            className="myNameText"
            fontSize={48}
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
            fontSize={14}
            transition={"all 0.2s ease"}
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
}
