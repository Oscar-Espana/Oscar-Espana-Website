import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black flex items-center text-white transition-colors ease-in-out duration-500"
    >
      <div className="container">
        <h1 className="flex flex-col gap-2 md:gap-3 text-[42px] md:text-[54px] lg:text-[66px] leading-[1.18] font-bold lg:py-2 uppercase ">
          <span data-color="text-gray" className="text-primary ">
            Oscar España
          </span>
          <span>Desarrollador Frontend</span>
        </h1>
        <button
          className="mt-16 px-12 py-3 text-xl font-semibold bg-primary  text-white rounded-lg cursor-pointer
           hover:gradient-background"
        >
          Contáctame
        </button>
      </div>
      <div className="absolute left-1/2 bottom-8 md:bottom-16  -translate-x-1/2 cursor-pointer opacity-70 hover:opacity-100">
        <Image
          src="/iconos/scroll-down.svg"
          width={56}
          height={56}
          alt="Scroll Down"
        />
      </div>
    </section>
  );
};

export default Hero;
