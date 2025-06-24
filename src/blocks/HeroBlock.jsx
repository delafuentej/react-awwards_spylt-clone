import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
// import { SplitText } from "gsap/all";
import {
  splitText,
  animateWithGsapTimeline,
  animateWithGsap,
} from "../utils/animations";
import { images, videos } from "../utils";

// import {
//   splitText,
//   animateWithGsapTimeline,
//   animateWithGsap,
// } from "../utils/animations";

const HeroBlock = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  // useGSAP(() => {
  //   const titleSplit = SplitText.create(".hero-title", {
  //     type: "chars",
  //   });
  //   const tl = gsap.timeline({
  //     delay: 1,
  //   });
  //   tl.to(".hero-content", {
  //     opacity: 1,
  //     y: 0,
  //     ease: "power1.inOut",
  //   })
  //     .to(
  //       ".hero-text-scroll",
  //       {
  //         duration: 1,
  //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //         ease: "circ.out",
  //       },
  //       "-=0.5"
  //     )
  //     .from(
  //       titleSplit.chars,
  //       {
  //         yPercent: 200,
  //         stagger: 0.02,
  //         ease: "powe2.out",
  //       },
  //       "-=0.5"
  //     );

  //   const heroTimeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".hero-container",
  //       start: "1% top",
  //       end: "bottom top",
  //       // markers: false,
  //       scrub: true,
  //     },
  //   });
  //   heroTimeline.to(".hero-container", {
  //     rotate: 7,
  //     scale: 0.85,
  //     yPercent: 30,
  //     ease: "power1.inOut",
  //   });
  // }, []);
  useGSAP(() => {
    // Split characters of the title
    const titleSplit = splitText(".hero-title");

    // Timeline para entrada inicial
    const introTimeline = gsap.timeline({ delay: 1 });

    animateWithGsapTimeline(introTimeline, [".hero-content"], {
      opacity: 1,
      y: 0,
    });

    animateWithGsapTimeline(introTimeline, [".hero-text-scroll"], {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.out",
    });

    introTimeline.from(
      titleSplit.chars,
      {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Animación de scroll (hero-container)
    animateWithGsap(
      ".hero-container",
      {
        rotate: 7,
        scale: 0.85,
        yPercent: 30,
        ease: "power1.inOut",
      },
      {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      }
    );
  });
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile ? (
              <img
                src={images.heroBg}
                alt="hero-img"
                className="absolute bottom-40 size-full object-cover"
              />
            ) : (
              <img
                src={images.heroImg}
                alt="hero-img"
                className="absolute bottom-0 left-1/2 -translate-x-1/2  object-fill scale-150  md:scale-150"
              />
            )}
          </>
        ) : (
          <video
            src={videos.heroVideo}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div className="hero-text-scroll mask-clip-path">
            <div className="hero-subtitle">
              <h1>Proteine + Caffeine</h1>
            </div>
          </div>
          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>
          <button className="hero-button">
            <p>Chug a Spylt</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;

/*
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });
    const tl = gsap.timeline({
      delay: 1,
    });
    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "powe2.out",
        },
        "-=0.5"
      );

    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        // markers: false,
        scrub: true,
      },
    });
    heroTimeline.to(".hero-container", {
      rotate: 7,
      scale: 0.85,
      yPercent: 30,
      ease: "power1.inOut",
    });
  }, []);

*/
