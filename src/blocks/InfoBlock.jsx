import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { images } from "../utils";
import { infoLists } from "../constants";

const InfoBlock = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [list, setList] = useState(infoLists);

  useEffect(() => {
    isMobile ? setList(infoLists.slice(0, 3)) : setList(infoLists);
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".info-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".info-block p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const contentTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".info-block",
        start: "top center",
        // markers: false,
        toggleActions: "play reset complete reverse",
      },
    });
    contentTimeline
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.02,
      });

    const titleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".info-block",
        start: "top 60%",
        toggleActions: "play reset complete reverse",
        // markers: false,
      },
    });
    titleTimeline.to(".info-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      ease: "circ.inOut",
    });
  });

  return (
    <section className="info-block">
      <img
        src={images.sliderDip}
        alt="slider-dip"
        className="w-full object-cover"
      />
      <img src={images.bigImg} alt="slider-dip" className="big-img" />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col gap-24">
            {/* title + clipPath */}

            <div className="overflow-hidden place-self-start">
              <h1 className="info-title">It still does</h1>
            </div>
            <div className="mask-clip-path-2 info-text-scroll place-self-start">
              <div className="bg-yellow-brown px-3 py-5 md:px-5 inline-block">
                <h2 className="text-milk-yellow">Body good</h2>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        {/* paragraph */}
        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph font-extrabold">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>

        {/* info box */}

        <div className="info-box">
          <div className="list-wrapper">
            {list.map((item, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph text-center font-bold">
                    {item.label}
                  </p>
                  <p className="text-sm font-paragraph mt-2 text-center">
                    up to
                  </p>
                  <p className="text-2xl font-paragraph md:text-4xl tracking-tighter font-bold">
                    {item.amount}
                  </p>
                </div>
                {index !== list.length - 1 && <div className="spacer-border" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
