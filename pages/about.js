import { CloseOutlined } from '@ant-design/icons';
import { Image, Avatar } from 'antd';
import React, {useEffect, useState} from 'react';
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import { useRouter } from 'next/router';
import Link from "next/link";

const AboutPage = () => {
    const router = useRouter();
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        setTransition(true);
    }, []);

    return (
        <div className='w-screen h-screen overflow-y-auto lg:overflow-y-hidden pb-10 lg:pb-10 bg-[#F6F6F6]'>
            <div className={'flex justify-end pad-0'}>
                {/* <Fade duration={1600} bottom></Fade> */}
                {/* <Link href={`/under_construction`} passHref> */}
                    <div className={'w-10 h-10 short:w-8 short:h-8 flex justify-center items-center cursor-pointer bg-[#FF4A63]'} onClick={() => {
                        setTransition(false)
                        window.location.href = 'under_construction'
                    }}>
                        <Avatar shape="square" className={'bg-transparent'} size={34} icon={<CloseOutlined className={'text-[#FFF] centerIcon'} />} />
                    </div>
                {/* </Link> */}
            </div>
            <div className={'flex flex-row min-h-full min-w-full px-4 md:px-10 short:px-8 text-white'}>
                <Fade duration={1600} bottom>
                    <div className={'flex grid grid-cols-12 pb-6 tall:pb-10 short:pb-10'}>
                        <div className={'col-span-12 lg:col-span-3 xl:col-span-3 bg-[#707070]'}>
                            <div className={'flex flex-col h-full w-full'}>
                                <div className={'text-center bg-[#E6E9ED] imageLogo h-full lg:h-3/5  w-full'}>
                                    <Image preview={false} className="w-80" src={'/assets/logo/logo-for-light-background.png'} />
                                </div>
                                <Fade when={transition} duration={1600} right>
                                    <div className={'bg-no-repeat bg-left-bottom px-10 py-4 md:p-10 lg:p-5 lg:py-10 short:px-12 tall:py-10 tall:px-12 xl:px-20 xl:py-12 h-full lg:h-2/5 bg-[#FE6601] imageBg'}>
                                        <p className="font-bold text-lg xl:text-xl">The Most Advanced <br />
                                            <span className='font-light'> End-To-End</span><br />
                                            Digital Biometrics <br />
                                            Solution Provider and Open Finance</p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className={'col-span-12 lg:col-span-4 xl:col-span-4'}>
                            <div className={'flex flex-col h-full w-full'}>
                                <div className={'h-full lg:h-3/5 w-full bg-[#D8D8D8]'}>
                                    <Slide when={transition} duration={1600} left>
                                        <div className="bg-[#D8D8D8] h-full">
                                            <iframe className={'h-full'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.298439614077!2d106.83960811476904!3d-6.224324195494293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f38cd5f00001%3A0x5cb013567aa7df01!2sKota%20Kasablanca%20Office%2088!5e0!3m2!1sid!2sid!4v1644949204792!5m2!1sid!2sid" width="100%" height="100%" loading="lazy" />
                                        </div>
                                    </Slide>
                                </div>
                                <div className={'h-full lg:h-2/5 w-full px-10 lg:px-5 lg:py-6 tall:py-8 tall:px-12 short:px-12 xl:px-20  xl:py-14 bg-[#FFB280]'}>
                                    <p className={'text-sm xl:text-base font-light tracking-widest'}>CALL US <br />
                                        <Fade when={transition} duration={1600} bottom>
                                            <Fade when={transition} duration={1600} right>
                                                <div className='font-normal tracking-normal text-xl short:text-xl short:font-bold xl:text-2xl'>(021) 22902348</div>
                                            </Fade>
                                        </Fade>
                                        <br />
                                        <p className={'-my-6'}> Mon - Fri (8.30 - 17.30)</p><br />
                                        <p className={'mt-8 short:mt-6 -mb-px'}>EMAIL <br /></p>
                                        <span className='font-normal tracking-normal text-xl short:text-xl short:font-bold xl:text-2xl'>info@withtrustlink.com</span></p>
                                </div>
                            </div>
                        </div>
                        <div className={'bg-[#707070] col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-5 '}>
                            <Fade when={transition} duration={1600} left>
                                <div className={'p-10 lg:p-12 short:p-12 xl:p-16 h-full bg-[#04204D]'}>
                                    <p className='text-3xl xl:text-5xl font-bold mt-9 md:mt-12 lg:mt-10 short:mt-5 xl:mt-18'>About Us.</p>
                                    <p className='text-lg xl:text-xl short:text-lg mt-8 md:mt-10 lg:mt-14 short:mt-6 xl:mt-20'>
                                        The Only Open Finance with Biometrics Identity Verification Solution
                                    </p>
                                    <p className='text-gray-400 mt-6 text-base short:text-base xl:text-lg'>
                                        We are the only company that provides the most advanced identity verification against Indonesian national database as the official Dukcapil partner in Platform Bersama that combine it with open finance facilitator for a seamless, simpler, and most secure financial data integration
                                    </p>
                                    <div className={'grid grid-cols-2 sm:grid-cols-4'} style={{justifyContent: 'space-between', alignItems: 'center', marginTop: 30}}>
                                        <Image preview={false} className="w-30 company-logo logo-image" src={'/assets/keminfo.png'}/>
                                        <Image preview={false} className="w-16 company-logo logo-dukcapil" src={'/assets/dukcapil.svg'}/>
                                        <Image preview={false} className="w-20 company-logo logo-image mt-10 sm:mt-0" src={'/assets/aftech.png'}/>
                                        <Image preview={false} className="w-16 company-logo logo-image mt-10 sm:mt-0" src={'/assets/iso.png'}/>
                                    </div>

                                </div>
                            </Fade>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default AboutPage;
