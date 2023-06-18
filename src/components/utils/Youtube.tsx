import React from "react";
import YouTube from "react-youtube";
import dotenv from "dotenv";

// dotenv.config({ path: "../../.env" });

const VideoPlayer = () => {
  // YouTube 동영상 ID를 가져옵니다.
  const videoId = "X0fCxWUk9bI";
  // YouTube 재생 옵션을 설정합니다.
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // onReady 이벤트 핸들러
  const onReady = (event: any) => {
    event.target.playVideo();
  };

  return (
    <YouTube videoId={videoId} opts={opts} onReady={onReady} key={videoId} />
  );
};

export default VideoPlayer;
