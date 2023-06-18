// 리액트 라이브러리
import React, { useState } from "react";

// 리액트 컴포넌트
import styled from "styled-components";

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
  font-size: 52px;
  color: white;
`;

export default function NameBox() {
  return (
    <MyIntroduceBox className="introduceBox">
      <MyIntroduceFirstArea className="fisrt">
        <MyNameText>
          다시 인사드립니다.<br></br>음악을 사랑하는 개발자 박준형입니다.
        </MyNameText>
      </MyIntroduceFirstArea>
      <MyIntroduceSecondArea className="second">
        <MyProfile></MyProfile>
      </MyIntroduceSecondArea>
    </MyIntroduceBox>
  );
}
