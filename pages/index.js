import Head from "next/head";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Animated from "../components/Animated";
import AditionalInfo from "../components/AditionalInfo";
import Technologies from "../components/Technologies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oscar España</title>
        <meta name="description" content="Oscar España - Portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <AditionalInfo />
      <Skills />
      <Technologies />
      <AboutMe />
      <Technologies />

      {/* <Animated /> */}
    </div>
  );
}
