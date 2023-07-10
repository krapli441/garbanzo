// 리액트 라이브러리
import React from "react";

// 외부 라이브러리
import { useMediaQuery } from "react-responsive";

// 리액트 컴포넌트
import { Text } from "@chakra-ui/react";

const AccessUserInformation: React.FC = () => {
  const isSmall = useMediaQuery({ maxWidth: 870 });
  const userInfo = navigator.userAgent;
  return (
    <>
      <Text className="accessUser" fontSize={isSmall ? "0" : "12px"}>
        {userInfo}
      </Text>
    </>
  );
};

export default AccessUserInformation;
