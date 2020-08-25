import React, { FC, ReactElement, useRef, useEffect } from "react";
import { useQrScanner } from "../utils/useQrCode";

type Props = {};

const Camera: FC<Props> = (): ReactElement => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const CanvasRef = useRef<HTMLCanvasElement>(null);
  const videoId = "video";
  const result = useQrScanner(videoRef.current, CanvasRef.current, videoId);

  useEffect(() => {
    if (result) console.log("result :>> ", result);
  }, [result]);

  return (
    <div id="video_container">
      <video autoPlay id={videoId} ref={videoRef}></video>
      <canvas id="canvas" width="320px" height="240px" ref={CanvasRef}></canvas>
    </div>
  );
};

export default Camera;
