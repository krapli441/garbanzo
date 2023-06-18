// 리액트 라이브러리
import React, { useState } from "react";

// 리액트 컴포넌트
import styled from "styled-components";
import Youtube from "react-youtube";
import VideoPlayer from "../utils/Youtube";
// 기타 파일

import MyProfile from "../../img/me.jpg";

const MyIntroduceBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const MyIntroduceFirstArea = styled.div`
  width: 50%;
  height: 100%;
`;

const MyIntroduceSecondArea = styled.div`
  width: 50%;
  height: 100%;
`;

const MyNameText = styled.p`
  font-size: 48px;
  color: white;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 71%;
  height: 50%;
  object-fit: cover;
`;

export default function NameBox() {
  return (
    <MyIntroduceBox className="introduceBox">
      <MyIntroduceFirstArea className="fisrt">
        <MyNameText>
          좋은 디자인이 곧 좋은 경험으로 이어진다고 믿습니다.<br></br>
          UI, UX에 깊은 관심을 갖고 있습니다.<br></br>
          인간에 대한 탐구를 즐겨 합니다.<br></br>
          세상의 좋은 모든 음악들을 사랑합니다.<br></br>
          여유가 있을 때 음악을 틀며 스트레스를 풉니다.<br></br>
        </MyNameText>
      </MyIntroduceFirstArea>
      <MyIntroduceSecondArea className="second">
        <ImageContainer className="imageContainer">
          <VideoPlayer></VideoPlayer>
          <Image src={MyProfile} alt="본인" />
        </ImageContainer>
      </MyIntroduceSecondArea>
    </MyIntroduceBox>
  );
}
