import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const MyServices = () => {
  useEffect(() => {
    const services = gsap.utils.toArray("#services article");

    ScrollTrigger.matchMedia({
      "(max-width: 767px)": function () {
        services.forEach((service) => {
          gsap.to(service, {
            scrollTrigger: {
              trigger: service,
              start: "top center",
              end: "bottom-=10% center",
              scrub: 1,
              toggleClass: "border-card-service",
              invalidateOnRefresh: true,
            },
          });
        });
      },
    });
    ScrollTrigger.refresh();
  }, []);
  return (
    <section
      id="services"
      className="relative overflow-hidden pt-10 pb-36 bg-black text-white"
    >
      <div className="relative container z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
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
