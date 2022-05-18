import {Button, Drawer, Modal} from "antd";
import {RightOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {Product} from "./product"
import Fade from 'react-reveal/Fade';
import { UseCases } from "./usecases";
import { useTranslation } from "next-i18next";
import { About } from "./about";
import { useMediaQuery } from 'react-responsive';


export const DrawerSlide = observer((props) => {
    const {menu, isOpen, onClickContact, onClose} = props;
    const [positionLeft, setPositionLeft] = useState(true)
    const [showProduct, setShowProduct] = useState(false)
    const [showUseCase, setShowUseCase] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const { t } = useTranslation();
    const tablet = useMediaQuery({ query: '(max-width: 980px)' });

    useEffect(() => {
        if(!isOpen){
            setShowProduct(false)
            setShowUseCase(false)
            setShowAbout(false)
        }
    }, [isOpen])
    const socialMedia = [
        {
            key: 'ig',
            title: 'Instagram',
            url: 'https://www.instagram.com/withtrustlink/'
        },
        {
            key: 'twt',
            title: 'Twitter',
            url: 'https://twitter.com/withtrustlink'
        },
        {
            key: 'fb',
            title: 'Facebook',
            url: 'https://www.facebook.com/withtrustlink'
        },
        {
            key: 'in',
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/company/withtrustlink/'
        },
    ];

    const goToContact = () => {
        props.setOpen(false);
        onClickContact()
        
    }

    const onMenuClick = (name) => {
        if(name === t('Products')){
            setShowProduct(true)
        } else if(name === t('Use Cases')){
            setShowUseCase(true)
        } else if(name === t('About Us.')){
            setShowAbout(true)
        } else if(name === t('Contact Us')){
            goToContact();
        }
    }

    return (
        <Modal
            title={null}
            // wrapClassName={'modal-full'}
            closable={false}
            visible={isOpen}
            footer={null}
            width={'100%'}
            wrapClassName={'bg-menu'}
            className={'relative top-0 h-full w-full p-0 m-0 custom-modal'}
            maskClosable={false}
            bodyStyle={{padding: 0, height: '100%', width: '100%'}}
        >
            <div className={'w-full h-full flex flex-col md:flex-row'}>
                <Fade when={(!showProduct || !showUseCase|| !showAbout)} duration={500}>
                    <div className={`ml-16 sm:ml-20 px-0 border-l border-gray-300 w-auto md:w-[40%] h-full flex items-center ${(showProduct || showUseCase || showAbout) ? 'hidden' : ""}`}>
                        <div className={'flex flex-col py-11 px-2 sm:px-4 lg:px-18 lg:p-11 w-full lg:hidden'}>
                            {
                                menu.map((it, index) => (
                                    <Button type="link" className={'flex flex-row w-full h-8 justify-between items-center mb-7'} ghost key={index} onClick={()=>{
                                        props.setOpen(false);
                                        it.onClicked()
                                    }}>
                                        <h1 className={'text-xl md:text-2xl font-bold mb-0 montserrat'} style={{color: '#04204D'}}>{it.name}</h1>
                                        {/* <RightOutlined className={'text-lg opacity-50'} style={{color: '#04204D'}} /> */}
                                    </Button>
                                ))
                            }
                        </div>
                    </div>
                </Fade>
                <Fade right when={showProduct} duration={500}>
                    <div className={`w-full lg:overflow-x-hidden md:w-[65%] h-auto md:h-full m-0 ${!showProduct ? 'hidden' : null}`}>
                        <Product show={showProduct} setShow={setShowProduct}/>
                    </div>
                </Fade>
                <Fade right when={showUseCase} duration={500}>
                    <div className={`w-full lg:overflow-x-hidden md:w-[65%] h-auto md:h-full m-0 ${!showUseCase ? 'hidden' : null}`}>
                        <UseCases show={showUseCase} setShow={setShowUseCase} />
                    </div>
                </Fade>
                <Fade right when={showAbout} duration={500}>
                    <div className={`w-full lg:overflow-x-hidden md:w-[65%] h-auto md:h-full m-0 ${!showAbout ? 'hidden' : null}`}>
                        <About show={showAbout} setShow={setShowAbout} />
                    </div>
                </Fade>
                <div className={`${(showProduct || showUseCase) ? 'w-auto md:w-[35%] md:fixed md:right-0 lg:py-8' : 'w-auto md:w-[60%] md:pl-14'}  md:py-16 pl-6 ml-16 sm:ml-20 md:ml-0 bg-[#1D365F] h-auto`} style={{ transition: 'width 500ms'}}>
                    <div className={'flex flex-col w-full h-full justify-between'}>
                        <div className={`flex flex-col lg:${(showProduct || showUseCase) ? "flex-col lg:pt-0" : "flex-row justify-between"} pt-10 md:pt-20 h-full`} style={{ transition: 'width 300ms ease-in-out'}}>
                            <div className={`flex flex-col`}>
                                <div className={'flex-col text-white mb-10 md:mb-2 -mt-5'}>
                                    <p className={'text-xs opacity-80 mb-3 montserrat'} style={{letterSpacing: 1.8}}>{t('Call Us')}</p>
                                    <p className={`text-xl ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} mb-2 montserrat`}>(021) 22902348</p>
                                    <p className={'text-xs opacity-80 montserrat'} style={{letterSpacing: 0.3}}>{t('Mon to Fri')} (8:30 - 20:00)</p>
                                </div>
                                <div className={'flex-col text-white mb-10  md:mb-2 cursor-pointer'} onClick={goToContact}>
                                    <p className={'text-xs opacity-80 mb-3 montserrat'} style={{letterSpacing: 1.8}}>Email</p>
                                    <p className={`text-xl ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} mb-2 montserrat`}>info@withtrustlink.com</p>
                                </div>
                                <div className={'flex-col text-white mb-10  md:mb-2'}>
                                    <p className={'text-xs opacity-80 mb-3 montserrat'} style={{letterSpacing: 1.8}}>{t('Address')}</p>
                                    <p className={`text-xl ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} mb-2 montserrat`}>{t('Kota Kasablanca Office 88')}</p>
                                    <p className={'text-xs opacity-80 montserrat'} style={{letterSpacing: 0.3}}>{t('Jl. Raya Casablanca No.16, RW.5,')}<br/>{t(' Menteng Dalam, Kec. Tebet, DKI Jakarta 12870')}</p>
                                </div>
                            </div>
                            <div className={'flex-col text-white mb-10  md:mb-2'}>
                                <p className={'text-xs opacity-80 mb-3 montserrat lg:mr-16'} style={{letterSpacing: 1.8}}>{t('Social Media')}</p>
                                {socialMedia.map((data, index) => {
                                    return <p key={data.key} className={`text-xl ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} mb-2 montserrat`}>
                                        <a href={data.url} target={"_blank"} rel="noopener noreferrer" className="text-white">{data.title}</a>
                                    </p>
                                })}
                            </div>

                        </div>
                        <div className={'flex flex-row w-full justify-start'}>
                            <div className={'w-full md:w-auto mb-12 md:mb-0'}>
                                <h1 className={`text-white text-xl  ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} font-bold mb-3 montserrat`}>
                                    {t('Advance Solutions')} <br/>
                                    <span className={'font-light'}>{t('For On Boarding Experience')}</span>
                                    {/*<br/>{t('and Seamless Open Finance')} */}
                                    {/*<br/> {t('API Infrastructure')}*/}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
})
