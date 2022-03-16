import React from "react";
import { Image } from "antd";

export const CertificationMembership = () => {
    return (
        <div className={'certificate py-20'}>
            <div className={'flex flex-row items-center'} style={{ justifyContent: 'center' }}>
                <div className={'w-1/12 h-px mr-6'} style={{ backgroundColor: '#818FA6' }} />
                <p className='certificate-sub'>registered and supervised by</p>
                <div className={'w-1/12 h-px ml-6'} style={{ backgroundColor: '#818FA6' }} />
            </div>
            <p className='certificate-title'>World-Class</p>
            <p className='certificate-subtitle'>Certification & Membership</p>
            <div className={'grid grid-cols-2 sm:grid-cols-4 mt-5'} style={{ justifyContent: 'space-between' }}>
                <Image preview={false} className="w-20 xshort:w-32 company-logo logo-image-gray mt-10 sm:mt-0" src={'/assets/aftech.png'} />
                <Image preview={false} className="w-16 xshort:w-26 company-logo logo-image-gray" src={'/assets/dukcapil.svg'} />
                <Image preview={false} className="w-30 xshort:w-40 company-logo logo-image-gray" src={'/assets/keminfo.png'} />
                <Image preview={false} className="w-16 xshort:w-28 company-logo logo-image-gray mt-10 sm:mt-0" src={'/assets/iso.png'} />
            </div>

        </div>
    )
}