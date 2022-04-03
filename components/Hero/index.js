import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const heroSection = useRef(null);
  const developerRef = useRef(null);

  useEffect(() => {
    // const element = developerRef.current;
    // gsap.to(element, {
    //   y: 500,
    //   duration: 4,
    //   ease: "inOut",
    //   scrollTrigger: {
    //     trigger: "#hero",
    //     markers: true,
    //     start: "top top",
    //     end: "bottom center",
    //     scrub: true,
    //   },
    // });

    const hero = heroSection.current;
    const heroTexts = gsap.utils.toArray(`#hero h1 span`);

    heroTexts.forEach((text) => {
      gsap.from(text, {
        scrollTrigger: hero,
        autoAlpha: 0,
        y: 50,
        duration: 1.25,
        stagger: 0.25,
        scrub: true,
      });
    });
    console.log(heroTexts);
    gsap.to(hero, {
      className: "bg-white text-black",
      duration: 4,
      ease: "inOut",
      scrollTrigger: {
        trigger: "#hero",
        markers: true,
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={heroSection} id="hero" className="bg-black text-white">
      <div className="container pt-40 pb-56 relative">
        <h1 className="flex flex-col uppercase">
          <span
            data-color="text-primary"
            className="text-green text-[28px] leading-[1.15] md:text-[38px] lg:text-5xl font-medium"
          >
            Hola soy
          </span>
          <span
            data-color="text-gray"
            className="text-primary text-4xl leading-[1.15] md:text-[54px] lg:text-7xl font-bold lg:py-2"
          >
            Oscar España
          </span>
          <span className="text-4xl leading-[1.15] md:text-[54px] lg:text-7xl font-bold">
            Desarrollador Web
          </span>
        </h1>
        <button
          className="mt-14 px-12 py-3 text-xl font-medium bg-primary text-white rounded-lg cursor-pointer
           transition hover:scale-[1.05] hover:after:border-t-white ease-in-out duration-500"
        >
          Contáctame
        </button>
        <p
          ref={developerRef}
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
