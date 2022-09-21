import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const CustomHead = ({ title, description }) => {
  const router = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}${router.asPath}`;

  return (
    <Head>
      <title>Oscar España - Portafolio</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/duvrmhcdl/image/upload/v1662952705/Oscar%20Espa%C3%B1a%20-%20P%C3%A1gina%20web/Oscar-Espana-Graph.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={URL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/duvrmhcdl/image/upload/v1662952705/Oscar%20Espa%C3%B1a%20-%20P%C3%A1gina%20web/Oscar-Espana-Graph.jpg"
      />

      <link rel="alternate" href={URL} hrefLang="es-ec" />
      <link rel="alternate" href={URL} hrefLang="x-default" />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={URL} />

      <link rel="apple-touch-icon" href="/oscar-espana.svg" />
      <link rel="icon" href="/oscar-espana.svg" />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="theme-color" content="#000" />
    </Head>
  );
};

export default CustomHead;
