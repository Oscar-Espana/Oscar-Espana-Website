import React, { useEffect } from "react";
import gsap from "gsap";
import ServiceCard from "./ServiceServiceCard";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useWindowResize } from "../../hooks/useWindowsResize";

gsap.registerPlugin(ScrollTrigger);

const MyServicesx = () => {
  const size = useWindowResize();
  useEffect(() => {
    console.log("use effect------");
    const services = gsap.utils.toArray("#services div");

    ScrollTrigger.matchMedia({
      "(max-width: 767px)": function () {
        console.log("max width 767px");
        services.forEach((service) => {
          gsap.set(service, { opacity: 1, y: 0 });
          gsap.timeline({
            scrollTrigger: {
              trigger: service,
              start: "top center",
              end: "bottom center",
              scrub: true,
              toggleClass: "border-card-service",
              invalidateOnRefresh: true,
            },
          });
        });
      },
    });

    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        console.log("min width 768px");
        gsap.set(services, {
          autoAlpha: 0,
          y: -100,
        });
        gsap.to("#services div", {
          scrollTrigger: {
            trigger: "#aditionalInfo",
            start: "center top+=25%",
            pin: true,
            end: () => "+=100%",
            scrub: true,
            invalidateOnRefresh: true,
          },
          y: 0,
          autoAlpha: 1,
          stagger: 0.18,
        });
      },
    });
  }, [size]);
  return (
    <section id="services" className="bg-black pt-20 md:pt-24 pb-36 text-white">
      <div className="container">
        <div
          id="services"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-36"
        >
          <ServiceCard
            urlImage="/iconos/desktop.svg"
            description="Desarrollo de aplicaciones web, sitios web, E -commerce"
          />
          <ServiceCard
            urlImage="/iconos/phone.svg"
            description="Desarrollo de aplicaciones móviles  multiplataforma (Android y iOS)"
          />
          <ServiceCard
            urlImage="/iconos/layers.svg"
            description="Diseño UI de aplicaciones web y móviles"
          />
        </div>
      </div>
    </section>
  );
};

export default MyServicesx;
