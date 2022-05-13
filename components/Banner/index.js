import React from "react";
import {Image} from "antd";
import {useTranslation} from "next-i18next";
const Banner = () => {
    const { t } = useTranslation('common');
    return (
        <div className={'h-auto w-full pl-6 sm:pl-12 md:pl-20'}>
            <div className="relative text-white h-[400px] sm:h-[350px] w-full bg-white">
                <div className="absolute left-0 top-0 w-full h-full about-img">
                    <Image preview={false} className="w-full h-full xshort:h-[105%] invert-[.1] z-0" src={"/assets/images/accent-master-logo-3-crop.png"}/>
                </div>
                <div className={'flex flex-col md:flex-row w-full h-full'}>
                    <div className="w-full md:w-3/5 h-full flex justify-center items-center z-10">
                        <div className={'md:w-[28rem] lg:w-[36rem] xl:w-[42rem] ml-4'}>
                            <p className="montserrat text-[#04204D] text-lg lg:text-xl xl:text-2xl font-medium mb-0 mt-5">
                                <span className={'xl:text-[2.5em] font-bold'}>
                                    {t('BannerText1')}
                                </span>
                                {/*<br/>*/}
                                {/*{t('BannerText2')}*/}
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 h-full flex justify-center items-center z-10">
                        <Image preview={false} className={'h-auto w-auto'} src={"/assets/logo/logo-for-light-background.png"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
