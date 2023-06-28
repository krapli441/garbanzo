// 리액트 라이브러리
import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import YouTube from "react-youtube";

// 리액트 컴포넌트
import MyProfile from "../../img/me.jpg";
import VideoPlayer from "../utils/Youtube";

const Introduce: React.FC = () => {
  return (
    <Box className="introduceBox">
      <Box className="fisrt">
        <Text>
          좋은 디자인이 곧 좋은 경험으로 이어진다고 믿습니다.<br></br>
          UI, UX에 깊은 관심을 갖고 있습니다.<br></br>
          인간에 대한 탐구를 즐겨 합니다.<br></br>
          세상의 좋은 모든 음악들을 사랑합니다.<br></br>
          여유가 있을 때 음악을 틀며 스트레스를 풉니다.<br></br>
        </Text>
      </Box>
      <Box className="second">
        <Box className="imageContainer">
          <VideoPlayer></VideoPlayer>
          <Image src={MyProfile} alt="본인" />
        </Box>
      </Box>
    </Box>
  );
};

export default Introduce;
