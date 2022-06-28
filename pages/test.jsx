import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Test = () => {
  useEffect(() => {
    const no03 = document.querySelectorAll("#no03 .box");
    const boxWidth = no03[0].clientWidth;
    const totalElements = no03.length;
    const totalWidth = boxWidth * totalElements;
    var mod = gsap.utils.wrap(0, totalWidth);

    function marquee(which, time) {
      gsap.set(which, {
        x: function (i) {
          return i * no03[i].clientWidth;
        },
      });
      var action = gsap.timeline().to(which, {
        x: () => `-=${totalWidth}`,
        modifiers: {
          x: (x) => mod(parseFloat(x)) + "px",
        },
        duration: time,
        ease: "none",
        repeat: -1,
      });
      return action;
    }

    gsap.timeline().add(marquee(no03, 20), 1);
  }, []);

  return (
    <div id="no03" className="wrapper">
      <div className="boxes">
        <div className="box">GreenSock 1</div>
        <div className="box">Nice Tool 2</div>
        <div className="box">GreenSock 3</div>
        <div className="box">Animate 4</div>
        <div className="box">Fast & easy 5</div>
        <div className="box">GreenSock 6 </div>
        <div className="box">The best 7</div>
      </div>
    </div>
  );
};

export default Test;
