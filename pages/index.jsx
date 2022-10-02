import { useTranslation } from "next-i18next";
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
import i18nextConfig from "../next-i18next.config";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <CustomHead
        title={t("metadata.title")}
        description={t("metadata.description")}
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
