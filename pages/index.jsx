import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutMe from "../components/AboutMe";
import CustomCursor from "../components/CustomCursor";
import CustomHead from "../components/CustomHead";
import Hero from "../components/Hero";
import MyServices from "../components/MyServices";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";
import WorkTogether from "../components/WorkTogether";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Oscar España - Portafolio"
        description="Soy Oscar España, apasionado por el desarrollador frontend con experiencia en diseño y desarrollo de aplicaciones web y móviles."
      />

      <CustomCursor />
      <Navbar />
      <Hero />
      <Presentation />
      <MyServices />
      <Skills />
      <Technologies />
      <AboutMe />
      <Portfolio />
      <WorkTogether />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
