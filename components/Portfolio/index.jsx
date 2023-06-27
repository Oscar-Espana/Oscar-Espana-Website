import gsap, { Power1, Sine } from "gsap";
import { useTranslation } from "next-i18next";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import CardPortfolio from "./CardPortfolio";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    const articlesPortfolio = gsap.utils.toArray(".panel article");

    articlesPortfolio.forEach((article) => {
      gsap.to(article, {
        scrollTrigger: {
          trigger: "#items-portfolio",
          start: "center center",
          end: "bottom start-=150px",
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

      const linkPortfolio = article.getElementsByClassName("link-portfolio")[0];
      tl.to(linkPortfolio, {
        color: "rgb(160, 160, 160)",
      });

      const h3 = article.querySelector("h3");
      const figure = article.querySelector("figure");

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: h3,
          start: "bottom bottom",
          end: "bottom bottom-=50%",
          scrub: true,
        },
        defaults: {
          ease: Sine.easeOut,
        },
      });

      tl2.fromTo(
        figure,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
        }
      );
    });
  }, []);

  return (
    <section>
      <article className="bg-gradient-primary panel">
        <div className="container w-full min-h-[600px] h-screen flex flex-col  justify-center items-center">
          <h2 className="text-white text-6xl md:text-7xl lg:text-[84px]">
            {t("portfolio.title")}
          </h2>
          <p className="text-white mt-8 text-3xl">Oscar España</p>
        </div>
      </article>
      <div
        id="items-portfolio"
        className="panel bg-gray z-10 py-24 md:py-28 lg:py-32 px-4 md:px-0 space-y-14 md:space-y-20 transition-colors duration-300 ease-in-out"
      >
        <CardPortfolio
          title={t("portfolio.items.oscarEspana.title")}
          titleEmphasys={t("portfolio.items.oscarEspana.titleEmphasys")}
          description={t("portfolio.items.oscarEspana.description")}
          imageUrl="/img/oscar-espana.png"
          technologies={t("portfolio.items.oscarEspana.technologies")}
          linkProject={"https://github.com/Oscar-Espana/Oscar-Espana-Website"}
        />
        <CardPortfolio
          title={t("portfolio.items.grupoTransoceanica.title")}
          titleEmphasys={t("portfolio.items.grupoTransoceanica.titleEmphasys")}
          description={t("portfolio.items.grupoTransoceanica.description")}
          imageUrl="/img/grupo-transoceanica.png"
          technologies={t("portfolio.items.grupoTransoceanica.technologies")}
        />

        <CardPortfolio
          titleEmphasys={t("portfolio.items.bella.titleEmphasys")}
          description={t("portfolio.items.bella.description")}
          imageUrl="/img/bella.png"
          technologies={t("portfolio.items.bella.technologies")}
          linkProject={
            "https://github.com/Oscar-Espana/Bella-Animated-Landing-Page"
          }
        />

        <CardPortfolio
          titleEmphasys={t("portfolio.items.delivery.titleEmphasys")}
          description={t("portfolio.items.delivery.description")}
          imageUrl="/img/delivery.png"
          technologies={t("portfolio.items.delivery.technologies")}
          linkProject={"https://github.com/Oscar-Espana/Delivery-App"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
