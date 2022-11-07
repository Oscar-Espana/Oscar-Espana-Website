import { appWithTranslation } from "next-i18next";
import { Raleway } from "@next/font/google";
import "../styles/globals.css";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={raleway.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);
