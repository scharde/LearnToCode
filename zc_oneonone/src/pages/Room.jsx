import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { appId, serverSecret } from "./Config";
const Room = () => {
  const { roomId } = useParams();

  const meeting = (element) => {
    const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      Date.now().toString()
    );

    const zc = ZegoUIKitPrebuilt.create(token);

    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
      sharedLinks: [
        {
          name: "Copy link",
          url: window.location.href,
        },
      ],
    });
  };

  return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default Room;
