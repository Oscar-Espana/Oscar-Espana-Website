import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutMeSectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
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
          },
        });
      },
    });
  }, []);
  return (
    <section id="aboutMe" className="bg-white py-24 md:py-28 lg:py-36">
      <div ref={aboutMeSectionRef} className="container grid grid-cols-12 ">
        <div className="col-span-12 md:col-span-5">
          <h2 ref={titleRef}>
            <span className="text-primary">Acerca</span> de mi
          </h2>
        </div>
        <div className="col-span-12  md:col-span-7 md:col-start-6 flex flex-col justify-center">
          <div className="space-y-3 mb-16 mt-6 md:mt-0 md:mb-28">
            <p>
              A lo largo de 2 años he sido participe del desarrollo de
              aplicaciones tanto para Frontend y Backend, especializandome en
              tecnologías web.
            </p>
            <p>
              He realizado aplicaciones web y móviles para Android y iOS usando
              tecnologías actuales como React, React Native, Flutter, de la mano
              con las necesidades del usuario.
            </p>
            <p>
              Además del desarrollo web tengo experiencia en el diseño de
              interfaces web y móviles usando FIGMA.
            </p>
          </div>
          <Image
            src="/img/2x/about-me@2x.png"
            alt="Acerca de mi"
            width={590}
            height={466}
            layout="responsive"
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN88B8AAsUB4ZtvXtIAAAAASUVORK5CYII="
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
