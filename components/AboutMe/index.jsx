import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutMeRef = useRef(null);
  const aboutMeSectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.to(aboutMeRef.current, {
      scrollTrigger: {
        trigger: aboutMeRef.current,
        start: "top+=250 top",
        end: () => "+=250",
        scrub: 1,
      },
      backgroundColor: "black",
      color: "white",
      ease: "circ.out",
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
          },
        });
      },
    });
  }, []);
  return (
    <section ref={aboutMeRef} className="bg-white py-24 md:py-28 lg:py-32">
      <div ref={aboutMeSectionRef} className="container grid grid-cols-12 ">
        <div className="col-span-12 md:col-span-5">
          <h2 ref={titleRef}>
            <span className="text-primary">Acerca</span> de mi
          </h2>
        </div>
        <div className="col-span-12  md:col-span-7 md:col-start-6 flex flex-col justify-center">
          <div className="space-y-3 mb-16 mt-6 md:mt-0 md:mb-28">
            <p>
              Mi nombre es Oscar España, soy ingeniero en Electrónica y Redes de
              Información graduado de la Escuela Politécnica Nacional en Quito -
              Ecuador, me considero un apasionado del desarrollo web y móvil, y
              constantemente me encuentro aprendiendo nuevas tecnologías.
            </p>
            <p>
              Mi interés por desarrollo web comenzó a inicios del 2019 y desde
              ese momento nunca he dejado de aprender, he llegado a realizar
              proyectos para pequeñas, medianas y grandes empresas.
            </p>
            <p>
              A lo largo de mi carrera profesional he participado en proyectos
              tanto para Backend y Frontend, sin embargo mi especialidad es del
              desarrollo Frontend, con la cual me siento mas cómodo. Además,
              tengo conocimientos sobre el diseño de interfaces tanto para
              aplicaciones web y móviles usando FIGMA con el fin de entregar un
              produto que cumplan las espectativas de los clientes.
            </p>
            <p>
              Me gusta trabajar en equipo, ya que puedo compartir mis
              conocimientos con otras personas y además puedo aprender de ellos,
              permitiéndome crecer como persona y profesional.
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
