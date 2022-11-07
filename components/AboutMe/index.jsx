import gsap from "gsap";
import { useTranslation } from "next-i18next";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useWindowResize } from "../../hooks/useWindowsResize";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const { t } = useTranslation("common");
  const size = useWindowResize();

  const aboutMeRef = useRef(null);
  const aboutMeSectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 767px)": function () {
        gsap.set(titleRef.current, { clearProps: "all" });
      },
    });
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.to(titleRef.current, {
          scrollTrigger: {
            trigger: aboutMeSectionRef.current,
            pin: titleRef.current,
            pinSpacing: false,
            scrub: 3,
            start: "top top+=100",
            end: () => "bottom top+=160",
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      },
    });
  }, [size]);

  return (
    <section ref={aboutMeRef} className="bg-white py-24 md:py-28 lg:py-32">
      <div ref={aboutMeSectionRef} className="container grid grid-cols-12 ">
        <div className="col-span-12 md:col-span-5">
          <h2 ref={titleRef}>
            <span className="text-gradient-primary ">{t("aboutMe.about")}</span>
            {t("aboutMe.me")}
          </h2>
        </div>
        <div className="col-span-12  md:col-span-7 md:col-start-6 flex flex-col justify-center">
          <div className="space-y-3 mb-16 mt-6 md:mt-0 md:mb-28">
            <p className="text-[18px]">{t("aboutMe.description1")}</p>
            <p className="text-[18px]">{t("aboutMe.description2")}</p>
            <p className="text-[18px]">{t("aboutMe.description3")}</p>
            <p className="text-[18px]">{t("aboutMe.description4")}</p>
          </div>

          <picture className="group hover:scale-x-95 transition-transform duration-700">
            <Image
              className="group-hover:scale-[1.2] transition-transform duration-700 ease-in-out"
              src="/img/about-me.jpg"
              alt={`${t("aboutMe.about")}${t("aboutMe.me")}`}
              width={590}
              height={466}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              quality={100}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN88B8AAsUB4ZtvXtIAAAAASUVORK5CYII="
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
