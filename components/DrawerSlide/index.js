import {Button, Drawer, Dropdown, Image, Menu, Modal, Select, Space} from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Product } from "./product";
import Fade from "react-reveal/Fade";
import { UseCases } from "./usecases";
import { useTranslation } from "next-i18next";
import { About } from "./about";
import { useMediaQuery } from "react-responsive";

export const DrawerSlide = observer((props) => {
  const { menu, isOpen, onClickContact, onClose, clicked } = props;
  const [positionLeft, setPositionLeft] = useState(true);
  const [showProduct, setShowProduct] = useState(false);
  const [showUseCase, setShowUseCase] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [indexProduct, setIndexProduct] = useState();
  const { t } = useTranslation();
  const laptop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    if (!isOpen) {
      setShowProduct(false);
      setShowUseCase(false);
      setShowAbout(false);
    }
  }, [isOpen]);

  const products = [
    {
      image: "logo-trust-verify.png",
      name: "Verify",
      productIndex: 0,
    },
    {
      image: "logo-trust-scan.png",
      name: "Scan",
      productIndex: 1,
    },
    {
      image: "logo-trust-live.png",
      name: "Live",
      productIndex: 2,
    },
    {
      image: "logo-trust-connect.png",
      name: "Connect",
      productIndex: 3,
    },
    {
      image: "incode-crop.png",
      name: "incode",
      productIndex: 3,
    },
  ];
  const socialMedia = [
    {
      key: "ig",
      title: "Instagram",
      url: "https://www.instagram.com/withtrustlink/",
    },
    {
      key: "twt",
      title: "Twitter",
      url: "https://twitter.com/withtrustlink",
    },
    {
      key: "fb",
      title: "Facebook",
      url: "https://www.facebook.com/withtrustlink",
    },
    {
      key: "in",
      title: "LinkedIn",
      url: "https://www.linkedin.com/company/withtrustlink/",
    },
  ];

  const goToContact = () => {
    props.setOpen(false);
    onClickContact();
  };

  const onMenuClick = (name) => {
    if (name === t("Products")) {
      setShowProduct(true);
    } else if (name === t("Use Cases")) {
      setShowUseCase(true);
    } else if (name === t("About Us.")) {
      setShowAbout(true);
    } else if (name === t("Contact Us")) {
      goToContact();
    }
  };

  const dropdownProduct = (
    <div className="bg-transparent block">
      <div className="flex flex-col text-base no-underline font-medium">
        {products.map((item, index) => {
          return <a key={index} className="text-grey relative block" href="#">{`Trust${item.name}`}</a>;
        })}
      </div>
    </div>
  );

  const newProduct = ["Products"].map((value, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      label: `Products`,
      bodyStyle: { padding: "20px" },
      children: products.map((v, index) => {
        return {
          icon: (
            v.name !== 'incode' ? (
                <div
                key={index}
                onClick={() => {
                  props.clicked(v.productIndex);
                }}
                className="rounded-full w-9 h-9 bg-white flex justify-center items-center bottom-2 py-3 border-2 border-[#FF6703]"
              >
                <Image className={`trustlink-product-${index+1}`} style={{width: 14, height: 14}} preview={false} src={`/assets/images/${v.image}`} />
              </div>
            ) : (
                <div className={'w-9 h-9'} />
            )
          ),
          label: (
              v.name === 'incode' ? (
                    <div onClick={() => window.open('https://incode.com/products/incode-omni/', "_blank")}>
                      <Image alt={`trustlink-incode`} preview={false} src={`/assets/images/${v.image}`} className={'w-24'} />
                    </div>
                  ) : (
                    <span
                        onClick={() => {
                          clicked(v.productIndex);
                        }}
                    >
                      Trust{v.name}
                    </span>
                  )
          ),
        };
      }),
    };
  });
  return (
    <Modal
      title={null}
      // wrapClassName={'modal-full'}
      closable={false}
      visible={isOpen}
      footer={null}
      width={"100%"}
      wrapClassName={"bg-menu"}
      className={"relative top-0 h-full w-full p-0 m-0 custom-modal"}
      maskClosable={false}
      bodyStyle={{ padding: 0, height: "100%", width: "100%" }}
    >
      <div className={"w-full h-full flex flex-col md:flex-row"}>
        <Fade when={!showUseCase || !showAbout} duration={500}>
          <div className={`ml-16 sm:ml-20 px-0 w-auto md:w-[40%] h-full flex items-center ${showProduct || showUseCase || showAbout ? "hidden" : ""}`}>
            <div className={"flex flex-col py-11 px-2 sm:px-4 lg:px-18 lg:p-11 w-full lg:hidden"}>
              {menu.map((it, index) => (
                <>
                  {it.name == "Products" ? (
                    <Menu style={{ backgroundColor: "transparent" }} mode="inline" className="text-xl -ml-3 pb-5 decoration md:text-2xl font-bold montserrat text-[#04204D]" items={newProduct} />
                  ) : (
                    <Button
                      type="link"
                      className={"flex flex-row w-full h-8 justify-between items-center mb-7"}
                      ghost
                      key={index}
                      onClick={() => {
                        props.setOpen(false);
                        it.onClicked();
                      }}
                    >
                      <h1 className={"text-xl md:text-2xl font-bold mb-0 montserrat"} style={{ color: "#04204D" }}>
                        {it.name}
                      </h1>
                      {/* <RightOutlined className={'text-lg opacity-50'} style={{color: '#04204D'}} /> */}
                    </Button>
                  )}
                </>
              ))}
            </div>
          </div>
        </Fade>
        <Fade right when={showProduct} duration={500}>
          <div className={`w-full lg:overflow-x-hidden md:w-[65%] h-auto md:h-full m-0 ${!showProduct ? "hidden" : null}`}>
            <Product show={showProduct} setShow={setShowProduct} />
          </div>
        </Fade>
        <Fade right when={showUseCase} duration={500}>
          <div className={`w-full lg:overflow-x-hidden md:w-[65%] h-auto md:h-full m-0 ${!showUseCase ? "hidden" : null}`}>
            <UseCases show={showUseCase} setShow={setShowUseCase} />
          </div>
        </Fade>
        <Fade right when={showAbout} duration={500}>
          <div className={`w-full lg:overflow-x-hidden md:w-[65%] h-auto md:h-full m-0 ${!showAbout ? "hidden" : null}`}>
            <About show={showAbout} setShow={setShowAbout} />
          </div>
        </Fade>
        <div
          className={`${showProduct || showUseCase ? "w-auto md:w-[35%] md:fixed md:right-0 lg:py-8" : "w-auto md:w-[60%] md:pl-14"} md:overflow-y-auto lg:overflow-y-hidden md:py-16 pl-6 ml-16 sm:ml-20 md:ml-0 bg-[#1D365F] h-max lg:h-auto`}
          style={{ transition: "width 500ms" }}
        >
          <div className={"flex flex-col w-full h-full justify-between"}>
            <div className={`flex flex-col lg:${showProduct || showUseCase ? "flex-col lg:pt-0" : "flex-row justify-between"} pt-10 md:pt-0 xl:pt-0 h-full`} style={{ transition: "width 300ms ease-in-out" }}>
              <div className={`flex flex-col`}>
                <div className={"md:h-28 lg:h-40 flex-col text-white mb-10 md:mb-2"}>
                  <p className={"text-xs opacity-80 mb-3 montserrat"} style={{ letterSpacing: 1.8 }}>
                    {t("Call Us")}
                  </p>
                  <p className={`text-lg md:text-xl lg:text-xl xl:text-2xl mb-2 montserrat pr-3 md:pr-0`}>(021) 29602116 / 29602117</p>
                  <p className={"text-xs opacity-80 montserrat"} style={{ letterSpacing: 0.3 }}>
                    {t("Mon to Fri")} (8:30 - 20:00)
                  </p>
                </div>
                <div className={"md:h-28 lg:h-40 flex-col text-white mb-10  md:mb-2 cursor-pointer"} onClick={goToContact}>
                  <p className={"text-xs opacity-80 mb-3 montserrat"} style={{ letterSpacing: 1.8 }}>
                    EMAIL
                  </p>
                  <a className={`text-xl ${showProduct || showUseCase ? "md:text-xl" : "md:text-2xl"} mb-2 montserrat text-white`}>info@withtrustlink.com</a>
                </div>
                <div className={"lg:h-40 flex-col text-white mb-10  md:mb-2"}>
                  <p className={"text-xs opacity-80 mb-3 montserrat"} style={{ letterSpacing: 1.8 }}>
                    {t("Address")}
                  </p>
                  {/*<p className={`text-xl ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} mb-2 montserrat`}>{t('Kota Kasablanca Office 88')}</p>*/}
                  {/*<p className={'text-xs opacity-80 montserrat'} style={{letterSpacing: 0.3}}>{t('Jl. Raya Casablanca No.16, RW.5,')}<br/>{t(' Menteng Dalam, Kec. Tebet, DKI Jakarta 12870')}</p>*/}
                  <p className={`text-xl ${showProduct || showUseCase ? "md:text-xl" : "md:text-2xl"} mb-2 montserrat`}>{t("Centennial Tower Level 29 Unit F")}</p>
                  <p className={"text-xs opacity-80 montserrat"} style={{ letterSpacing: 0.3 }}>
                    {t("Jl. Jend Gatot Subroto No 27,")}
                    <br />
                    {t("Karet Semanggi, Kec. Setiabudi, Jakarta Selatan, DKI Jakarta 12930")}
                  </p>
                </div>
                {laptop ? (
                  <div className={"flex flex-row w-full justify-start"}>
                    <div className={"w-auto mt-10 xl:mt-0"}>
                      <h1 className={`text-white text-xl  ${showProduct || showUseCase ? "md:text-xl" : "md:text-2xl"} font-bold mb-3 montserrat`}>
                        {t("Advance Solutions")} <br />
                        <span className={"font-light"}>{t("For On Boarding Experience")}</span>
                        {/*<br/>{t('and Seamless Open Finance')} */}
                        {/*<br/> {t('API Infrastructure')}*/}
                      </h1>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className={"flex-col text-white mb-10  md:mb-2"}>
                <p className={"text-xs opacity-80 mb-3 montserrat w-28 lg:mr-16"} style={{ letterSpacing: 1.8 }}>
                  {t("Social Media")}
                </p>
                {socialMedia.map((data, index) => {
                  return (
                    <p key={data.key} className={`text-xl ${showProduct || showUseCase ? "md:text-xl" : "md:text-2xl"} mb-2 montserrat`}>
                      <a href={data.url} target={"_blank"} rel="noopener noreferrer" className="text-white">
                        {data.title}
                      </a>
                    </p>
                  );
                })}
              </div>
            </div>
            {laptop ? null : (
              <div className={"flex flex-row w-full justify-start"}>
                <div className={"w-full md:w-auto mb-12 md:mb-0 md:mt-20 lg:mt-10"}>
                  <h1 className={`text-white text-xl  ${showProduct || showUseCase ? "md:text-xl" : "md:text-2xl"} font-bold mb-3 montserrat`}>
                    {t("Advance Solutions")} <br />
                    <span className={"font-light"}>{t("For On Boarding Experience")}</span>
                    {/*<br/>{t('and Seamless Open Finance')} */}
                    {/*<br/> {t('API Infrastructure')}*/}
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
});
