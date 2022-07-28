import React, { useRef, useEffect } from "react";

const Presentation = () => {
  return (
    <section
      id="presentation"
      className="relative bg-black pt-20 md:pt-24 pb-36 text-white"
    >
      <div className="absolute z-10 rounded-full elipse1"></div>
      <div className="relative container z-20">
        <p className="text-[24px] md:text-[32px] font-medium 0">
          Hola, mi nombre es Oscar España 👋. Soy desarrollador frontend con
          experiencia en diseño y desarrollo de aplicaciones web y móviles. Me
          encanta aprender nuevas tecnologías, emplear tendencias de diseño y me
          enfoco en entregar un producto de calidad de acuerdo a las necesidades
          del usuario
        </p>
      </div>
    </section>
  );
};

export default Presentation;
