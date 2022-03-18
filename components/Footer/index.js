import { Image } from "antd";
import React from "react";

const Footer = () => {
    return (
        <>
            <div className="h-sixth md:h-half lg:h-three-q text-white py-4 px-8 md:px-18 lg:px-32 w-full max-w-screen text-2xl bg-footer">
                <div className={"w-full grid grid-cols-12 gap-2"}>
                    <div className={'col-span-9 lg:col-span-6 xl:col-span-6'}>
                        <Image className="w-4/5 md:w-3/5 lg:w-4/5" src="/assets/logo/logo-for-dark-background-rt.png" preview={false} />
                    </div>
                    <div className={'col-span-3 text-right text-lg lg:text-2xl mt-6 lg:mt-12 lg:col-span-6 xl:col-span-6 text-[#71757C]'}>
                        <p><span className="text-orange">EN</span> <span className="text-[#7C7D7F66]">|</span> ID</p>
                    </div>
                </div>
                <div className={"w-full mt-4 md:mt-6 lg:mt-12 grid grid-cols-12 font-light  tracking-widest text-sm md:text-base lg:text-lg justify-items-center"}>
                    <div className={'col-span-6 ml-4 md:col-span-4 lg:col-span-4 xl:col-span-4'}>
                        CALL US
                        <p className="mt-5 md:mt-7 lg:mt-10 tracking-normal text-lg md:text-2xl lg:text-3xl xl:text-4xl font-normal m-0 p-0 ">0628 671 8889</p>
                        <p className="text-base mt-3">Mon - Fri (8.30 - 17.30)</p>
                    </div>
                    <div className={'col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4'}>
                        EMAIL
                        <p className="mt-5 md:mt-7 lg:mt-10 tracking-normal text-lg md:text-2xl lg:text-3xl xl:text-4xl font-normal">hello@cdi.co.id</p>
                    </div>
                    <div className={'col-span-12 px-4 text-right md:text-left w-full md:col-span-4 lg:ml-8 lg:col-span-3 xl:col-span-4'}>
                        COMPANY
                        <p className="mt-5 md:mt-7 lg:mt-10 tracking-normal text-lg md:text-2xl lg:text-3xl xl:text-4xl font-normal m-0 p-0">Partners</p>
                        <p className="mt-1 lg:mt-3 tracking-normal text-lg md:text-2xl lg:text-3xl xl:text-4xl font-normal m-0 p-0">Carrer</p>
                    </div>
                </div>
                <div className={"w-110 mt-4 md:mt-10 lg:mt-30 text-xs md:text-base lg:text-lg relative grid grid-cols-12 gap-2 bottom-0"}>
                    <div className={'col-span-6 lg:col-span-4 xl:col-span-2'}>
                        2022 &copy; All right reserved
                    </div>
                    <div className={'hidden lg:grid lg:col-span-3 xl:col-span-7'}>
                        {/* <hr className="mt-3" /> */}
                    </div>
                    <div className={'col-span-6 lg:col-span-5 xl:col-span-3'}>
                        Privacy Policy * Term &#38; Condition
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;