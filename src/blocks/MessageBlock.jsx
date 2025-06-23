import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const MessageBlock = () => {
  useGSAP(() => {
    const firsMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });

    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firsMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        // markers: false,
        start: "top center",
        end: "40% center",
        scrub: true,
      },
    });

    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        // markers: false,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTimeline = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        // markers: false,
        toggleActions: "play reset complete reverse",
        start: "top 60%",
      },
    });
    revealTimeline.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        // markers: false,
        toggleActions: "play reset complete reverse",
        start: "top center",
      },
    });
    paragraphTimeline.from(paragraphSplit.words, {
      duration: 1,
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",

      stagger: 0.01,
    });
  }, []);
  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-25 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message w-screen col-center">
              <div className="text-nowrap"> Stir up your</div>
              <div className="text-nowrap"> fearless past and</div>
            </h1>

            <div className="msg-text-scroll mask-clip-path-2">
              <div className="bg-light-brown md:px-5  px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message w-screen col-center">
              <div className="text-nowrap"> your future with every</div>
              <div className="text-nowrap"> gulp of Perfect Protein</div>
            </h1>
          </div>
          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageBlock;
