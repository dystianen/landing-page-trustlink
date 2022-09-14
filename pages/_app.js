import React, { useEffect, useState } from "react";
import "../styles/globals.scss";
import "../styles/home.scss";
import "tailwindcss/tailwind.css";
import { appWithTranslation } from "next-i18next";
import { StoreProvider } from "../components/StoreProvider";
import Script from "next/script";
import Head from "next/head";
import { ModalLoader } from "../components/Modal/ModalLoader";
import { ModalLoaderContext } from "../utils/modal";
function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalText, setModalText] = useState(undefined);

  const modalContextValue = {
    setLoading: setModalLoading,
    setText: setModalText,
  };

  return (
    <StoreProvider {...pageProps}>
      <Head>
        <title key="trustlink">Trustlink</title>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0" key="trustlink-website"/>
        <meta name="description" content="Trustlink Website" key="trustlink-website"/>
        <meta name="keywords" content="TrustLink" />
        <meta name="author" content="TrustLink" />
        <meta name="publisher" content="TrustLink" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={"https://www.withtrustlink.com/"} />
        <link rel="icon" href="/assets/logo/icon-only.png" as="icon" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:bold,light,regular,medium" crossOrigin="anonymous"
        />
        <Script src={"../styles/animation/textCarousel.js"} />
      </Head>
      {getLayout(
        <>
          <ModalLoader isOpen={modalLoading} text={modalText} />
          <ModalLoaderContext.Provider value={modalContextValue}>
            <Component {...pageProps} />
          </ModalLoaderContext.Provider>
        </>
      )}
    </StoreProvider>
  );
}

export default appWithTranslation(MyApp);
