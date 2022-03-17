import React from "react";
import { Image } from "antd";

export const CertificationMembership = () => {
    return (
        <>
        <div className={'flex w-full justify-center'}>
                <div className={'flex flex-row items-center'}>
                    <div className={'w-8 h-px'} style={{backgroundColor: 'rgba(129, 143, 166, 0.5)'}}/>
                    <p className={'text-sm mx-6'} style={{color: '#818FA6'}}>
                    REGISTERED AND SUPERVISED BY
                    </p>
                    <div className={'w-8 h-px'} style={{backgroundColor: 'rgba(129, 143, 166, 0.5)'}}/>
                </div>
            </div>
            <div className={'flex justify-center'}>
                <div>
                    <p style={{color: '#161D24'}} className={'text-7xl font-bold text-center mb-0'}>
                    World-Class
                    </p>
                    <p className={'text-5xl text-center mt-2'} style={{color: '#161D24'}}>
                    Certification & Membership
                    </p>
                </div>
            </div>
            <div className={'grid grid-cols-2 sm:grid-cols-4 mt-5'} style={{ justifyContent: 'space-between' }}>
                <Image preview={false} className="w-20 xshort:w-32 company-logo logo-image-gray mt-10 sm:mt-0" src={'/assets/aftech.png'} />
                <Image preview={false} className="w-16 xshort:w-26 company-logo logo-image-gray" src={'/assets/dukcapil.svg'} />
                <Image preview={false} className="w-30 xshort:w-40 company-logo logo-image-gray" src={'/assets/keminfo.png'} />
                <Image preview={false} className="w-16 xshort:w-28 company-logo logo-image-gray mt-10 sm:mt-0" src={'/assets/iso.png'} />
            </div>
        </>
    )
}