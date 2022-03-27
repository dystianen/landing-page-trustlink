import React from "react";
import { Image } from "antd";

export const CertificationMembership = () => {
    return (
        <div>
            <div className={'flex w-full justify-center'}>
                <div className={'flex flex-row items-center z-10'}>
                    <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                    <p className={'text-sm mx-2 sm:mx-6 text-[#818FA6] montserrat mb-0 text-center'}>REGISTERED AND SUPERVISED BY</p>
                    <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                </div>
            </div>
            <div className={'flex justify-center montserrat mt-4'}>
                <div className={'z-10'}>
                    <p className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-0 text-[#161D24]'}>World-Class</p>
                    <p className={'text-[26px] sm:text-3xl md:text-4xl lg:text-5xl text-center mt-4 text-[#161D24]'}>Certification & Membership</p>
                </div>
            </div>
            <div className={'w-full sm:mt-5 flex justify-center items-center'}>
                <div className={'md:w-[90%] lg:w-5/6 h-full grid grid-cols-2 sm:grid-cols-4'}>
                    <Image preview={false} className="h-3/5 w-auto company-logo logo-image-gray" src={'/assets/aftech-2.png'} />
                    <Image preview={false} className="h-3/5 w-auto company-logo logo-image-gray" src={'/assets/images/logo-iso-2.png'} />
                    <Image preview={false} className="h-1/2 w-auto company-logo logo-image-gray" src={'/assets/keminfo.png'} />
                    <Image preview={false} className="h-1/2 w-auto company-logo logo-image-gray" src={'/assets/images/logo-aitb-2.png'} />
                </div>
            </div>
        </div>
    )
}