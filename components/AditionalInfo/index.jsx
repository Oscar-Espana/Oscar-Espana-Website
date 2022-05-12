import React from "react";
import Card from "./Card";

const AditionalInfo = () => {
  return (
    <section className="bg-black pt-20 md:pt-24 pb-36 text-white">
      <div className="container">
        <p className="text-[24px] md:text-[32px] font-medium">
          Hola, mi nombre es Oscar España 👋. Soy desarrollador frontend con
          experiencia en diseño y desarrollo de aplicaciones web y móviles. Me
          encanta aprender nuevas tecnologías, emplear tendencias de diseño y me
          enfoco en entregar un producto de calidad de acuerdo a las necesidades
          del usuario
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-36">
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
