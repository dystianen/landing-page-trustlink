import React from "react";
import {Image} from "antd";
const Banner = () => {
    return (
        <div className={'h-auto w-full pl-12 md:pl-20'}>
            <div className="relative text-white h-[400px] sm:h-[450px] w-full bg-white">
                <div className="absolute left-0 top-0 w-full h-full about-img">
                    <Image preview={false} className="relative w-full h-[105%] invert-[.1] z-0" src={"/assets/images/accent-master-logo-3-crop.png"}/>
                </div>
                <div className={'flex flex-col md:flex-row w-full h-full'}>
                    <div className="w-full md:w-3/5 h-full flex justify-center items-center z-10">
                        <div className={'md:w-[80%] lg:w-auto'}>
                            <p className="montserrat text-[#161D24] text-xl sm:text-2xl lg:text-3xl xl:text-[32px] font-medium mb-0 text-center md:text-left">
                                We are thrilled to advance <br/>our technology to meet<br/> the needs of our valued customers
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 h-full flex justify-center items-center z-10">
                        <Image preview={false} className={'h-[89px] w-auto'} src={"/assets/logo/logo-for-light-background.png"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
