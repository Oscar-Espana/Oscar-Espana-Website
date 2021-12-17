import React from "react";
import Image from "next/image";
import { skills } from '../../constants/skill'
import Skill from "./Skill";

const AboutMe = () => {
  return (
    <section className="bg-gray py-16 md:py-28 lg:py-40">
      <div className="container grid grid-cols-12 ">
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
          <h2>
            <span className="text-primary">Acerca</span> de mi
          </h2>
          <p className="tag">{"< />"}</p>
          <div className="mt-6 space-y-3 md:mt-8">
            <p>
              A lo largo de 2 años he sido participe del desarrollo de aplicaciones tanto para Frontend y Backend, especializandome en tecnologías web.
            </p>
            <p>
              He realizado aplicaciones web y móviles para Android y iOS usando tecnologías actuales como React, React Native, Flutter, de la mano con las necesidades del usuario.
            </p>
            <p>Además del desarrollo web tengo experiencia en el diseño de interfaces web y móviles usando FIGMA,</p>
          </div>
        </div>
        <div className="col-span-12 md:col-start-7 mt-6 md:mt-0 md:col-span-6 flex flex-col justify-center">
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
      <div className="container mt-6 md:mt-14 lg:mt-24 ">
        <div className='rounded-3xl overflow-hidden'>
          <div className='bg-black custom-background p-8 sm:p-12 lg:p-16'>
            <h3 className='text-white text-2xl font-bold mb-8'>Tecnologías</h3>
            <div className='columns-3 sm:columns-2 md:columns-3 lg:columns-4 space-y-5'>
              {skills.map((skill, index) => (
                <Skill key={index} skill={skill.title} image={skill.image} />
              ))}
            </div>
          </div>
          <div className="bg-primary w-full h-[10px]" />
        </div >
      </div>

    </section >
  );
};

export default AboutMe;
