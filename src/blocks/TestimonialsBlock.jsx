import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { testimonialCards } from "../constants";

const TestimonialsBlock = () => {
  useGSAP(() => {
    gsap.set(".testimonials-block", {
      marginTop: "-140vh",
    });

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-block",
        start: "top bottom",
        end: "200% top",
        scrub: true,
        // markers: true,
      },
    });
    animation
      .to(".testimonials-block .first-title", {
        xPercent: 70,
      })
      .to(
        ".testimonials-block .second-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-block .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    const pinAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-block",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
        // markers: true,
      },
    });
    pinAnimation.from(".vd-card", {
      yPercent: 150,
      rotation: 20,
      stagger: 0.2,
      ease: "power1.inOut",
      duration: 1,
    });
  });

  const videoRef = useRef([]);

  const handlePlay = (index) => {
    // Pause all videos
    const video = videoRef.current[index];
    video.play();
  };

  const handlePause = (index) => {
    // Pause all videos
    const video = videoRef.current[index];
    video.pause();
  };
  // Play the video at the specified index

  return (
    <section className="testimonials-block">
      {/* titles */}
      <div className="testimonials-titles">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>
      {/* testimonials pin-box */}
      <div className="pin-box">
        {testimonialCards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.rotation} ${card.translation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => (videoRef.current[index] = el)}
              className="size-full object-cover"
              src={card.src}
              playsInline
              loop
              muted
            />
            <div className="relative">
              <div>
                <img
                  className="absolute bottom-2 left-2"
                  src={card.img}
                  alt={card.name}
                />
                <h2 className="absolute bottom-4 left-15 text-milk md:text-2xl">
                  {card.name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsBlock;
