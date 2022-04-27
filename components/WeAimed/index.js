import {Image} from "antd";
import {useTranslation} from "next-i18next";

const WeAimed = () => {

    const { t } = useTranslation('common');

    return (<>
            <div className="h-[340px] w-full pl-12 md:pl-20 z-0 ">
                <div className={'w-full h-full relative text-white montserrat '}>
                    <div className={'section-gradient-bg w-full h-full absolute z-10'} />
                    <div className={'absolute triv-top top-6 md:top-16 md:top-5 -left-12 sm:-left-20 h-[175%] sm:h-auto w-1/2 sm:w-auto about-img z-0'}>
                        <Image preview={false} src={'/assets/images/accent-home-sectionTrivia-1.jpg'} className={'h-full w-auto'}/>
                    </div>
                    <div className={'absolute top-0 left-0 h-full w-auto about-img z-30'}>
                        <Image preview={false} src={'/assets/images/accent-home-sectionTrivia-2.jpg'} className={'h-full w-auto opacity-40'}/>
                    </div>
                    <div className="flex sm:justify-center lg:justify-end py-16 w-full h-full px-4 md:px-0 ">
                        <div className={'w-full sm:w-3/4 lg:w-4/6 md:pl-48 flex flex-col justify-around z-30'}>
                            <p className="text-xl sm:text-2xl lg:text-3xl md:full lg:w-3/4 xl:w-3/5 font-bold">
                                {t('We Aim To Be')}
                            </p>
                            <p className="text-xs md:text-sm 2xl:text-lg opacity-90 sm:w-4/5 md:w-[80%] lg:w-[65%] xl:w-[50%]">
                                {t('Accomplish')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeAimed;
