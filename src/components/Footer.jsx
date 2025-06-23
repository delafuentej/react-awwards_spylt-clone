import React from "react";
import { images, videos } from "../utils";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <footer className="footer">
      <img
        src={images.footerDip}
        alt="footer-dip"
        className="w-full object-cover -translate-y-1"
      />
      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        {/* footer title */}
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-3">
            #chugresponsibly
          </h1>
        </div>
        {/* video */}

        {isMobile ? (
          <img
            src={images.footerDrink}
            alt="footer-drink"
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src={videos.splashVideo}
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-cover mix-blend-lighten z-100"
          />
        )}

        {/* social network */}
        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src={images.youtube} alt="youtube-logo" />
          </div>
          <div className="social-btn">
            <img src={images.insta} alt="instagram-logo" />
          </div>
          <div className="social-btn">
            <img src={images.tiktok} alt="tiktok-logo" />
          </div>
        </div>

        {/* links */}
        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>SPYLT Flavours</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>
          {/*  */}
          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              {/* The input field and arrow icon for newsletter signup. */}{" "}
              {/* A
          border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-paragraph placeholder:text-[#999999] "
              />
              <img src={images.arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="copyright-box">
          {/* The final row with copyright and legal links. */}
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
