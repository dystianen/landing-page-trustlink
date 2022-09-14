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
        <meta property="title" content="Trustlink" key="trustlink" />
        <meta property="og:description" content="Trustlink Website" key="trustlink-website"  />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://myclothingstore.com/" /> */}
        {/* <link rel="preload" href={"/assets/logo.svg"} /> */}
        <link rel="icon" href="/assets/logo/icon-only.png" as="icon" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:bold,light,regular,medium" crossOrigin="anonymous"
        />
        <link rel="canonical" href={"https://www.withtrustlink.com/"} />
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
