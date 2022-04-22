import React from "react";
import {Image} from "antd";
import {useTranslation} from "next-i18next";
const Banner = () => {
    const { t } = useTranslation('common');
    return (
        <div className={'h-auto w-full pl-12 md:pl-20'}>
            <div className="relative text-white h-[400px] sm:h-[350px] w-full bg-white">
                <div className="absolute left-0 top-0 w-full h-full about-img">
                    <Image preview={false} className="w-full h-full xshort:h-[105%] invert-[.1] z-0" src={"/assets/images/accent-master-logo-3-crop.png"}/>
                </div>
                <div className={'flex flex-col md:flex-row w-full h-full'}>
                    <div className="w-full md:w-3/5 h-full flex justify-center items-center z-10">
                        <div className={'md:w-[80%] lg:w-3/4'}>
                            <p className="montserrat text-[#161D24] text-xl sm:text-2xl lg:text-3xl xl:text-[24px] font-medium mb-0 text-center md:text-left">
                                <span className={'xl:text-[26px] font-bold'}>{t('BannerText1')}</span><br/>{t('BannerText2')}
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 h-full flex justify-center items-center z-10">
                        <Image preview={false} className={'h-[130px] w-auto'} src={"/assets/logo/logo-for-light-background.png"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
