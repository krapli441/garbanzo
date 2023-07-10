// 리액트 라이브러리
import React, { useEffect } from "react";

// 외부 라이브러리
import { Box } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
// 리액트 컴포넌트
import Header from "./components/views/header";
import Main from "./components/views/main";
import Bottom from "./components/views/bottom";
// css
import "./css/root.css";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "hi, imnotkrapli.";
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 1285, maxHeight: 854 });

  return (
    <Box
      className="container"
      width={isMobile ? "100%" : "100%"} // 1285px 이하일 경우 해상도를 100%으로 조절
      height={isMobile ? "100%" : "100%"} // 854px 이하일 경우 해상도를 100%으로 조절
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="blackAlpha.900"
      color={"white"}
    >
      <Header />
      <Main />
      <Bottom />
    </Box>
  );
};

export default App;
