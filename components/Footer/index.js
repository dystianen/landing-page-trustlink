import { Image } from "antd";
import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="h-three-q text-white py-4 px-32 w-full max-w-screen text-2xl bg-footer">
                <div className={"w-full grid grid-cols-12 gap-2"}>
                    <div className={'col-span-6 lg:col-span-6 xl:col-span-6'}>
                        <Image className="w-4/5" src="/assets/logo/logo-for-dark-background-rt.png" preview={false} />
                    </div>
                    <div className={'col-span-6 text-right text-2xl mt-12 lg:col-span-6 xl:col-span-6 text-[#71757C]'}>
                        <p><span className="text-orange">EN</span> <span className="text-[#7C7D7F66]">|</span> ID</p>
                    </div>
                </div>
                <div className={"w-full mt-12 grid grid-cols-12 font-light  tracking-widest text-lg justify-items-center"}>
                    <div className={'col-span-4 lg:col-span-4 xl:col-span-4'}>
                        CALL US
                        <p className="mt-10 tracking-normal text-4xl font-normal m-0 p-0 ">0628 671 8889</p>
                        <p className="text-base mt-3">Mon - Fri (8.30 - 17.30)</p>
                    </div>
                    <div className={'col-span-4 lg:col-span-4 xl:col-span-4'}>
                        EMAIL
                        <p className="mt-10 tracking-normal text-4xl font-normal">hello@cdi.co.id</p>
                    </div>
                    <div className={'col-span-4 lg:col-span-4 xl:col-span-4'}>
                        COMPANY
                        <p className="mt-10 tracking-normal text-4xl font-normal m-0 p-0">Partners</p>
                        <p className="mt-3 tracking-normal text-4xl font-normal m-0 p-0">Carrer</p>
                    </div>
                </div>
                <div className={"w-full relative grid grid-cols-12 gap-2 bottom-0"}>
                    <div className={'col-span-3 lg:col-span-3 xl:col-span-3'}>
                        2022 &copy; All right reserved
                    </div>
                    <div className={'col-span-5 lg:col-span-5 xl:col-span-5'}>
                    </div>
                    <div className={'col-span-4 lg:col-span-4 xl:col-span-4'}>
                        Privacy Policy * Term &#38; Condition
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;