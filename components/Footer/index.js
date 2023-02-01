import { Image } from "antd";
import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { MapAddress } from "../MapAddress";
import {Row, Col} from "antd"
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
    <div className="pt-10 pb-5 bg-[#04204D] mx-auto">
        <div className="leading-normal text-justify">
          <Row justify="center" gutter={16}>
            <Col xl={{span:4, offset:1}}  md={{span:8, offset:2}} sm={{span:10}} xs={{span:11}}>
              <div className="w-full">
                <h1 className="text-base font-semibold text-white">
                  Centennial Tower Level 29 Unit F
                </h1>
                <p className="text-white text-ellipsis">
                  Jl. Jend Gatot Subroto No 27,
                </p>
                <p className="text-white">Karet Semanggi, Kec. Setiabudi,</p>
                <p className="text-white">Jakarta Selatan, DKI Jakarta 12930</p>
              </div>
            </Col>
            <Col xl={{span:4, offset:1}}  md={{span:6,offset:1}} sm={{span:10}} xs={{span:11}}>
              <div className="w-full">
                <h1 className="text-base font-semibold text-white">
                  Call us
                </h1>
                <p className="text-white">
                  (021) 29602116 / 29602117
                </p>
                <p className="text-white">Mon - Fri (8.30 - 20.00)</p>
              </div>
            </Col>
            <Col xl={{span:4, offset:1}}  md={{span:7,}} sm={{span:10}} xs={{span:11}}>
              <div className="w-full">
                <h1 className="text-base font-semibold text-white">
                  Email
                </h1>
                <p className="text-white">info@withtrustlink.com</p>
              </div>
            </Col>
            <Col xl={{span:4, offset:1}}  md={{span:10, offset:5}} sm={{span:10}} xs={{span:11}}>
              <div className="w-full">
                <div className="mt-6 mb-6 lg:mb-0">
                  <button
                    className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none"
                    type="button"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none"
                    type="button"
                  >
                    <i className="fab fa-facebook-square" />
                  </button>
                  <button
                    className="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                    type="button"
                  >
                    <i className="fab fa-dribbble" />
                  </button>
                  <button
                    className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none"
                    type="button"
                  >
                    <i className="fab fa-github" />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <hr className="w-3/4 mx-auto my-6 border-white opacity-10" />
          <Row justify="center">
              <Col span={24}>
                <div className="flex flex-wrap items-center justify-center py-4 md:justify-between">
                  <div className="w-full mx-auto text-center md:w-4/12">
                    <div className="py-1 text-sm font-normal text-white">
                      Copyright ©{" "}
                      <span id="get-current-year">
                        2022 TrustLink, all Rights Reserved.
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
        </div>
      </div>
  );
};

export default Footer;
