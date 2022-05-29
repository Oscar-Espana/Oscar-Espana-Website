import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl2 = gsap.timeline(
      {
        scrollTrigger: {
          trigger: "#portafolio",
          scrub: true,
          pin: true,
          snap: 1,
          start: "top top",
          end: () => "+=1000",
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      },
      { defaults: { ease: "power2.inOut" } }
    );
    tl2.to(titleRef.current, {
      transform: "scale(100)",
      transformOrigin: "94.075% 57%",
      duration: 4,
    });
    tl2.to(
      backgroundRef.current,
      {
        background: "black",
        duration: 1,
      },
      "-=3"
    );
    tl2.to(
      backgroundRef.current,
      {
        autoAlpha: 0,
        duration: 1,
      },
      "-=2"
    );
  }, []);

  return (
    <>
      <section id="portafolio" className="relative overflow-hidden bg-black">
        <div
          id="content"
          className="relative min-h-screen w-full flex items-center justify-center container"
        >
          <div className="absolute bg-primary top-[-750px] left-[-750px] w-[1000px] h-[1000px] rounded-full shadow-[0px_0px_16px_76px_rgb(231_40_137_/_50%)] blur-[175px] opacity-[55%]" />
          <div className="absolute bg-violet top-[40%] right-[-100px] w-[150px] h-[150px] rounded-full shadow-[0px_0px_16px_76px_rgb(231_40_137_/_50%)] blur-[125px] opacity-[55%]" />
          <h2 className="text-white">Descubre mis proyectos</h2>
        </div>
        <div
          ref={backgroundRef}
          className="absolute top-0 min-h-screen w-full bg-primary flex items-center justify-center overflow-hidden transition-colors duration-300"
        >
          <h2 ref={titleRef} className="text-white">
            Portafolio
          </h2>
        </div>
      </section>
      <section className="bg-black">
        <article className="container grid grid-cols-1 md:grid-cols-12 gap-5 py-24">
          <div className=" md:col-span-4">
            <h3 className="text-white">Grupo Transoecánica</h3>
            <p className="text-white mt-16">
              Aplicación web destinada a la automatización de procesos que
              llevan las operadoras de vuelo con respecto a la programación de
              vuelos.
            </p>
          </div>
          <div className="md:col-span-7 md:col-end-13 relative">
            <Image
              src="/img/2x/grupo-transpoint.png"
              alt="Grupo Transpoint"
              width={810}
              height={392}
              layout="responsive"
            />
            <div className="absolute w-full h-full bg-black top-0 opacity-[70%]" />
          </div>
        </article>
      </section>
    </>
  );
};

export default Portfolio;
