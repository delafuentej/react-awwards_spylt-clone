import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap2 } from "../utils/animations";
import { useMediaQuery } from "react-responsive";
import { flavourList } from "../constants";
import { images } from "../utils";

const FlavourSlider = () => {
  const sliderRef = useRef(null);

  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    // Scroll horizontal de todo el bloque
    if (!isTablet) {
      animateWithGsap2(
        "to",
        ".flavour-block",
        {
          x: `-${scrollAmount + window.innerWidth}px`,
          ease: "power1.inOut",
        },
        {
          start: "2% top",
          end: `+=${scrollAmount + window.innerWidth}px`,
          scrub: true,
          pin: true,
          markers: false,
        }
      );
    }

    // Animación de los textos con animateWithGsap2
    animateWithGsap2(
      "to",
      ".first-text-split",
      { xPercent: -30, ease: "power1.inOut" },
      {
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      }
    );

    animateWithGsap2(
      "to",
      ".flavour-text-scroll",
      { xPercent: -22, ease: "power1.inOut" },
      {
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      }
    );

    animateWithGsap2(
      "to",
      ".second-text-split",
      { xPercent: -10, ease: "power1.inOut" },
      {
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      }
    );
  }, []);

  return (
    <div className="slider-wrapper" ref={sliderRef}>
      <div className="flavours flex">
        {flavourList.map((flavour) => (
          <div
            key={flavour.name}
            className={`relative z-30 lg:w-[50vw] lg:h-[70vh] md:w-[90vw] md:h-[50vh] w-96 h-80 flex-none ${flavour.rotation}`}
          >
            {/* bg-images */}
            <img
              src={images[`${flavour.color}Bg`]}
              alt={`${flavour.color}-bg`}
              className="absolute bottom-0 "
            />
            {/* product image */}
            <img
              src={images[`${flavour.color}Drink`]}
              alt={`${flavour.color}-drink`}
              className="drinks"
            />
            {/* floating elemnts of product */}
            <img
              src={images[`${flavour.color}Elements`]}
              alt={`${flavour.color}-elements`}
              className="elements"
            />

            {/* flavour name */}
            <h1>{flavour.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavourSlider;

/*

useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavour-block",
          start: "2% top",
          end: `+=${scrollAmount + window.innerWidth}px`,
          scrub: true,
          pin: true,
          markers: false,
        },
      });
      animation.to(".flavour-block", {
        x: `-${scrollAmount + window.innerWidth}px`,
        ease: "power1.inOut",
      });
    }
    //  console.log("Scroll Amount:", scrollAmount);

    const titleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavour-block",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });
    titleTimeline
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavour-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });



*/
