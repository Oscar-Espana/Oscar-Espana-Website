import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import i18nextConfig from "../../next-i18next.config";

const CustomHead = ({ title, description }) => {
  const router = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}${router.asPath}`;
  const locales = router.locales || [];
  const defaultLocale = i18nextConfig.i18n.defaultLocale;
  const currentLocale = router.locale || defaultLocale;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {currentLocale === "en" && (
        <meta
          property="og:image"
          content="https://res.cloudinary.com/duvrmhcdl/image/upload/v1664751804/Oscar%20Espa%C3%B1a%20-%20P%C3%A1gina%20web/Oscar_Espana_Card_EN.jpg"
        />
      )}
      {currentLocale === "es" && (
        <meta
          property="og:image"
          content="https://res.cloudinary.com/duvrmhcdl/image/upload/v1664751804/Oscar%20Espa%C3%B1a%20-%20P%C3%A1gina%20web/Oscar_Espana_Card_ES.jpg"
        />
      )}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={URL} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {currentLocale === "en" && (
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/duvrmhcdl/image/upload/v1664751804/Oscar%20Espa%C3%B1a%20-%20P%C3%A1gina%20web/Oscar_Espana_Card_EN.jpg"
        />
      )}
      {currentLocale === "es" && (
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/duvrmhcdl/image/upload/v1664751804/Oscar%20Espa%C3%B1a%20-%20P%C3%A1gina%20web/Oscar_Espana_Card_ES.jpg"
        />
      )}

      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          href={`${URL}${locale}`}
          hrefLang={locale}
        />
      ))}
      <link
        rel="alternate"
        href={`${URL}${defaultLocale}`}
        hrefLang="x-default"
      />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={`${URL}${currentLocale}`} />

      <link rel="apple-touch-icon" href="/oscar-espana.svg" />
      <link rel="icon" href="/oscar-espana.svg" />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="theme-color" content="#000" />
    </Head>
  );
};

export default CustomHead;
