import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ClipPathTitle, VideoPin } from "../components";
import { animateWithGsapTimeline } from "../utils/animations";

const BenefitBlock = () => {
  useGSAP(() => {
    const revealTimeline = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-block",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
        toggleActions: "play reset complete reverse",
      },
    });

    const titles = [
      ".benefit-block .first-title",
      ".benefit-block .second-title",
      ".benefit-block .third-title",
      ".benefit-block .fourth-title",
    ];

    animateWithGsapTimeline(
      revealTimeline,
      titles,
      {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      0.2
    );
  });

  return (
    <section className="benefit-block">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          {/* paragraph */}
          <p className="font-paragraph">
            Unlock the Advantages:
            <br /> Explore the Key Benefits of Choosing SPYLT
          </p>
          {/* animations block */}
          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Self stable"}
              textColorClass={"text-[#faeade]"}
              bgColorClass={"bg-[#c88e64]"}
              borderColorClass={"border-[#222123]"}
              //   maskClipPath={"mask-path-custom"}
              className={"first-title"}
            />
            <ClipPathTitle
              title={"Proteine + Caffeine"}
              textColorClass={"text-[#222123]"}
              bgColorClass={"bg-[#faeade]"}
              borderColorClass={"border-[#222123]"}
              //   maskClipPath={"mask-path-custom"}
              className={"second-title"}
            />
            <ClipPathTitle
              title={"Infinitely recyclabe"}
              textColorClass={"text-[#faeade]"}
              bgColorClass={"bg-[#7f3b2d]"}
              borderColorClass={"border-[#222123]"}
              //   maskClipPath={"mask-path-custom"}
              className={"third-title"}
            />
            <ClipPathTitle
              title={"Lactose free"}
              textColorClass={"text-[#222123]"}
              bgColorClass={"bg-[#fed775]"}
              borderColorClass={"border-[#222123]"}
              //   maskClipPath={"mask-path-custom"}
              className={"fourth-title"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p className="font-paragraph">And much more...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPin />
      </div>
    </section>
  );
};

export default BenefitBlock;

/*

  useGSAP(() => {
    const revealTimeline = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-block",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
        // makers: true,
        toggleActions: "play reset complete reverse",
      },
    });
    revealTimeline
      .to(".benefit-block .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-block .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-block .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-block .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });


*/
