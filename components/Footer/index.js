import { Image } from "antd";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { MapAddress } from "../MapAddress";
import { FacebookFilled, InstagramFilled, InstagramOutlined, LinkedinFilled, TwitterCircleFilled } from "@ant-design/icons";
import {useRouter} from "next/router";

const Footer = ({ onClickTop = () => {} }) => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const socmed = [
    {
      name: "Instagram",
      icon: <InstagramFilled className={"mx-auto"} width={100} />,
      url: "https://www.instagram.com/withtrustlink/",
    },
    {
      name: "Twitter",
      icon: <TwitterCircleFilled className={"mx-auto"} width={100} />,
      url: "https://twitter.com/withtrustlink",
    },
    {
      name: "Facebook",
      icon: <FacebookFilled className={"mx-auto"} width={100} />,
      url: "https://www.facebook.com/withtrustlink",
    },
    {
      name: " LinkedIn",
      icon: <LinkedinFilled className={"mx-auto"} width={100} />,
      url: "https://www.linkedin.com/company/withtrustlink/",
    },
  ];
  return (
    <div className={"relative"}>
      <div className="relative h-auto w-full text-white py-4 pr-6 md:pr-6 lg:pr-16 text-2xl bg-footer  pl-6 z-10">
        <div className={"absolute bottom-2 md:bottom-0 left-0 z-0 w-full lg:w-[50vw]"}>
          <div className={'absolute bottom-0 w-full py-4 pl-6 lg:pl-10 text-base montserrat tracking-wide md:text-left text-[#EAEDF1]'}>
            <div className={"w-full md:w-1/2 text-base montserrat text-[#EAEDF1] my-4 md:my-0"}>2022 &copy; {t("Copyright")}</div>
          </div>
          <Image preview={false} src={"/assets/images/accent-footer-left.png"} alt={"Trustlink Background Footer Left"} />
        </div>
        <div className={"w-full grid grid-cols-12 gap-2"}>
          <div className={"col-span-9 lg:col-span-6 xl:col-span-6"}>
            <Image className="w-3/5 md:w-1/2" src="/assets/logo/logo-for-dark-background-rt.png" preview={false} alt={"Trustlink Master Logo"} />
          </div>
        </div>
        <div className={"flex flex-col lg:flex-row relative z-10"}>
          <div className={"w-full lg:w-2/3 xl:w-2/3 ml-0 lg:ml-4 mt-4 md:mt-6 lg:mt-12 font-light flex flex-wrap justify-between "}>
            <div className={"w-full md:w-1/2 lg:w-1/2 flex md:justify-start lg:justify-start sm:mt-8 md:mt-0 "}>
              <div className={"w-full md:w-9/12 lg:w-auto "}>
                <h6 className={"text-white text-base montserrat opacity-80"} style={{fontWeight:400}}>{t("Address")}</h6>
                {/*<p className="montserrat text-lg md:text-2xl tracking-normal mt-5 md:mt-7 lg:mt-10 mb-2">{t('Kota Kasablanca Office 88')}</p>*/}
                {/*<p className="text-base montserrat opacity-80">{t('Jl. Raya Casablanca No.16, RW.5,')}<br/>{t(' Menteng Dalam, Kec. Tebet, DKI Jakarta 12870')}</p>*/}
                <p className="montserrat text-lg md:text-[1.4rem] 2xl:text-2xl tracking-normal mb-2">{t("Centennial Tower Level 29 Unit F")}</p>
                <p className="text-base montserrat opacity-80">
                  {t("Jl. Jend Gatot Subroto No 27,")}
                  <br />
                  {t("Karet Semanggi, Kec. Setiabudi, Jakarta Selatan, DKI Jakarta 12930")}
                </p>
              </div>
            </div>
            <div className={"w-full md:w-1/2 lg:w-1/2 flex md:justify-start my-6 md:my-0 lg:pl-5"}>
              <div className={"w-full md:w-9/12 lg:w-auto"}>
                <h6 className={"text-white text-base montserrat opacity-80"} style={{fontWeight:400}}>EMAIL</h6>
                <a className="montserrat text-lg md:text-2xl tracking-normal mt-5 md:mt-7 lg:mt-10 text-none no-underline text-white">info@withtrustlink.com</a>
              </div>
            </div>
            <div className={"w-full md:w-1/2 lg:w-1/2 flex md:justify-start"}>
              <div className={"w-full md:w-9/12 lg:w-auto "}>
                <h6 className={"text-white text-base montserrat opacity-80"} style={{fontWeight:400}}>{t("Call Us")}</h6>
                <p className="montserrat text-lg lg:text-lg xl:text-[1.4rem] tracking-normal mt-5 md:mt-4 lg:mt-0 mb-3">(021) 29602116 / 29602117</p>
                <p className="text-base montserrat opacity-80">{t("Mon to Fri")} (8.30 - 20.00)</p>
              </div>
            </div>
            <div className={"w-full md:w-1/2 lg:w-1/2 flex justify-center md:justify-start lg:pl-5"}>
              <div className={"w-full md:w-9/12 lg:w-auto"}>
                <h6 className={"text-white text-base montserrat opacity-80"} style={{fontWeight:400}}>{t("Social Media")}</h6>
                <div className="flex flex-row gap-4">
                  {socmed.map((items, index) => (
                    <a key={index} href={items.url} target="_blank" rel="noopener noreferrer">
                      <div className={"rounded-full flex  items-center w-12 h-12 bg-white text-[#04204D]"}>{items.icon}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className={'md:w-1/2 lg:w-0'}/> */}
          </div>
          <div className={"w-full lg:w-1/3 xl:w-1/3 mt-4 md:mt-6 lg:mt-12 font-light flex flex-wrap justify-between"}>
            <div className={"w-full flex md:justify-start z-[60]"}>
              <div className={"w-full "}>
                <h6 className={"text-base montserrat opacity-80 text-white"} style={{fontWeight:400}}>{t("Address")}</h6>
                <MapAddress className={"w-full h-[40vh]"} />
              </div>
            </div>
          </div>
        </div>
        <div className={'mt-16'} />
      </div>

      <div className={"absolute bottom-0 right-0 z-20 w-full md:w-auto"}>
        <div className={'absolute -bottom-2 md:bottom-0 w-full py-4 pl-6 pr-6 md:pr-6 lg:pr-16 text-base montserrat tracking-wide md:text-right text-[#EAEDF1]'}>
          <div className={'relative cursor-pointer z-20'} onClick={()=>{
            router.push('/privacy_policy')
          }}>{t("Privacy Policy")}</div>
        </div>
        <Image className={'relative z-10'} preview={false} src={"/assets/images/accent-footer-right.png"} alt={"Trustlink Background Footer Right"} />
      </div>
    </div>
  );
};

export default Footer;
