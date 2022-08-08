import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("h1 span", {
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
      duration: 1.5,
    });

    tl.to(
      "#hero button",
      {
        y: 0,
        ease: "power4.out",
        duration: 1.5,
      },
      "-=1"
    );

    tl.to(
      "#hero img",
      {
        autoAlpha: 1,
        ease: "power4.out",
        duration: 1.5,
      },
      "-=1"
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[600px] h-screen pb-[10vh] md:pb-0 bg-black flex items-center text-white transition-colors ease-in-out duration-500"
    >
      <div className="container">
        <h1 className="flex flex-col gap-2 md:gap-3 text-[36px] md:text-[54px] lg:text-[72px] leading-[1.18] font-bold lg:py-2 uppercase overflow-hidden">
          <span
            data-color="text-darkGray"
            className="text-primary selection:bg-white selection:text-primary translate-y-48 "
          >
            Oscar España
          </span>
          <span className="translate-y-48"> Desarrollador Frontend</span>
        </h1>
        <div className="mt-16 overflow-hidden">
          <a href="mailto:espaaoscar@gmail.com">
            <button
              className=" px-12 py-3 text-xl font-medium bg-gradient-primary text-white rounded-lg cursor-pointer
           hover:animated-gradient-button translate-y-24"
            >
              Contáctame
            </button>
          </a>
        </div>
      </div>
      <div className="absolute left-1/2 bottom-[12vh] md:bottom-14 -translate-x-1/2 cursor-pointer opacity-70 hover:opacity-100">
        <Image
          src="/iconos/scroll-down.svg"
          width={56}
          height={56}
          layout="fixed"
          alt="Scroll Down"
          className="opacity-0"
        />
      </div>
    </section>
  );
};

export default Hero;
