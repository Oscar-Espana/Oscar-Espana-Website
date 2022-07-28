import React, { useEffect } from "react";
import gsap from "gsap";
import ServiceCard from "./ServiceCard";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyServices = () => {
  useEffect(() => {
    const services = gsap.utils.toArray("#services article");

    ScrollTrigger.matchMedia({
      "(max-width: 767px)": function () {
        console.log("max width 767px");
        services.forEach((service) => {
          gsap.to(service, {
            scrollTrigger: {
              trigger: service,
              start: "top center",
              end: "bottom-=50px center",
              scrub: true,
              toggleClass: "border-card-service",
              invalidateOnRefresh: true,
            },
          });
        });
      },
    });
  }, []);
  return (
    <section
      id="services"
      className="relative overflow-hidden pt-10 pb-36 bg-black text-white"
    >
      <div className="relative container z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      <div className="absolute rounded-full elipse2"></div>
    </section>
  );
};

export default MyServices;
