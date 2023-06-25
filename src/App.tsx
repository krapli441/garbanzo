// 리액트 라이브러리
import React, { useEffect } from "react";

// 리액트 컴포넌트
import Header from "./components/views/header";
import Main from "./components/views/main";
import Bottom from "./components/views/bottom";
import { Box, Image, Text } from "@chakra-ui/react";

// css
// import "./css/root.css";

export default function App() {
  useEffect(() => {
    document.title = "krapli's portfolio";
  });

  return (
    <Box
      className="container"
      width="100%"
      height="100vh"
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="blackAlpha.800"
      color={"white"}
    >
      <Header />
      <Main />
      <Bottom />
    </Box>
  );
}
