import React from "react";
import {Image} from "antd";
import {useTranslation} from "next-i18next";
const Banner = () => {
    const { t } = useTranslation('common');
    return (
        <div className={'h-auto w-full lg:pl-20'}>
            <div className={"relative text-white h-[16rem] sm:h-[18rem] lg:h-[21.8rem] w-auto bg-white"}>
                <div className={"absolute left-0 top-0 w-auto h-full about-img"}>
                    <Image preview={false} className={"w-auto h-full xshort:h-[105%] invert-[.1] z-0"} src={"/assets/images/accent-master-logo-3-crop.png"} alt={ 'Trustlink Accent Master Logo'}/>
                </div>
                <div className={'flex flex-col md:flex-row w-full h-full'}>
                    <div className={"w-full md:w-3/5 h-full flex justify-center items-center z-10"}>
                        <div className={'md:w-[28rem] lg:w-[36rem] xl:w-[42rem] ml-4'}>
                            <h1 className={"montserrat text-[#04204D] text-lg lg:text-xl xl:text-2xl font-medium mb-0 mt-5 md:mt-0"}>
                                <span className={'leading-10 text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold'}>
                                    {t('BannerText1')}
                                </span>
                                {/*<br/>*/}
                                {/*{t('BannerText2')}*/}
                            </h1>
                        </div>
                    </div>
                    <div className={"w-full md:w-2/5 h-full flex justify-center items-center z-10"}>
                        <Image preview={false} className={'h-auto w-full px-14'} src={"/assets/logo/logo-banner-fix.png"} alt={"Trustlink Master Logo"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
