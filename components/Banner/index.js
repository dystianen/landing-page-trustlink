import React from "react";
import {Col, Image, Row} from "antd";
const Banner = () => {
    return (
            // <div className="bg-[#FBFBFB] h-auto flex flex-row ml-20">
            //     <div className="w-72 pl-12 py-4 text-lg text-[#161D24] md:px-20 md:w-full md:py-4 md:text-3xl lg:px-20 lg:py-16 lg:text-3xl 2xl:text-5xl">
            //         We are thrilled to advance our technology to meet the needs of our valued customers
            //     </div>
            //     <Image preview={false} className="w-96 h-full md:w-full lg:h-max" src={"/assets/banner_bg.png"}/>
            // </div>

        // <Row className="ml-20 text-white h-auto bg-[#FBFBFB] text-[#161D24]">
        //     <Col span={7} order={1}>
        //       <Image preview={false} className="w-screen h-full" src={"/assets/banner_bg.svg"}/>
        //     </Col>
        //     <Col span={12} order={2}>
        //       <div className="py-4 text-sm text-[#161D24] md:px-10 md:text-lg lg:px-20 lg:text-xl 2xl:text-3xl">
        //             We are thrilled to advance our technology to meet the needs of our valued customers
        //       </div>
        //     </Col>
        //     <Col span={5} order={3}>
        //       {/*<Image preview={false} className="w-96 h-full md:w-full lg:h-max" src={"/assets/icon_trust.png"}/>*/}
        //       <Image preview={false} className="w-min h-min pt-14 xs:pt-8" src={"/assets/icon_trust.png"}/>
        //     </Col>
        // </Row>
    <Row className=" ml-20 text-white h-auto bg-[#FBFBFB] text-[#161D24]">
            <Col className="grid justify-self-center" span={12} order={1}>
                  {/*<Image preview={false} className="static w-screen h-full" src={"/assets/banner_bg.svg"}/>*/}
                  {/*<div className="bg-banner bg-no-repeat bg-cover h-auto break-words py-8 px-4 text-lg text-[#161D24] md:h-64 md:px-10 md:text-xl lg:text-2xl 2xl:text-3xl">*/}
                  <div className="bg-banner bg-no-repeat bg-cover h-auto monsterrat break-words text-lg text-[#161D24] px-8 py-12 md:h-64 md:text-xl lg:text-2xl 2xl:text-4xl">
                        We are thrilled to advance our technology to meet the needs of our valued customers
                  </div>
            </Col>
            <Col className="grid content-start mobilel:content-center mobilel:justify-items-center " span={12} order={3}>
              <Image preview={false} className="w-min h-min" src={"/assets/icon_trust.png"}/>
            </Col>
        </Row>
    )
}

export default Banner
