import React, { useEffect } from "react";
import gsap from "gsap";
import ServiceCard from "./ServiceCard";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyServices = () => {
  useEffect(() => {
    const services = gsap.utils.toArray("#services article");

    services.forEach((service, index) => {
      gsap.to(service, {
        scrollTrigger: {
          trigger: service,
          start: "top center",
          end: "bottom center+=150px",
          scrub: true,
          toggleClass: "border-card-service",
          invalidateOnRefresh: true,
        },
        stagger: 1,
      });
    });
  }, []);
  return (
    <section id="services" className="pt-10 pb-36 bg-black text-white">
      <div className="container">
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
    </section>
  );
};

export default MyServices;
