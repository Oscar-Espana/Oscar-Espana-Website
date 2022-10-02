import gsap from "gsap";
import { useTranslation } from "next-i18next";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const MyServices = () => {
  const { t } = useTranslation("common");

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
            description={t("myServices.web")}
          />
          <ServiceCard
            urlImage="/iconos/phone.svg"
            description={t("myServices.mobile")}
          />
          <ServiceCard
            urlImage="/iconos/layers.svg"
            description={t("myServices.design")}
          />
        </div>
      </div>
      <div className="absolute rounded-full elipse2"></div>
    </section>
  );
};

export default MyServices;
