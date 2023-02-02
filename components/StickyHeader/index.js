import {Button, Dropdown, Image, Menu, Space, Typography, Divider} from "antd";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { DrawerSlide } from "../DrawerSlide";
import { startCase } from "lodash";
import { CaretDownOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import ProductsDropdownOverlay from "./components/DropdownProducts";
import IndustryDropdownOverlay from "./components/DropdownIndustry";
import {ParticlePage} from "../Particle";
import {useRouter} from "next/router";
const emptyFunction = () => {};
const {Text, Title} = Typography;

const StickyHeader = (props) => {
  const {router} = useRouter();
  const {
    changeMenuOpen,
    isMenuOpen,
    onClickProduct = emptyFunction,
    onClickClients = emptyFunction,
    onClickContactUs = emptyFunction,
    onClickUseCases = emptyFunction,
    onClickAboutUs = emptyFunction,
    onClickTopPage = emptyFunction,
    frontPage
  } = props;
  const { t, i18n } = useTranslation("common");
  const [header, setHeader] = useState("header");
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  const [isRotate, setIsRotate] = useState({
    products: {rotate: false},
    industry: {rotate: false},
    legal: {rotate: false},
  });
  const genericHamburgerLine = `h-1 my-1 rounded-full bg-[#04204D] transition ease transform duration-300`;
  const genericHamburgerLine2 = `h-1 w-full my-1 rounded-full bg-[#04204D] transition ease transform duration-300`;
  const mobile = useMediaQuery({ query: "(max-width: 576px)" });
  const tablet = useMediaQuery({ query: "(max-width: 980px)" });
  const [windows, setWindows] = useState();
  const [indexProduct, setIndexProduct] = useState();
  const [lang, setLang] = useState("Eng");
  const [menuProfile, setMenuProfile] = useState(1);

  useEffect(() => {
    if (window) {
      setWindows(window);
    }
  }, []);

  useEffect(() => {
    setMenuProfile(1);
  }, [isRotate])

  const menu = [
    // {
    //   name: t("Home"),
    //   onClicked: onClickTopPage,
    //   key: 'home',
    // },
    {
      name: t("About Us."),
      onClicked: onClickAboutUs,
      key: 'about_us',
    },
    {
      name: t(`Products`),
      // onClicked: onClickProduct,
      key: "products",
      dropDown: true,
    },
    {
      name: t(`Industry`),
      // onClicked: onClickProduct,
      key: "industry",
      dropDown: true,
    },
    {
      name: t(`For Developers`),
      // onClicked: onClickProduct,
      key: "for_developers",
    },
    {
      name: t(`Pricing`),
      // onClicked: onClickProduct,
      key: "pricing",
    },
    {
      name: t(`Legal`),
      // onClicked: onClickProduct,
      key: "legal",
      dropDown: true,
    },
    {
      name: t("Contact Us"),
      onClicked: onClickContactUs,
      key: 'contact_us',
    },
  ];

  const subMenu = [{ name: "TrustVerify" }, { name: "TrustScan" }, { name: "TrustLive" }, { name: "TrustConnect" }, { name: "TrustVision" }];

  useEffect(() => {
    setIsOpen(isMenuOpen);
  }, [isMenuOpen]);

  const listenScrollEvent = (_event) => {
    if (window.scrollY < 149 && frontPage) {
      return setHeader("ease-in duration-200 ");
    } else if (window.scrollY > 150 || !frontPage) {
      return setHeader("bg-banner-blue ease-in duration-200 drop-shadow-lg");
    }
  };

  const itemProduct = (index) => {
    setIndexProduct(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);




  const handleOpenDropdown = (val, name) => {
    setIsRotate({
      ...isRotate,
      [name]: {
        rotate: !isRotate[name]?.rotate
      },
    })
  }

  const getOverlays = (key) => {
    return (<>
      {key === menu[1].key ? (
          <ProductsDropdownOverlay menu={menuProfile} setMenu={n => setMenuProfile(n)} />
      ) : key === menu[2].key ? (
          <IndustryDropdownOverlay menu={menuProfile} setMenu={n => setMenuProfile(n)} />
      ) : key === menu[5].key && (
          <ProductsDropdownOverlay menu={menuProfile} setMenu={n => setMenuProfile(n)} />
      )
      }
    </>)
  }

  return (
    <div className={`z-[60] w-full ${!frontPage && 'bg-banner-blue'} absolute top-0 ${header} overflow-x-hidden`}>
      <ParticlePage
          dimention={{
            width: '100%',
            height: '100vh',
          }}
          numberValue={120}
          opacity={0.8}
          className={'home-plexus'}
      />
      <div className={" w-full top-0 flex flex-row"} style={{ justifyContent: "space-between" }}>
        <div className={"flex items-center md:ml-12 cursor-pointer"} onClick={() => onClickTopPage()}>
          <Image preview={false} className={"relative h-8 md:h-[3.375rem] w-[16.875rem]"} src={"/assets/logo/title_new2x.png"} alt={"Trustlink Title"} />
        </div>
        {/* {windows?.scrollY > 70 &&
                    <div className={'relative  bg-red-300'}>
                        <Image preview={false} className=" w-[500px] " src={'/assets/header-plexus.png'} />
                         <p>dsad</p>
                    </div>
                } */}
        <div>
          <div className={`mt-4 flex flex-row justify-end md:pr-12 xl:pr-16`}>
            <div className={"flex items-center xl:mx-6 cursor-pointer justify-end"} onClick={() => window.open('https://app.withtrustlink.com/login', "_blank")}>
              {/*<Button className={"text-white text-sm lg:text-base xl:text-lg border-[#FF6703] bg-[#FF6703] montserrat rounded-lg h-12 w-40 md:w-40"}>*/}
              {/*  <span id={'click-top-page-get-started'}>{t("Login/Sign Up")}</span>*/}
              {/*</Button>*/}
              <div className={"flex flex-row items-center text-white text-sm border-[#FF6703] poppins font-bold rounded-lg h-12"}>
                Login
              </div>
            </div>
            <div className={`flex flex-row items-center text-sm poppins xl:mx-6`}>
              <Text className={`cursor-pointer text-white ${lang === "Eng" && 'font-bold'}`} onClick={() => setLang('Eng')}>Eng</Text>
              <Divider type={"vertical"} className={'bg-white h-5 mx-4'}/>
              <Text className={`cursor-pointer text-white ${lang === "Ind" && 'font-bold'}`} onClick={() => setLang('Ind')}>Ind</Text>
            </div>
            <div className={'flex items-center cursor-pointer xl:ml-6'}>
              <Image preview={false} src={`/assets/icons/noun_search.svg`} className={'h-8 w-8'}/>
            </div>
          </div>
          <div className={"choose-lang flex flex-row  mr-5 md:mr-12 xl:mr-16 z-30"}>
            <DrawerSlide clicked={onClickProduct} menu={menu} setOpen={changeMenuOpen} onClickContact={onClickContactUs} isOpen={isOpen} />
            {tablet
              ? ""
              : <>
                  {menu.map((items, _props) => (
                    <div key={_props} className={`flex items-center ${_props == menu.length - 1 ? 'ml-2 xl:ml-4 2xl:ml-6' : 'mx-2 xl:mx-4 2xl:mx-6'} cursor-pointer`} onClick={items.onClicked}>
                      <p className={"mb-0 text-center flex items-center poppins font-normal text-[16px] text-white"} id={`click-header-${items.key}`}>

                        {items.dropDown ? (
                          <Dropdown open={isRotate[items.key].rotate} onOpenChange={(val) => handleOpenDropdown(val, items.key)} overlayClassName={`w-full flex justify-center ${!isRotate[items.key].rotate && 'invisible'}`} overlay={() => getOverlays(items.key)}>
                            <Space>
                              {items.name}
                              <DownOutlined className={isRotate[items.key]?.rotate && "rotate-180 transition duration-100"} />
                            </Space>
                          </Dropdown>
                        ) : (
                          items.name
                        )}{" "}
                      </p>
                    </div>
                    ))}
                  </>
            }
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
            {/*<div className={"w-20 sm:w-20 h-20 transparent p-5 "} style={{ zIndex: 10000 }}>*/}
            {/*  <button*/}
            {/*    className={"flex flex-col w-full h-full justify-center group"}*/}
            {/*    style={{ zIndex: 10000 }}*/}
            {/*    onClick={() => {*/}
            {/*      changeMenuOpen(!isOpen);*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <div className={`${genericHamburgerLine} self-start ${isOpen ? "w-full rotate-45 translate-y-3 opacity-0" : "w-6 sm:w-8 lg:w-4 opacity-100 z[60]"}`} />*/}
            {/*    <div className={`${genericHamburgerLine2} ${isOpen ? "opacity-0" : "opacity-100 z[60]"}`} />*/}
            {/*    <div className={`${genericHamburgerLine} self-end ${isOpen ? "w-full -rotate-45 -translate-y-3 opacity-0" : "w-6 sm:w-8 lg:w-4 opacity-100 z[60]"}`} />*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
