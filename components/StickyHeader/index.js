import { Dropdown, Image, Menu, Space } from "antd";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { DrawerSlide } from "../DrawerSlide";
import { startCase } from "lodash";
import { CaretDownOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
const emptyFunction = () => {};

const StickyHeader = (props) => {
  const {
    changeMenuOpen,
    isMenuOpen,
    onClickProduct = emptyFunction,
    onClickClients = emptyFunction,
    onClickContactUs = emptyFunction,
    onClickUseCases = emptyFunction,
    onClickAboutUs = emptyFunction,
    onClickTopPage = emptyFunction,
  } = props;
  const { t, i18n } = useTranslation("common");
  const [header, setHeader] = useState("header");
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  const [isRotate, setIsRotate] = useState(false);
  const genericHamburgerLine = `h-1 my-1 rounded-full bg-[#04204D] transition ease transform duration-300`;
  const genericHamburgerLine2 = `h-1 w-full my-1 rounded-full bg-[#04204D] transition ease transform duration-300`;
  const mobile = useMediaQuery({ query: "(max-width: 576px)" });
  const tablet = useMediaQuery({ query: "(max-width: 980px)" });
  const [windows, setWindows] = useState();
  const [indexProduct, setIndexProduct] = useState();

  useEffect(() => {
    if (window) {
      setWindows(window);
    }
  }, []);
  const menu = [
    {
      name: t("Home"),
      onClicked: onClickTopPage,
    },
    {
      name: t("About Us."),
      onClicked: onClickAboutUs,
    },
    {
      name: t(`Products`),
      // onClicked: onClickProduct,
      key: "products",
    },
    {
      name: t("Use Case"),
      onClicked: onClickUseCases,
    },
    {
      name: t("Clients"),
      onClicked: onClickClients,
    },
    {
      name: t("Contact Us"),
      onClicked: onClickContactUs,
    },
  ];

  const subMenu = [{ name: "TrustVerify" }, { name: "TrustScan" }, { name: "TrustLive" }, { name: "TrustConnect" }, { name: "TrustVision" }];

  useEffect(() => {
    setIsOpen(isMenuOpen);
  }, [isMenuOpen]);

  const listenScrollEvent = (_event) => {
    if (window.scrollY < 73) {
      return setHeader("ease-in duration-200 ");
    } else if (window.scrollY > 70) {
      return setHeader("bg-white ease-in duration-200 drop-shadow-lg");
    }
  };

  const itemProduct = (index) => {
    setIndexProduct(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

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
      image: "logo-trust-vision.png",
      name: "Vision",
      productIndex: 4,
    },
  ];

  const dropdownOverlay = (
    <div className="bg-white drop-shadow-lg">
      <div className="w-11/12 lg:w-11/12 xl:w-10/12 2xl:w-10/12 py-11 mx-auto space-x-3 flex justify-center">
        <div className="w-3/12 flex flex-col space-y-4 pr-10">
          <div className="font-bold text-3xl">Products</div>
          <div className="text-lg text-grey">Our comprehensive solutions will enable your business to make faster and accurate decisions</div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-2 gap-3">
          {products.map((items) => {
            return (
              <div className="flex items-center space-x-2 xl:space-x-3">
                <div className="w-20 h-20 2xl:w-20 2xl:h-20 bg-[#fff0e6] border-[2px] xl:border-3 border-[#FF6703] rounded-full p-3.5">
                  <Image preview={false} src={`/assets/images/${items.image}`} alt={`Trustlink Trust ${items.name}`} className={"p-2"} width={"20"} height={"20"} />
                </div>
                <div
                  className="font-semibold text-lg cursor-pointer"
                  onClick={() => {
                    itemProduct(items.productIndex);
                  }}
                >
                  Trust<span className="text-orange">{items.name}</span> <RightOutlined className={"ml-2"} />
                </div>
              </div>
            );
          })}
        </div>
        {/*<div className="w-3/12 flex flex-col space-y-4">*/}
        {/*  {products3.map((items, index) => {*/}
        {/*    return (*/}
        {/*      <div key={index} className="flex space-x-4 items-center">*/}
        {/*        <div className="w-20 h-20 2xl:w-20 2xl:h-20 flex justify-center items-center bg-[#fff0e6] border-[2px] xl:border-3 border-[#FF6703] rounded-full p-3.5 relative -ml-4">*/}
        {/*          <Image preview={false} src={`/assets/images/${items.image}`} alt={`Trustlink Trust ${items.name}`} className={"p-2"} width={"20"} height={"20"} />*/}
        {/*        </div>*/}
        {/*        <div className="font-semibold flex items-center text-lg cursor-pointer">*/}
        {/*          Trust<span className="text-orange">{items.name}</span> <RightOutlined className={"ml-2"} />*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</div>*/}
      </div>
    </div>
  );
  return (
    <div className={`z-[60] w-full sticky top-0 ${header} overflow-x-hidden`}>
      <div className={" w-full top-0 flex flex-row"} style={{ justifyContent: "space-between" }}>
        <div className={"flex items-center md:ml-12"}>
          <Image preview={false} className={"cursor-pointer relative w-14 md:w-20 top-0"} alt={"Trustlink Icon"} src={"/assets/logo/icon-only.png"} style={{ zIndex: 10000 }} />
          <Image preview={false} className={"relative h-14 md:h-20 w-auto"} src={"/assets/logo/text-only.png"} alt={"Trustlink Text"} />
        </div>
        {/* {windows?.scrollY > 70 &&
                    <div className={'relative  bg-red-300'}>
                        <Image preview={false} className=" w-[500px] " src={'/assets/header-plexus.png'} />
                         <p>dsad</p>
                    </div>
                } */}
        <div className={"choose-lang flex flex-row  mr-5 md:mr-10  xl:mr-12 z-30"}>
          <DrawerSlide menu={menu} setOpen={changeMenuOpen} onClickContact={onClickContactUs} isOpen={isOpen} />
          {tablet
            ? ""
            : menu.map((items, _props) => (
                <div key={_props} className={"flex items-center mx-2 xl:mx-4 2xl:mx-6 cursor-pointer"} onClick={items.onClicked}>
                  <p className={"mb-0 text-center flex items-center "}>
                    {items.key == "products" ? null : items.name}{" "}
                    {items.key == "products" ? (
                      <Dropdown onClick={() => setIsRotate(!isRotate)} overlayClassName="w-full" overlay={dropdownOverlay} trigger={["click"]}>
                        <Space className="flex items-center">
                          Products
                          <DownOutlined
                            className={`
                          ${isRotate ? "rotate-180" : "rotate-0"}
                          transition duration-100`}
                          />
                        </Space>
                      </Dropdown>
                    ) : (
                      ""
                    )}{" "}
                  </p>
                </div>
              ))}
          <div className={"flex items-center justify-center"}>
            {/*<div className={"choose-lang flex flex-row"}>*/}
            {/*  <Link href={"/"} locale="en">*/}
            {/*    <p className={`cursor-pointer font-medium mb-0 ${i18n.language === "en" && "text-[#FE7519]"}`}>EN</p>*/}
            {/*  </Link>*/}
            {/*  <div className={"w-px h-5 mt-1 mx-2"} style={{ backgroundColor: "#818FA6" }} />*/}
            {/*  <Link href={"/"} locale="id">*/}
            {/*    <p className={`cursor-pointer font-medium mb-0 ${i18n.language === "id" && "text-[#FE7519]"}`}>ID</p>*/}
            {/*  </Link>*/}
            {/*</div>*/}
          </div>
          <div className={"w-20 sm:w-20 h-20 transparent p-5 "} style={{ zIndex: 10000 }}>
            <button
              className={"flex flex-col w-full h-full justify-center group"}
              style={{ zIndex: 10000 }}
              onClick={() => {
                changeMenuOpen(!isOpen);
              }}
            >
              <div className={`${genericHamburgerLine} self-start ${isOpen ? "w-full rotate-45 translate-y-3 opacity-0" : "w-6 sm:w-8 lg:w-4 opacity-100 z[60]"}`} />
              <div className={`${genericHamburgerLine2} ${isOpen ? "opacity-0" : "opacity-100 z[60]"}`} />
              <div className={`${genericHamburgerLine} self-end ${isOpen ? "w-full -rotate-45 -translate-y-3 opacity-0" : "w-6 sm:w-8 lg:w-4 opacity-100 z[60]"}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
