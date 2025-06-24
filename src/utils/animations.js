import gsap from "gsap";

import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const animateWithGsap2 = (
  method = "from",
  target,
  animationProps,
  scrollProps
) => {
  gsap[method](target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline,
  targets,
  animationProps,
  stagger = 0
) => {
  targets.forEach((target, i) => {
    timeline.to(
      target,
      {
        ...animationProps,
        ease: "power2.inOut",
      },
      i === 0 ? 0 : `-=${stagger}`
    );
  });
};

export const animateWithGsapTimeline2 = (
  timeline,
  targets,
  animationPropsArray,
  positions = []
) => {
  targets.forEach((target, i) => {
    timeline.to(
      target,
      {
        ...animationPropsArray[i],
        ease: "power2.inOut",
      },
      positions[i] ?? 0 // usa 0 si no hay posición
    );
  });
};

// utils/gsap-utils.ts
export const splitText = (selector, type = "chars") => {
  return SplitText.create(selector, {
    type,
    linesClass: type.includes("lines") ? "paragraph-line" : "",
  });
};
