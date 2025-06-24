import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { videos, images } from "../utils";
import { animateWithGsap2 } from "../utils/animations";

const VideoPin = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    if (!isMobile) {
      animateWithGsap2(
        "to",
        ".video-box",
        {
          clipPath: "circle(100% at 50% 50%)",
          WebkitClipPath: "circle(100% at 50% 50%)",
          ease: "power1.inOut",
        },
        {
          trigger: ".vd-pin",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
          // markers: true, // si necesitas debug
        }
      );
    }
  });

  return (
    <div className="vd-pin">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(4% at 50% 50%)",
        }}
        className="size-full video-box"
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

/*
useGSAP(() => {
    if (!isMobile) {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          // markers: true,
          pin: true,
        },
      });
      animation.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        WebkitClipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });
*/
