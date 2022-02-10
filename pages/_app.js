import React, {useEffect, useState} from "react";
import '../styles/globals.scss';
import 'tailwindcss/tailwind.css';
import '../styles/component.css';
import '../styles/demo.css';
import '../styles/normalize.css';

import {StoreProvider} from "../components/StoreProvider";
import Script from 'next/script'
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



  return <StoreProvider {...pageProps}>
    <Head>
      <title>Trustlink</title>
      {/*<link rel="shortcut icon" href={profile?.entity?.logo_url ? appConfig.imageApiUrl + profile?.entity?.logo_url : "/assets/logo.svg"} />*/}
      {/*<link rel="shortcut icon" href="/assets/icons/map-marker.png" />*/}
      <Script src={'../styles/animation/EasePack.min.js'} />
      <Script src={'../styles/animation/rAf.js'} />
      <Script src={'../styles/animation/TweenLite.min.js'} />
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
