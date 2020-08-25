import React, { useState, useEffect } from "react";
import { BrowserQRCodeReader, NotFoundException, ChecksumException, FormatException } from "@zxing/library";

type QrInfo = { line_id: string };

export function useQrScanner(
  videoElement: HTMLVideoElement | undefined | null,
  canvasElement: HTMLCanvasElement | undefined | null,
  videoId: string
): QrInfo | null | void {
  const qrReader = new BrowserQRCodeReader()
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>();
  const [result, setResult] = useState<QrInfo>();

  useEffect(() => {
    getRearCameraId();
    decodeContinuously();
  }, [videoElement, canvasElement, videoId]);



  async function getRearCameraId() {
    try {
      const videoInputDevices = await qrReader.getVideoInputDevices();
      if (videoInputDevices.length < 1) throw Error("no camera present");
      setSelectedDeviceId(videoInputDevices[0].deviceId);
    } catch (error) {
      console.error(error);
    }
  }

  function decodeContinuously() {
    qrReader.decodeFromInputVideoDeviceContinuously(
      selectedDeviceId as string,
      videoId,
      (result: any, err: any) => {
        if (result) {
          console.log("Found QR code!", result);
          setResult(JSON.parse(result) as QrInfo);
        }

        if (err) {
          if (err instanceof NotFoundException) console.log("No QR code found.");

          if (err instanceof ChecksumException)
            console.log("A code was found, but it's read value was not valid.");

          if (err instanceof FormatException)
            console.log("A code was found, but it was in a invalid format.");
        }
      }
    );
  }

  if (result) return /* redirect nettoyage */ result;
}
