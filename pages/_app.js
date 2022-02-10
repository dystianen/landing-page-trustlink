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
      <link rel="shortcut icon" href="/assets/Favicon_VBG.png" />
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
