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
        <title>Trustlink</title>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
        <meta name="description" content="Trustlink Website" />
        <meta property="og:title" content="Trustlink" />
        <meta property="og:description" content="Trustlink Website" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://myclothingstore.com/" /> */}
        {/*<link rel="shortcut icon" href={profile?.entity?.logo_url ? appConfig.imageApiUrl + profile?.entity?.logo_url : "/assets/logo.svg"} />*/}
        <link rel="preload" href="/assets/logo/icon-only.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:bold,light,regular,medium"
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
