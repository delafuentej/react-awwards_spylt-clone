import React from "react";
import { FlavourTitle, FlavourSlider } from "../components";

// HORIZONTAL SCROLLING BLOCK

const FlavourBlock = () => {
  return (
    <section className="flavour-block">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        {/* title */}
        <div className="flavour-title">
          <FlavourTitle />
        </div>
        {/* slider sectition */}
        <div className="h-full">
          <FlavourSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavourBlock;
