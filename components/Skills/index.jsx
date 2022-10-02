import gsap from "gsap";
import { useTranslation } from "next-i18next";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
import ItemSkill from "./ItemSkill";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    let totalWidth = 0;
    const words = gsap.utils.toArray("#skills .boxSkill");
    words.map((val, key, arr) => {
      if (key === 0) {
        totalWidth = words[arr.length - 1].clientWidth;
      } else if (val.previousElementSibling) {
        let width = val.previousElementSibling.clientWidth;
        totalWidth = totalWidth + width;
      }
      gsap.set(val, {
        x: totalWidth,
      });
    });

    const tl = gsap.timeline();
    tl.to("#skills .boxSkill", {
      duration: 25,
      ease: "none",
      x: `+=${totalWidth}`,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
      repeat: -1,
    });
  }, []);
  return (
    <section id="skills" className="bg-primary overflow-hidden">
      <div className="relative -left-[350px] h-44 lg:h-48 flex items-center">
        <ItemSkill skill={t("skills.creative")} />
        <ItemSkill skill={t("skills.efficient")} />
        <ItemSkill skill={t("skills.teamwork")} />
        <ItemSkill skill={t("skills.innovate")} />
        <ItemSkill skill={t("skills.leadership")} />
      </div>
    </section>
  );
};

export default Skills;
