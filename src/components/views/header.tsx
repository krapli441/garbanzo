// 리액트 라이브러리
import React from "react";

// 리액트 컴포넌트
import { Box, Text } from "@chakra-ui/react";
import Userinformation from "../utils/userInfo";
import MouseTracking from "../utils/mouse";

const Header:React.FC = () => {
  return (
    <>
      <Box
        className="header"
        width={"100%"}
        height={"10vh"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        marginRight={"10%"}
        marginTop={"20px"}
      >
        <Text className={"pageTitle"} fontSize={32}>
          krapli's Portfolio
        </Text>
        <Userinformation />
        <MouseTracking />
      </Box>
    </>
  );
}

export default Header
