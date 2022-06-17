import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <>
      <section
        id="portafolio"
        className="bg-black min-h-screen w-full flex items-center justify-center"
      >
        <div ref={backgroundRef} className="container text-center">
          <h2 ref={titleRef} className="text-primary text-8xl">
            Portafolio
          </h2>
          <p className="text-white mt-8 text-3xl">Oscar España</p>
        </div>
      </section>
      <section className="bg-gray">
        <article className="container grid grid-cols-1 md:grid-cols-12 gap-5 py-24">
          <div className=" md:col-span-4">
            <h3 className="text-black">
              Grupo <span className="text-primary">Transoecánica</span>
            </h3>
            <p className="text-darkGray mt-12">
              Aplicación web destinada a la automatización de procesos que
              llevan las operadoras de vuelo con respecto a la programación de
              vuelos.
            </p>
          </div>
          <div className="md:col-span-7 md:col-end-13 relative shadow-xl">
            <Image
              src="/img/2x/grupo-transpoint.png"
              alt="Grupo Transpoint"
              width={810}
              height={392}
              layout="responsive"
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default Portfolio;
