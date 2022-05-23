import React, { useRef, useEffect } from "react";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AditionalInfo = () => {
  useEffect(() => {
    const services = gsap.utils.toArray("#services div");

    ScrollTrigger.matchMedia({
      "(max-width: 767px)": function () {
        services.forEach((service) => {
          gsap.set(service, { opacity: 1, y: 0 });
          gsap.timeline({
            scrollTrigger: {
              trigger: service,
              start: "top center",
              end: "bottom center",
              scrub: true,
              toggleClass: "border-card-service",
            },
          });
        });
      },
    });

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        services.forEach((service, index) => {
          if (index === 0) {
            const tl = gsap.timeline({
              defaults: { ease: "power3.inOut" },
              scrollTrigger: {
                trigger: "#aditionalInfo",
                start: "center center",
                end: () => "+=100%",
                scrub: true,
                id: `service-${index}`,
              },
            });
            tl.from(service, {
              y: -100,
              duration: 4,
              autoAlpha: 0,
            }).to(service, {
              y: -0,
              duration: 2,
              autoAlpha: 1,
            });
          } else {
            const tl2 = gsap.timeline({
              defaults: { ease: "power3.inOut" },
              scrollTrigger: {
                trigger: "#aditionalInfo",
                start: "center top+=150",
                pin: true,
                end: () => "+=100%",
                scrub: true,
                id: `service-${index}`,
              },
            });
            tl2
              .from(service, {
                duration: 2,
                y: -100,
                autoAlpha: 0,
                delay: index * 0.25,
              })
              .to(service, {
                duration: 2,
                y: 0,
                autoAlpha: 1,
              });
          }
        });
      },
    });
  }, []);

  return (
    <section
      id="aditionalInfo"
      className="bg-black pt-20 md:pt-24 pb-36 text-white"
    >
      <div className="container">
        <p className="text-[24px] md:text-[32px] font-medium">
          Hola, mi nombre es Oscar España 👋. Soy desarrollador frontend con
          experiencia en diseño y desarrollo de aplicaciones web y móviles. Me
          encanta aprender nuevas tecnologías, emplear tendencias de diseño y me
          enfoco en entregar un producto de calidad de acuerdo a las necesidades
          del usuario
        </p>
        <div
          id="services"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-36"
        >
          <Card
            urlImage="/iconos/desktop.svg"
            description="Desarrollo de aplicaciones web, sitios web, E -commerce"
          />
          <Card
            urlImage="/iconos/phone.svg"
            description="Desarrollo de aplicaciones móviles  multiplataforma (Android y iOS)"
          />
          <Card
            urlImage="/iconos/layers.svg"
            description="Diseño UI de aplicaciones web y móviles"
          />
        </div>
      </div>
    </section>
  );
};

export default AditionalInfo;
