import React, {useEffect, useState} from "react";
import '../styles/globals.scss';
import 'tailwindcss/tailwind.css';
import {StoreProvider} from "../components/StoreProvider";
import Head from "next/head";
import {ModalLoader} from "../components/Modal/ModalLoader";
import {ModalLoaderContext} from "../utils/modal";
function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalText, setModalText] = useState(undefined);

  const modalContextValue = {
    setLoading: setModalLoading,
    setText: setModalText,
  };


  // useSSR()

  // useSSR(window.initialI18nStore, window.initialLanguage);

  return <StoreProvider {...pageProps}>
    <Head>
      <title>Trustlink</title>
      {/*<link rel="shortcut icon" href={profile?.entity?.logo_url ? appConfig.imageApiUrl + profile?.entity?.logo_url : "/assets/logo.svg"} />*/}
      <link rel="shortcut icon" href="/assets/icons/map-marker.png" />
      <link rel="stylesheet" type="text/css" href="/assets/css/normalize.css" />
      <link rel="stylesheet" type="text/css" href="/assets/css/demo.css" />
      <link rel="stylesheet" type="text/css" href="/assets/css/component.css" />
      <script src="/assets/js/TweenLite.min.js"></script>
      <script src="/assets/js/EasePack.min.js"></script>
      <script src="/assets/js/rAF.js"></script>
      <script src="/assets/js/demo-1.js"></script>
    </Head>
    {getLayout(
        <>
      <ModalLoader isOpen={modalLoading} text={modalText} />
          <ModalLoaderContext.Provider value={modalContextValue}>
              <Component {...pageProps} />
          </ModalLoaderContext.Provider>
    </>)}
  </StoreProvider>;
}

export default MyApp
