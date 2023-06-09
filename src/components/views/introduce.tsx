// 리액트 라이브러리
import React from "react";
import { Box, Text, Image, Highlight, Heading } from "@chakra-ui/react";
import YouTube from "react-youtube";

// 리액트 컴포넌트
import MyProfile from "../../img/me.jpg";
import VideoPlayer from "../utils/Youtube";

const Introduce: React.FC = () => {
  return (
    <Box
      className="introduceBox"
      width={"100%"}
      height={"100%"}
      display={"flex"}
    >
      <Box
        className="fisrt"
        width={"50%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        padding={"20px"}
      >
        <Heading>
          <Highlight
            query={["좋은 디자인", "좋은 경험"]}
            styles={{ px: "1", py: "1", bg: "white" }}
          >
            좋은 디자인이 곧 좋은 경험으로 이어진다고 믿습니다.
          </Highlight>
        </Heading>
        <Heading size={"2xl"}>
          <Highlight
            query={["UI", "UX"]}
            styles={{ px: "1", py: "1", bg: "white" }}
          >
            UI, UX에 깊은 관심을 갖고 있습니다.
          </Highlight>
        </Heading>
        <Heading>
          <Highlight
            query={["탐구"]}
            styles={{ px: "1", py: "1", bg: "white" }}
          >
            인간에 대한 탐구를 즐겨 합니다.
          </Highlight>
        </Heading>
        <Heading size={"2xl"}>
          <Highlight
            query={["음악", "사랑"]}
            styles={{ px: "1", py: "1", bg: "white" }}
          >
            세상의 모든 음악들을 사랑합니다.
          </Highlight>
        </Heading>

        <Heading>
          <Highlight
            query={["디제잉"]}
            styles={{ px: "1", py: "1", bg: "white" }}
          >
            여유가 있을 때 디제잉을 하며 스트레스를 풉니다.
          </Highlight>
        </Heading>
      </Box>
      <Box className="second" width={"50%"} height={"100%"}>
        <VideoPlayer />
        <Box
          className="imageContainer"
          width={"100%"}
          height={"50%"}
          display={"flex"}
          flexWrap={"wrap"}
        >
          <Image src={MyProfile} alt="본인" boxSize={"50%"} />
          <Image src={MyProfile} alt="본인" boxSize={"50%"} />
          <Image src={MyProfile} alt="본인" boxSize={"50%"} />
          <Image src={MyProfile} alt="본인" boxSize={"50%"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Introduce;
