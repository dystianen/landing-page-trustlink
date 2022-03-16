import React from "react";
import {Image} from "antd";

const Banner = () => {

    return (
            // <div className="bg-white mt-80 lg:ml-20 h-64 flex flex-row">
            <div className="bg-white h-64 flex flex-row lg:ml-20">
                <div className="w-72 px-10 py-4 text-lg text-[#161D24] md:px-20 md:w-full md:py-4 md:text-3xl lg:px-20 lg:py-16 lg:text-3xl 2xl:text-5xl">
                    We are thrilled to advance our technology to meet the needs of our valued customers
                </div>
                <Image preview={false} className="w-96 h-full md:w-full lg:h-max" src={"/assets/banner1.png"}/>
            </div>
    )
}

export default Banner