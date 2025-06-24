import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { splitText, animateWithGsap2 } from "../utils/animations";
import { useMediaQuery } from "react-responsive";

const FlavourTitle = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    // 1. Separar texto por caracteres
    const firstTextSplit = splitText(".first-text-split h1", "chars");
    const secondTextSplit = splitText(".second-text-split h1", "chars");

    // 2. Animar el primer texto con scroll
    animateWithGsap2(
      "from",
      firstTextSplit.chars,
      {
        yPercent: 200,
        stagger: 0.02,
        ease: "power1.inOut",
      },
      {
        trigger: ".flavour-block",
        start: "top 30%",
        toggleActions: "play reset complete reverse",
        markers: false,
      }
    );

    // 3. Animar el clipPath del fondo/scroll
    animateWithGsap2(
      "to",
      ".flavour-text-scroll",
      {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        trigger: ".flavour-block",
        start: "top 10%",
        toggleActions: "play reset complete reverse",
        markers: false,
      }
    );

    // 4. Animar el segundo texto con scroll
    animateWithGsap2(
      "from",
      secondTextSplit.chars,
      {
        yPercent: 200,
        stagger: 0.02,
        ease: "power1.inOut",
      },
      {
        trigger: ".flavour-block",
        start: "top 1%",
        toggleActions: "play reset complete reverse",
        markers: false,
      }
    );
  }, []);

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>

      <div className="flavour-text-scroll mask-clip-path-3">
        <div className="bg-mid-brown px-5 py-5 2xl:px-5">
          <h1 className="text-milk">Freaking</h1>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        {isMobile ? (
          <h1 className="text-wrap">
            delicious <br />
            flavours
          </h1>
        ) : (
          <h1>delicious flavours</h1>
        )}
      </div>
    </div>
  );
};

export default FlavourTitle;

/*
useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });
    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavour-block",
        start: "top 30%",
        markers: false,
        toggleActions: "play reset complete reverse",
      },
    });

    gsap.to(".flavour-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavour-block",
        start: "top 10%",
        markers: false,
        toggleActions: "play reset complete reverse",
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavour-block",
        start: "top 1%",
        markers: false,
        toggleActions: "play reset complete reverse",
      },
    });
  });
*/
