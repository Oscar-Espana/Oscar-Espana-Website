import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const showHideNav = gsap
      .from("nav", {
        yPercent: -100,
        duration: 0.3,
        ease: "sine.out",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top-=100",
      onUpdate: (self) => {
        if (self.direction === -1) {
          showHideNav.play();
        } else {
          showHideNav.reverse();
        }
      },
    });
  }, []);
  return (
    <nav className="fixed w-full z-50 bg-[rgba(0,0,0,0.05)] backdrop-blur-md flex items-center py-1 md:py-4">
      <div className="relative container m-auto text-white font-medium text-[40px] ">
        <Link href="/">
          <a>
            <span className="text-primary">O</span>E /{">"}
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
