// 리액트 라이브러리
import React from "react";

import { Box, Image, Text } from "@chakra-ui/react";
// 리액트 컴포넌트

// * 본문

// const UserInfoStyle = styled.div`
//   font-size: 12px;
// `;

const userInfo = navigator.userAgent;
// console.log(userInfo);

export default function AccessUserInformation() {
  return (
    <>
      <Text className="accessUser" fontSize={12}>{userInfo}</Text>
    </>
  );
}
