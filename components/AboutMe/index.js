import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="bg-gray">
      <div className="container grid grid-cols-12 py-16 md:py-28 lg:py-40">
        <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
          <h2>
            <span className="text-primary">Acerca</span> de mi
          </h2>
          <p className="tag">{"< />"}</p>
          <div className="mt-6 space-y-3 md:mt-8">
            <p>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.
            </p>
            <p>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
              et. Sunt qui esse pariatur duis deserunt mollit dolore cillum
              minim tempor enim.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-start-7 mt-6 md:mt-0 md:col-span-6 relative flex flex-col justify-center">
          <Image
            src="/img/2x/about-me@2x.png"
            alt="Acerca de mi"
            width={590}
            height={466}
            layout="responsive"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
