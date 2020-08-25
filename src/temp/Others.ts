// async function polyFill() {
//     const nav = navigator;
//     const navCopy = navigator as any;
//     if (!("mediaDevices" in nav)) {
//       navCopy.mediaDevices = {};
//     }

//     // custom polyfill if browser does not have modern media device implementation
//     if (!("getUserMedia" in navCopy.mediaDevices)) {
//       const mediaDeviceCoppy = navCopy.mediaDevices as any;
//       mediaDeviceCoppy.getUserMedia = function (constraints: any) {
//         const getUserMedia = navCopy.webkitGetUserMedia || navCopy.mozGetUserMedia;

//         if (!getUserMedia) {
//           return Promise.reject(new Error("getUserMedia is not implemented"));
//         }

//         return new Promise(function (res, rej) {
//           getUserMedia.call(navCopy, constraints, res, rej);
//         });
//       };
//     }
//   }

//   async function handleCapture(e: MouseEvent) {
//     hideVideo();

//     const ctxt = canvasElement.getContext("2d") as CanvasRenderingContext2D;
//     ctxt.drawImage(
//       videoElement,
//       0,
//       0,
//       canvasElement.width,
//       videoElement.videoHeight / (videoElement.videoWidth / canvasElement.width)
//     );
//     const sourceObject = videoElement.srcObject! as MediaStream;
//     sourceObject.getVideoTracks().forEach((track) => track.stop());

//     return dataURItoBlob(canvasElement.toDataURL());
//   }

//   function hideVideo() {
//     canvasElement.style.display = "block";
//     videoElement.style.display = "none";
//   }

//   function decode(params: any) {
//     const codeReader = new BrowserQRCodeReader();
//     codeReader
//       .decodeFromVideo(videoElement)
//       .then((result: any) => console.log(result.text))
//       .catch((err) => console.error(err));
//   }

//   async function initMedia() {
//     try {
//       const devices = navigator.mediaDevices;
//       console.log("devices :>> ", devices);
//       const stream = (await devices.getUserMedia({
//         video: true,
//         audio: false,
//       })) as MediaStream;
//       videoElement.srcObject = stream;
//       //   videoRef.current.style.display = "block";
//     } catch (error) {
//       //   imgPickerArea.style.display = "block";
//     }
//   }
export function name() {}
