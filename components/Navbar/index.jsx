import React, { useEffect } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const router = useRouter();
  const locales = router.locales || [];
  const currentLocale = router.locale;

  useEffect(() => {
    const showHideNav = gsap
      .from("nav", {
        yPercent: -100,
        duration: 0.275,
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
    <nav className="fixed w-full z-50 bg-[rgba(0,0,0,0.06)] backdrop-blur-md flex items-center py-1 md:py-3">
      <div className="container m-auto flex items-center text-white font-medium text-[40px] ">
        <Link href="/">

          <span className="text-primary">O</span>E /{">"}

        </Link>
        <div className="flex flex-1 items-center justify-end">
          {locales.sort().map((locale) => (
            (<Link
              key={locale}
              href="/"
              locale={locale}
              className={`text-lg uppercase mr-2 ${
                currentLocale === locale && "text-primary"
              } `}>

              {locale}

            </Link>)
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
