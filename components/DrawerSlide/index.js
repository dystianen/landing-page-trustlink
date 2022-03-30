import {Button, Drawer} from "antd";
import {RightOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import {Product} from "./product"
import Fade from 'react-reveal/Fade';
import { UseCases } from "./usecases";

export const DrawerSlide = observer(({menu, isOpen}) => {
    const [positionLeft, setPositionLeft] = useState(true)
    const [showProduct, setShowProduct] = useState(false)
    const [showUseCase, setShowUseCase] = useState(false);

    return (
        <Drawer title={null} placement="left" onClose={() => {}} closable={false} visible={isOpen} contentWrapperStyle={{width: '100%'}} bodyStyle={{padding: 0}}>
            <div className={'w-screen h-full flex flex-col md:flex-row'}>
                    <Fade when={(!showProduct || !showUseCase)} duration={500}>
                        <div className={`ml-16 sm:ml-20 px-0 border-l border-gray-300 w-auto md:w-[40%] h-full flex items-center ${(showProduct || showUseCase) ? 'hidden' : null}`}>
                            <div className={'flex flex-col py-11 px-2 sm:px-4 lg:px-18 lg:p-11 w-full'}>
                                    {
                                        menu.map((it, index) => (
                                            <Button type="link" className={'flex flex-row w-full h-8 justify-between items-center mb-7'} ghost key={index} onClick={() => it.name === 'Products.' ? setShowProduct(true) : it.name === 'Use Cases.' ? setShowUseCase(true) : null}>
                                                <h1 className={'text-xl md:text-2xl font-bold mb-0 montserrat'} style={{color: '#04204D'}}>{it.name}</h1>
                                                <RightOutlined className={'text-lg opacity-50'} style={{color: '#04204D'}} />
                                            </Button>
                                        ))
                                    }
                            </div>
                        </div>
                    </Fade>
                    <Fade right when={showProduct} duration={500}>
                        <div className={`w-full md:w-[65%] h-auto md:h-full m-0 ${!showProduct ? 'hidden' : null}`}>
                            <Product show={showProduct} setShow={setShowProduct}/>
                        </div>
                    </Fade>
                    <Fade right when={showUseCase} duration={500}>
                        <div className={`w-full md:w-[65%] h-auto md:h-full m-0 ${!showUseCase ? 'hidden' : null}`}>
                            <UseCases show={showUseCase} setShow={setShowUseCase} />
                        </div>
                    </Fade>
                <div className={`${(showProduct || showUseCase) ? 'w-auto md:w-[35%] md:fixed md:right-0 lg:py-8' : 'w-auto md:w-[60%] md:pl-14'} h-full md:py-16 pl-6 ml-16 sm:ml-20 md:ml-0`} style={{backgroundColor: '#1D365F', transition: 'width 500ms'}}>
                    <div className={'flex flex-col w-full h-full justify-between'}>
                        <div className={`flex flex-col lg:${(showProduct || showUseCase) ? "flex-col lg:pt-0" : "flex-row justify-between"} pt-10 md:pt-24`} style={{ transition: 'width 300ms ease-in-out'}}>
                            <div className={`flex flex-col`}>
                                <div className={'flex-col text-white mb-10'}>
                                    <p className={'text-xs opacity-80 mb-3 montserrat'} style={{letterSpacing: 1.8}}>CALL US</p>
                                    <p className={`text-xl ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} mb-2 montserrat`}>(021) 22902348</p>
                                    <p className={'text-xs opacity-80 montserrat'} style={{letterSpacing: 0.3}}>Mon - Fri (8:30 - 17:30)</p>
                                </div>
                                <div className={'flex-col text-white mb-10'}>
                                    <p className={'text-xs opacity-80 mb-3 montserrat'} style={{letterSpacing: 1.8}}>Email</p>
                                    <p className={`text-xl ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} mb-2 montserrat`}>info@withtrustlink.com</p>
                                </div>
                            </div>
                            <div className={'flex-col text-white mb-10'}>
                                <p className={'text-xs opacity-80 mb-3 montserrat lg:mr-16'} style={{letterSpacing: 1.8}}>SOCIAL MEDIA</p>
                                <p className={`text-xl ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} mb-2 montserrat`}>Instagram</p>
                                <p className={`text-xl ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} mb-2 montserrat`}>Twitter</p>
                                <p className={`text-xl ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} mb-2 montserrat`}>LinkedIn</p>
                            </div>
                        </div>
                        <div className={'flex flex-row w-full justify-start'}>
                            <div className={'w-full md:w-auto mb-12 md:mb-0'}>
                                <h1 className={`text-white text-xl  ${(showProduct || showUseCase) ? 'md:text-xl' : 'md:text-2xl'} font-bold mb-3 montserrat`}>The Most Advance <br/> <span className={'font-light'}>End-To-End</span> <br/>Digital Biometrics <br/> Solution Provider</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    )
})
