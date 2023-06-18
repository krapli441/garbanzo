import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = () => {
  // YouTube 동영상 ID를 가져옵니다.
  const videoId = "X0fCxWUk9bI";
  // YouTube 재생 옵션을 설정합니다.
  const opts = {
    height: "640px",
    width: "480px",
    playerVars: {
      autoplay: 1,
    },
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
  };

  // onReady 이벤트 핸들러
  const onReady = (event: any) => {
    event.target.playVideo();
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default VideoPlayer;
