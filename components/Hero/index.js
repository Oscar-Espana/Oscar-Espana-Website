import React from "react";

const Hero = () => {
  return (
    <section className="bg-black text-white">
      <div className="container pt-40 pb-56 relative">
        <h1 className="flex flex-col uppercase">
          <span className="text-[28px] leading-[1.15] md:text-[38px] lg:text-5xl font-medium">
            Hola soy
          </span>
          <span className="text-primary text-4xl leading-[1.15] md:text-[54px] lg:text-7xl font-bold lg:py-2">
            Oscar España
          </span>
          <span className="text-4xl leading-[1.15] md:text-[54px] lg:text-7xl font-bold">
            Desarrollador Web
          </span>
        </h1>
        <button className="mt-14 px-12 py-3 text-xl font-medium text-primary border border-primary rounded-lg cursor-pointer
          hover:bg-primary hover:text-white ease-in-out duration-700">
          Contáctame
        </button>
        <p
          className="text-[40px] md:text-[54px] lg:text-7xl font-bold text-gray uppercase opacity-[15%] 
          writing-mode-vertical absolute bottom-12 lg:bottom-10 right-8 lg:right-[80px]"
        >
          {"<Developer/>"}
        </p>
      </div>
    </section>
  );
};

export default Hero;
