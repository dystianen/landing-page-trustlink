import React from "react";
import { observer } from "mobx-react-lite";
import {Image} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

export const UseCases = observer(({show, setShow}) => {
    const dataUseCases = [
        {
            key: 'sclaw',
            title: 'Security and Laws.',
            description: 'New technology to accommodate the future of security with TrustVision and TrustVerify.',
            left: '/assets/logo/trust/vision.png',
            right: '/assets/logo/trust/verify.png',
        },
        {
            key: 'bank',
            title: 'Your Bank.',
            description: 'With TrustConnect and TrustScore, you can manage your banking easier.',
            left: '/assets/logo/trust/connect.png',
            right: '/assets/logo/trust/score.png',
        },
        {
            key: 'user',
            title: 'Interactive Scanning.',
            description: 'To our user, we can trust TrustLive and TrustScan for your scanning purpose.',
            left: '/assets/logo/trust/scan.png',
            right: '/assets/logo/trust/live.png',
        },
        {
            key: 'data',
            title: 'Manage User Data',
            description: 'You can now scan your identity and verify it to goverment just by using our TrustVerify and TrustScan.',
            left: '/assets/logo/trust/verify.png',
            right: '/assets/logo/trust/scan.png',
        },
    ]
    return (
        <div className={'flex flex-row bg-white h-auto md:h-full min-h-[100vh]'}>
        <div className={'ml-20 border-l border-gray-300 h-auto md:h-full'}/>
        <div className={'border-r border-gray-300 px-5 hidden md:inline-block'} onClick={() => setShow(!show)}>
            <div className={'mt-16 w-12 h-12 rounded-full border-[1px] border-[#5B6D8A] flex justify-center items-center opacity-50'}>
                <LeftOutlined className={'text-xl mb-1 font-bold'}/>
            </div>
        </div>
        <div className={'w-full h-full'}>
            <div className={'w-full h-auto mt-4 md:mt-16 px-2 lg:px-5'}>
                <div>
                    <div className={'inline-block md:hidden mr-4 mb-4'} onClick={() => setShow(!show)}>
                        <div className={'w-12 h-12 rounded-full border-[1px] border-[#5B6D8A] flex justify-center items-center opacity-50'}>
                            <LeftOutlined className={'text-xl mb-1 font-bold'}/>
                        </div>
                    </div>
                    <p className={'inline text-3xl mb-5 pt-2 montserrat leading-none font-bold text-[#04204D]'}>Use Cases.</p>
                    <p className={'text-sm pb-6 pt-2 montserrat text-[#4F6382]'}>
                        When Do You Need to Use Trustlink? <br/> Check Out Our Trustlink Use Cases in Your App!
                    </p>
                </div>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 montserrat'}>
                {dataUseCases.map((data, index) => {
                    return (
                    <div key={data.key} className={`w-full h-auto md:h-48 lg:h-52 border border-l-0 ${index >= 3 ? null : 'border-b-0'} border-gray-300`}>
                        <div className={'relative h-full flex flex-col justify-center items-center pl-2 lg:pl-8 pt-6'}>
                            <p className={'md:text-base lg:text-xl text-[#1D365F] leading-tight w-[70%] mb-4 z-10'}>{data.title}</p>
                            <p className={'montserrat md:text-[10px] lg:text-xs text-[#818FA6] w-[70%] mb-5 md:mb-0 z-10'}>{data.description}</p>
                            <div className={'absolute -bottom-2 left-0 z-0'}>
                                <Image preview={false} className="w-[50px] md:w-[60px] lg:w-[80px]" src={data.left}/>
                            </div>
                            <div className={'absolute top-0 right-0 z-0'}>
                                <Image preview={false} className="w-[50px] md:w-[60px] lg:w-[80px]" src={data.right}/>
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
});