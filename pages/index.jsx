import Head from "next/head";
import AboutMe from "../components/AboutMe";
import CustomCursor from "../components/CustomCursor";
import Hero from "../components/Hero";
import MyServices from "../components/MyServices";
import Portfolio from "../components/Portfolio";
import Presentation from "../components/Presentation";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";
import WorkTogether from "../components/WorkTogether";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oscar España</title>
        <meta name="description" content="Oscar España - Portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CustomCursor />
      <Hero />
      <Presentation />
      <MyServices />
      <Skills />
      <Technologies />
      <AboutMe />
      <Portfolio />
      <WorkTogether />
    </div>
  );
}
