import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    const paneles = gsap.utils.toArray(".panel");
    paneles.forEach((panel, i) => {
      if (i < paneles.length - 1) {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      }
    });
  }, []);

  return (
    <section>
      <article className="bg-black panel">
        <div className="container w-full min-h-[600px] md:min-h-[800px] h-screen flex flex-col  justify-center items-center">
          <h2 className="text-primary text-6xl md:text-7xl lg:text-8xl">
            Portafolio
          </h2>
          <p className="text-white mt-8 text-3xl">Oscar España</p>
        </div>
      </article>
      <div className="panel">
        <article className="bg-gray z-10">
          <div className="container grid grid-cols-1 md:grid-cols-12 gap-5  py-20 md:py-28 lg:py-36">
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
                src="/img/grupo-transpoint.png"
                alt="Grupo Transpoint"
                width={810}
                height={392}
                layout="responsive"
              />
            </div>
          </div>
        </article>

        <article className="bg-white">
          <div className="container grid grid-cols-1 md:grid-cols-12 gap-5 py-20 md:py-28 lg:py-36">
            <div className=" md:col-span-4">
              <h3 className="text-black">
                <span className="text-primary">Bella</span>
              </h3>
              <p className="text-darkGray mt-12">
                Landing Page minimaslista y elegante que contiene una gran
                variedad de animaciones que se activan por medio del scroll.
                Realizada usando GSAP.
              </p>
            </div>
            <div className="md:col-span-7 md:col-end-13 relative shadow-xl">
              <Image
                src="/img/bella.jpg"
                alt="Bella"
                width={810}
                height={392}
                layout="responsive"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
