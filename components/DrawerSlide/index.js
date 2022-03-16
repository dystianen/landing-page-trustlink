import {Button, Drawer} from "antd";
import {RightOutlined} from "@ant-design/icons";
import React from "react";
import {observer} from "mobx-react-lite";

export const DrawerSlide = observer(({menu, isOpen}) => {
    return (
        <Drawer title={null} placement="left" onClose={() => {}} closable={false} visible={isOpen} contentWrapperStyle={{width: '100%'}} bodyStyle={{padding: 0}}>
            <div className={'w-screen h-full flex flex-col lg:flex-row'}>
                <div className={'ml-7 w-20 h-full transparent border-r border-gray-300'} />
                <div className={'flex flex-col justify-center items-center w-full lg:w-112 h-full py-11 px-20 lg:p-11'}>
                    {
                        menu.map((it, index) => (
                            // eslint-disable-next-line react/jsx-key
                            <Button type="link" className={'flex flex-row w-full h-8 justify-between items-center mb-10'} ghost key={index}>
                                <h1 className={'text-2xl font-bold mb-0'} style={{color: '#04204D'}}>{it.name}</h1>
                                <RightOutlined className={'text-lg opacity-50'} style={{color: '#04204D'}} />
                            </Button>
                        ))
                    }
                </div>
                <div className={'w-screen h-full py-16 lg:py-56'} style={{backgroundColor: '#1D365F'}}>
                    <div className={'flex flex-col w-full h-full justify-between'}>
                        <div className={'flex flex-col lg:flex-row justify-around'}>
                            <div className={'flex-col text-white self-center lg:self-auto mb-10'}>
                                <p className={'text-xs opacity-80 mb-3'} style={{letterSpacing: 1.8}}>CALL US</p>
                                <p className={'text-2xl mb-2'}>(021) 22902348</p>
                                <p className={'text-xs opacity-80'} style={{letterSpacing: 0.3}}>Mon - Fri (8:30 - 17:30)</p>
                            </div>
                            <div className={'flex-col text-white self-center lg:self-auto mb-10'}>
                                <p className={'text-xs opacity-80 mb-3'} style={{letterSpacing: 1.8}}>SOCIAL MEDIA</p>
                                <p className={'text-2xl mb-2'}>Instagram</p>
                                <p className={'text-2xl mb-2'}>Facebook</p>
                                <p className={'text-2xl mb-2'}>LinkedIn</p>
                            </div>
                        </div>
                        <div className={'flex flex-row justify-around self-center lg:self-auto'}>
                            <h1 className={'text-white text-2xl font-bold mb-3'}>The Most Advance <br/> <span className={'font-light'}>End-To-End</span> <br/>Digital Biometrics <br/> Solution Provider</h1>
                            <div className={'hidden lg:flex w-20 h-20 opacity-0'} />
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    )
})
