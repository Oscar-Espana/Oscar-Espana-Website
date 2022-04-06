import Head from "next/head";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <AboutMe />
      <Skills />
      <div
        id="Welcome"
        className="h-96 w-full bg-gray flex justify-center items-center"
      >
        Welcome
      </div>
    </div>
  );
}
