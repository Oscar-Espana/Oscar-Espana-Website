import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#portafolio",
        scrub: true,
        pin: true,
        start: "top top",
        end: () => "250%",
        anticipatePin: 1,
      },
    });
    tl2.to(titleRef.current, {
      transform: "scale(90)",
      transformOrigin: "94.52% 57%",
      duration: 4,
    });
    tl2.to(
      backgroundRef.current,
      {
        background: "transparent",
        duration: 1,
      },
      "-=2.5"
    );
    tl2.to(
      backgroundRef.current,
      {
        autoAlpha: 0,
        duration: 1,
      },
      "-=2.5"
    );
  }, []);

  return (
    <section id="portafolio" className="relative">
      <article
        id="content"
        className="absolute min-h-screen w-full top-0 bg-white flex items-center justify-center"
      >
        <div className="container">
          <h2 className="text-primary">Portafolio</h2>
          <p className="text-black">
            Amet ex commodo Lorem nulla Lorem ad.Id reprehenderit ea dolore
            officia mollit proident qui labore ipsum dolore est labore. Sunt
            velit sunt sunt nisi id eu commodo. Ex laboris eiusmod quis ex
            reprehenderit cupidatat anim exercitation duis ea. Aliqua laborum
            deserunt sunt aliquip nisi aute nostrud reprehenderit ex
            reprehenderit Lorem ad culpa. Enim aute ullamco exercitation amet
            quis incididunt consectetur ad eiusmod id nostrud. Nulla magna enim
            nisi Lorem minim adipisicing occaecat dolore labore irure laboris.
            Consequat aliquip quis nisi fugiat pariatur eiusmod aliquip. Laborum
            aliquip Lorem magna dolore excepteur id pariatur est eiusmod sunt.
            Adipisicing et aliquip magna ipsum ad sint in excepteur cupidatat
            Lorem nostrud. Et ut ex irure fugiat cupidatat. Sit aute cupidatat
            nisi minim reprehenderit nisi. Ad quis do elit do et in est do amet
            occaecat nisi aliqua occaecat. In magna consequat magna ut laborum
            consequat ullamco. Dolor eiusmod ex ullamco veniam cupidatat minim
            ad aliqua. Cillum sunt cupidatat sit cillum exercitation mollit
            consectetur cillum amet id. Quis qui aute laborum ex ex veniam
            mollit. Fugiat eu excepteur adipisicing consectetur laboris aliquip.
            Tempor minim est reprehenderit in id exercitation esse officia ex
            Lorem velit adipisicing.
          </p>
        </div>
      </article>
      <div
        ref={backgroundRef}
        className="relative h-screen bg-primary flex items-center justify-center overflow-hidden"
      >
        <h2 ref={titleRef} className="text-white">
          Portafolio
        </h2>
      </div>
    </section>
  );
};

export default Portfolio;
