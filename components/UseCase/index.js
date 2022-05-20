import {Image, Button} from 'antd';
import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import {useTranslation} from "next-i18next";

const emptyFunction = () => { }
const UseCase = ({sectionRef, onClickContact=emptyFunction}) => {
    const { t, i18n } = useTranslation('common');

    const dataUseCase = [
        {
            title: t("eKYC & User Onboarding"),
            name: t("Desc eKYC"),
            desc: t('Desc eKYC & User Onboarding'),
            src: '/assets/usecase/usecase-1.png',
            applications: [
                t('use_case_1_app1'),
                t('use_case_1_app2'),
                t('use_case_1_app3'),
                t('use_case_1_app4'),
            ]
        },
        // {
        //     title: t("Credit and Loan Services"),
        //     name: t("Desc Credit and Loan"),
        //     desc: t("Desc Credit and Loan Services"),
        //     src: '/assets/usecase/usecase-ekyc.png'
        // },
        {
            title: t("use_case_2_mini_text"),
            name: t("use_case_2_title"),
            desc: t("use_case_2_description"),
            // src: '/assets/usecase/usecase-ekyc.png',
            src: '/assets/usecase/usecase-2.png',
            applications: [
                t("use_case_2_app1"),
                t("use_case_2_app2"),
                t("use_case_2_app3"),
                t("use_case_2_app4"),
            ]
        },
        {
            title: t("use_case_3_mini_text"),
            name: t("use_case_3_title"),
            desc: t("use_case_3_description"),
            src: '/assets/usecase/usecase-3.png',
            applications: [
                t("use_case_3_app1"),
                t("use_case_3_app2"),
                t("use_case_3_app3"),
                t("use_case_3_app4"),
            ]
        },
        // {
        //     title: t("Security Surveillance Management"),
        //     name: t("Desc Security Surveillance"),
        //     desc: t("Desc Security Surveillance Management"),
        //     src: '/assets/usecase/usecase-ekyc.png'
        // },
        // {
        //     title: t("Personal Finance Management"),
        //     name: t("Desc Personal Finance"),
        //     desc: t("Desc Personal Finance Management"),
        //     src: '/assets/usecase/usecase-ekyc.png'
        // },
    ]

    const pageCarousel = dataUseCase.length
    const [current, setCurrent] = useState(0);


    return (
        <div className={'w-full h-full  lg:pl-20 mt-10'} >
            <div className={'w-full h-full'}>
                <div className={"relative w-full h-auto max-h-[519px] usecase-img -mb-1"}>
                    {/* <Image preview={false} className="w-full  h-[10rem] md:h-[15rem] lg:h-[18rem] xl:h-full" src={'/assets/usecase/bg-usecase-crop.png'}/> */}
                    <div className={'absolute top-0 left-0 h-full w-full usecase-img'}>
                        <Image preview={false} className="w-full h-full" src={'/assets/usecase/bg-usecase-crop.png'}/>
                        <div className={'absolute bottom-0 bg-usecase-top w-full h-full'} />
                    </div>
                    <div className={'absolute right-0 top-0 z-20 h-full w-auto usecase-img'}>
                        <Image preview={false} className="h-4/5 w-auto " src={'/assets/usecase/usecase-icon-crop-2.png'}/>
                    </div>
                    {/* <div className={'absolute left-[1.2rem] sm:left-[2.2rem] bottom-[1rem] sm:bottom-[2.3rem] z-20'}>
                        <p className={'text-white text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold mb-2 montserrat'}>{t('Use Case')}</p>
                        <p className={'text-white text-base md:text-lg xl:text-xl w-[20rem] sm:w-[24rem] md:w-[28rem] xl:w-[48rem] montserrat pr-6 lg:pr-0'}>{t('Biometric Use Case 2')}</p>
                    </div> */}

                </div>
                <div className={'flex flex-col h-auto  md:pl-20 bg-[#132F70] section-most-top-use-case'} ref={sectionRef}>
                    <div className={'relative w-full '}>
                        <div className={'absolute -left-80 z-0 -top-16 opacity-40'}>
                            <Image className={'z-0 w-auto'} preview={ false} src={'/assets/usecase/bg-group.png'} />
                        </div>
                    </div>
                     <div className={'relative w-full'}>
                         <div className={'absolute z-0 -top-16 -right-20  opacity-60'}>
                            <Image className={'z-0 w-[30vh] md:w-[35vh] '} preview={ false} src={'/assets/usecase/group-orange.png'} />
                        </div>
                    </div>
                     <div className={'mt-7 md:mt-10 w-full md:3/4 z-10 px-5 md:pl-0 '}>
                        <p className={'text-white text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold mb-1 md:mb-2 montserrat'}>{t('Use Case')}</p>
                        <p className={'text-white text-[14px] md:text-lg xl:text-xl montserrat  lg:pr-0'}>{t('Biometric Use Case 2')}</p>
                    </div>
                    <Carousel
                        autoPlay={false}
                        className={'w-full h-full  flex flex-row z-40'}
                        indicatorContainerProps={{
                            style: {
                                position: 'absolute',
                                bottom: '3%',
                                right: '3%',
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
                            className: 'arrow-usecase my-auto items-between'
                        }}
                        navButtonsWrapperProps={{
                            className: `mx-2 md:mx-8 ${!current ? 'arrow-prev-product' : current === (pageCarousel - 1) ? 'arrow-next-product' : null}`
                        }}
                        NextIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-right.svg'}/>}
                        PrevIcon={<Image preview={false} className="w-[25px] h-[25px]" src={'/assets/arrow-left.svg'}/>}
                        animation={'slide'}
                        onChange={num => setCurrent(num)}
                    >
                        {dataUseCase.map((item, index) => (
                            <div key={index} className={'w-full  flex flex-col md:h-[68vh] md:flex-row md:mb-20'}>
                                <div className={'flex justify-center items-center w-full md:w-2/3  mt-0 mb-10 md:my-0'}>
                                    <div className={' flex justify-center items-start usecase-img-2 px-10 md:px-0'}>
                                        <Image preview={false} src={item.src} className={'z-20 justify-center h-full  '} />
                                    </div>
                                </div>

                                <div className={'flex flex-col justify-start md:justify-center  w-full md:w-2/3 md:h-full md:pl-10'}>
                                    <div className={"mb-2 px-5"}>
                                        <p className={'text-sm lg:text-base xl:text-lg text-[#818fa6] tracking-[3px] mb-0 montserrat text-center md:text-left'}>{item.title}</p>
                                    </div>
                                    <div className={'px-6 md:px-0 text-lg md:text-2xl lg:text-3xl xl:text-2xl text-white montserrat text-center md:text-left w-full '}>
                                        <p className={'mb-3 leading-snug md:leading-tight w-auto md:w-[90%] lg:w-[83%] xl:w-3/4'}>
                                            {item.name}
                                        </p>
                                    </div>
                                    <div className={'mb-2 px-5 md:px-0'}>
                                        <p className={"text-white text-xs lg:text-sm xl:text-base w-auto md:w-[90%] lg:w-[83%] xl:w-3/4 montserrat mb-0 text-justify whitespace-pre-line"}>
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className={'mb-1 px-8 sm:px-12 md:px-0'}>
                                        <p className={"text-white text-sm lg:text-base xl:text-lg w-auto md:w-[90%] lg:w-[83%] xl:w-3/4 montserrat mb-0 text-justify"}>
                                            {t('use_case_application')}
                                        </p>
                                        <ul className={'use-case-applications'}>
                                            {
                                                item.applications.map(prop => (
                                                    <li key={prop} className={"text-white text-xs lg:text-sm xl:text-base w-auto md:w-[90%] lg:w-[83%] xl:w-3/4 montserrat mb-0 text-justify"}>
                                                        {prop}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className={'text-center md:text-left mb-16 md:mb-0'}>
                                        <Button className={"text-white text-sm lg:text-base xl:text-lg border-[#fe6601] bg-[#fe6601] montserrat rounded-lg h-12 w-36 md:w-48"} onClick={()=>onClickContact()}>
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
