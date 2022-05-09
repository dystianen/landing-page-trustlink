import {Image, Button} from 'antd';
import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import {useTranslation} from "next-i18next";

const UseCase = () => {
    const { t, i18n } = useTranslation('common');

    const dataUseCase = [
        {
            title: t("eKYC & User Onboarding"),
            name: t("Desc eKYC"),
            desc: t('Desc eKYC & User Onboarding'),
            src: '/assets/usecase/usecase-ekyc.png'
        },
        // {
        //     title: t("Credit and Loan Services"),
        //     name: t("Desc Credit and Loan"),
        //     desc: t("Desc Credit and Loan Services"),
        //     src: '/assets/usecase/usecase-ekyc.png'
        // },
        {
            title: t("Security Surveillance Management"),
            name: t("Desc Security Surveillance"),
            desc: t("Desc Security Surveillance Management"),
            src: '/assets/usecase/usecase-ekyc.png'
        },
        // {
        //     title: t("Personal Finance Management"),
        //     name: t("Desc Personal Finance"),
        //     desc: t("Desc Personal Finance Management"),
        //     src: '/assets/usecase/usecase-ekyc.png'
        // },
    ]

    const pageCarousel = dataUseCase.length
    const [current, setCurrent] = useState(0)

    return (
        <div className={'w-full h-full pl-12 md:pl-20'}>
            <div className={'w-full h-full'}>
                <div className={"relative w-full h-auto max-h-[519px] usecase-img"}>
                    <Image preview={false} className="w-full h-64 md:h-full brightness-50" src={'/assets/usecase-airport.png'}/>
                    <div className={'absolute top-0 left-0 h-full w-full usecase-img'}>
                        <Image preview={false} className="w-full h-full brightness-50 " src={'/assets/usecase-airport.png'}/>
                    </div>
                    <div className={'absolute right-0 top-0 z-20 h-full w-auto usecase-img'}>
                        <Image preview={false} className="h-full w-auto" src={'/assets/images/accent-home-sectionUseCase-1.png'}/>
                    </div>
                    <div className={'absolute left-[1.2rem] sm:left-[2.2rem] bottom-[1rem] sm:bottom-[2.3rem] z-20'}>
                        <p className={'text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-2 montserrat'}>{t('Use Case')}</p>
                        <p className={'text-white text-base md:text-lg xl:text-xl w-[20rem] sm:w-[24rem] md:w-[28rem] xl:w-[48rem] montserrat pr-6 lg:pr-0'}>{t('Biometric Use Case 2')}</p>
                    </div>

                </div>
                <div className={'flex flex-row h-auto bg-[#05204D]'}>
                    <Carousel
                        autoPlay={false}
                        className={'w-full h-full'}
                        indicatorContainerProps={{
                            style: {
                                position: 'absolute',
                                bottom: '3%',
                                // right: '3%',
                                zIndex: 10
                            },
                        }}
                        indicatorIconButtonProps={{
                            style: {
                                color : '#B7DFFF'
                            }
                        }}
                        activeIndicatorIconButtonProps={{
                            style: {
                                backgroundColor: '#0681FA',
                                color: '#0681FA',
                                width: 25,
                                height: 10,
                                borderRadius: 10,
                                marginRight: 5,
                                marginLeft: 5,
                            }
                        }}
                        navButtonsAlwaysVisible={true}
                        navButtonsProps={{
                            style: {
                                backgroundColor: 'rgba(0,0,0, .1)',
                            },
                            // className: 'arrow-usecase mt-[17rem] md:mt-48 lg:mt-36'
                            className: 'arrow-usecase -mt-44 sm:mt-48 lg:mt-36'
                        }}
                        navButtonsWrapperProps={{
                            className: `mx-2 md:mx-8 ${!current ? 'arrow-prev-product' : current === (pageCarousel - 1) ? 'arrow-next-product' : null}`
                        }}
                        NextIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-right.svg'}/>}
                        PrevIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-left.svg'}/>}
                        animation={'slide'}
                        onChange={num => setCurrent(num)}
                    >
                        {dataUseCase.map((item, index) => ( <div key={index} className={'w-full h-auto md:h-screen flex flex-col md:flex-row bg-[#05204D]'}>
                                <div className={'relative flex justify-center items-center w-full md:w-1/2 h-[18rem] md:h-full my-16 md:my-0'}>
                                    <div className={'absolute -top-14 right-0 w-auto h-full flex justify-center items-center'}>
                                        <Image preview={false} src={item.src} className={'z-10 justify-center w-full h-full'} />
                                    </div>
                                </div>
                                <div className={'flex flex-col justify-center w-full md:w-1/2 h-auto md:h-full'}>
                                    <div className={"mb-7"}>
                                        <p className={'text-sm lg:text-base xl:text-lg text-[#818fa6] tracking-[3px] mb-0 montserrat text-center md:text-left'}>{item.title}</p>
                                    </div>
                                    <div className={'text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white montserrat text-center md:text-left w-full '}>
                                        <p className={'mb-8 leading-snug md:leading-tight w-auto md:w-[90%] lg:w-[83%] xl:w-3/4'}>
                                            {item.name}
                                        </p>
                                    </div>
                                    <div className={'mb-6 px-4 sm:px-12 md:px-0'}>
                                        <p className={"text-white text-sm lg:text-base xl:text-lg w-auto md:w-[90%] lg:w-[83%] xl:w-3/4 montserrat mb-0 text-justify"}>
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className={'text-center md:text-left mb-24 md:mb-0'}>
                                        <Button className={"text-white text-sm lg:text-base xl:text-lg border-[#fe6601] bg-[#fe6601] montserrat rounded-lg h-12 w-36 md:w-48"}>
                                            {t('Request Demo')}
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default UseCase;
