import React from "react";
import { useTranslation } from "next-i18next";
import LinkContact from "./LinkContact";

const WorkTogether = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-black pt-24 pb-20 md:py-28 lg:pt-32 lg:pb-20">
      <div className="container grid grid-cols-12 space-y-20 md:space-y-0">
        <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start">
          <h2 className="text-white text-center md:text-left ">
            <span className="text-gradient-primary">
              {t("workingTogether.working")} <br />
            </span>{" "}
            {t("workingTogether.together")}
          </h2>
          <a href="mailto:espaaoscar@gmail.com" className="mt-16 md:mt-24">
            <button
              className="px-12 py-3 text-xl font-medium bg-gradient-primary text-white rounded-lg cursor-pointer
           hover:animated-gradient-button"
            >
              {t("contactMe")}
            </button>
          </a>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col justify-center">
          <div className="space-y-3 mb-16 mt-6 md:mt-0 md:mb-28 text-white">
            <LinkContact
              contactInfo="espaaoscar@gmail.com"
              href="mailto:espaaoscar@gmail.com"
            />
            <LinkContact contactInfo="+593990121123" href="tel:+593990121123" />
            <LinkContact
              contactInfo="LinkedIn"
              href="https://linkedin.com/in/oscar-españa-56aa77172"
              openNewTab={true}
            />
            <LinkContact
              contactInfo="GitHub"
              href="https://github.com/Oscar-Espana"
              openNewTab={true}
            />
          </div>
        </div>
      </div>
      <p className="text-white text-center mt-20 md:mt-32">
        © Oscar España - {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default WorkTogether;
