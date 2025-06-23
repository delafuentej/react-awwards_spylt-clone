import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Navbar, Footer } from "./components";
import {
  HeroBlock,
  MessageBlock,
  FlavourBlock,
  InfoBlock,
  BenefitBlock,
  TestimonialsBlock,
} from "./blocks";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <Navbar />
      {/* init blocks */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroBlock />
          <MessageBlock />
          <FlavourBlock />
          <InfoBlock />
          {/* by overlapping the benefit block with testimonials block  we put them inside the same div */}
          <div>
            <BenefitBlock />
            <TestimonialsBlock />
          </div>
          {/* end blocks */}
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
