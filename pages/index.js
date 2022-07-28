import Head from "next/head";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Presentation from "../components/Presentation";
import Technologies from "../components/Technologies";
import CustomCursor from "../components/CustomCursor";
import Portfolio from "../components/Portfolio";
import MyServices from "../components/MyServices";

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
    </div>
  );
}
