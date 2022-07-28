import React, { useEffect } from "react";
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CardPortfolio from "./CardPortfolio";

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

    const articlesPortfolio = gsap.utils.toArray(".panel article");
    articlesPortfolio.forEach((article) => {
      gsap.to(article, {
        scrollTrigger: {
          trigger: "#items-portfolio",
          start: "center center",
          end: "bottom center",
          scrub: true,
          toggleClass: "!bg-black",
        },
      });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#items-portfolio",
          start: "center center",
          end: "center center",
          scrub: true,
        },
        defaults: {
          ease: Power1.easeInOut,
        },
      });
      tl.to(article, {
        color: "white",
        background: "#151516",
      });

      const descriptionPortfolio = article.getElementsByClassName(
        "description-portfolio"
      )[0];
      tl.to(descriptionPortfolio, {
        color: "white",
      });

      const techPortfolio = article.getElementsByClassName("tech-portfolio")[0];
      tl.to(techPortfolio, {
        color: "rgb(160, 160, 160)",
      });
    });
  }, []);

  return (
    <section>
      <article className="bg-black panel">
        <div className="container w-full min-h-[600px] md:min-h-[800px] h-screen flex flex-col  justify-center items-center">
          <h2 className="text-primary text-6xl md:text-7xl lg:text-8xl">
            PORTAFOLIO
          </h2>
          <p className="text-white mt-8 text-3xl">Oscar España</p>
        </div>
      </article>
      <div
        id="items-portfolio"
        className="panel bg-gray z-10 py-24 md:py-28 lg:py-32 px-4 md:px-0 space-y-14 md:space-y-20 transition-colors duration-300 ease-in-out"
      >
        <CardPortfolio
          title="Grupo"
          titleEmphasys="Transoecánica"
          description="Aplicación web destinada a la automatización de procesos que
        llevan las operadoras de vuelo con respecto a la programación de
        vuelos."
          imageUrl="/img/grupo-transoceanica.png"
          technologies="React, Next JS, MUI, Typescript, GraphQL, Redux Toolkit"
        />

        <CardPortfolio
          titleEmphasys="Bella"
          description="Landing Page minimaslista y elegante que contiene una gran
          variedad de animaciones que se activan por medio del scroll.
          Realizada usando GSAP."
          imageUrl="/img/bella.png"
          technologies="HTML, CSS,  Vanilla JS, GSAP, Scrolltrigger "
        />
        <CardPortfolio
          title="Grupo"
          titleEmphasys="Transoecánica"
          description="Aplicación web destinada a la automatización de procesos que
        llevan las operadoras de vuelo con respecto a la programación de
        vuelos."
          imageUrl="/img/grupo-transoceanica.png"
          technologies="React, Next JS, MUI, Typescript, GraphQL, Redux Toolkit"
        />

        <CardPortfolio
          titleEmphasys="Bella"
          description="Landing Page minimaslista y elegante que contiene una gran
          variedad de animaciones que se activan por medio del scroll.
          Realizada usando GSAP."
          imageUrl="/img/bella.png"
          technologies="HTML, CSS,  Vanilla JS, GSAP, Scrolltrigger "
        />
      </div>
    </section>
  );
};

export default Portfolio;
