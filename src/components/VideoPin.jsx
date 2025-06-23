import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { videos, images } from "../utils";

const VideoPin = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    if (!isMobile) {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          markers: true,
          pin: true,
        },
      });
      animation.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });
  return (
    <div className="vd-pin">
      <div
        className={`size-full video-box ${
          isMobile ? "circle-clip-mobile" : "circle-clip-path"
        }`}
      >
        <video src={videos.pinVideo} playsInline muted loop autoPlay />
        <div className="abs-center md:scale-100 scale-200">
          <img
            src={images.circleText}
            alt="circle-text"
            className="spin-circle"
          />
          <div className="play-btn">
            <img
              src={images.play}
              alt="play-video-pin"
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPin;
