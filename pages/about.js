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
        <div className='w-screen h-screen  overflow-y-auto lg:overflow-y-hidden xl:overflow-y-auto pb-10 lg:pb-20 bg-[#F6F6F6]'>
            <div className={'flex justify-end pad-0'}>
                {/* <Link href={`/under_construction`} passHref> */}
                    <div className={'w-10 h-10 flex justify-center items-center cursor-pointer bg-[#E6E9ED]'}onClick={() => {
                        setTransition(false)
                        window.location.href = 'under_construction'
                    }}>
                        <Avatar shape="square" className={'bg-transparent'} size={40} icon={<CloseOutlined className={'text-[#B4BCC9]'} />} />
                    </div>
                {/* </Link> */}
            </div>
            <div className={'flex flex-row min-h-full min-w-full px-4 md:px-10 text-white'}>
                <Fade duration={1600} bottom>
                    <div className={'grid grid-cols-12'}>
                        <div className={'col-span-12 lg:col-span-3 xl:col-span-3 bg-[#707070]'}>
                            <div className={'flex flex-col h-full w-full'}>
                                <div className={'text-center bg-[#E6E9ED] imageLogo h-full lg:h-3/5 w-full'}>
                                    <Image preview={false} className="w-80" src={'/assets/logo/logo-for-light-background.png'} />
                                </div>
                                <Fade when={transition} duration={1600} right>
                                    <div className={'bg-no-repeat bg-left-bottom px-10 py-4 md:p-10 xl:p-20 h-full lg:h-2/5 bg-[#FE6601] imageBg'}>
                                        <p className="font-bold text-lg xl:text-xl">The Most Advance <br />
                                            <span className='font-light'> End-To-End</span><br />
                                            Digital Biometrics <br />
                                            Solution Provider</p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className={'col-span-12 lg:col-span-4 xl:col-span-4'}>
                            <div className={'flex flex-col h-full w-full'}>
                                <div className={'h-full lg:h-3/5 w-full bg-[#D8D8D8]'}>
                                    <Slide when={transition} duration={1600} left>
                                        <div className="bg-[#D8D8D8] h-full">
                                            <iframe className={'h-full'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3334781061417!2d106.82982881468574!3d-6.219681595497624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f7062b8557%3A0xeab1cb9306fa3551!2sThe%20H%20Tower!5e0!3m2!1sen!2sid!4v1644525588163!5m2!1sen!2sid" width="100%" height="100%" loading="lazy" />
                                        </div>
                                    </Slide>
                                </div>
                                <div className={'h-full lg:h-2/5 w-full px-5 xl:px-20 py-6 xl:py-14 bg-[#FFB280]'}>
                                    <p className={'text-sm xl:text-base font-light tracking-widest'}>CALL US <br />
                                        <Fade when={transition} duration={1600} bottom>
                                            <Fade when={transition} duration={1600} right>
                                                <div className='font-normal tracking-normal text-xl xl:text-2xl'>(021) 22902348</div>
                                            </Fade>
                                        </Fade>
                                        <br />
                                        <p className={'-my-6'}> Mon - Fri (8.30 - 17.30)</p><br />
                                        <p className={'mt-8 -mb-px'}>EMAIL <br /></p>
                                        <span className='font-normal tracking-normal text-xl xl:text-2xl'>info@withtrustlink.com</span></p>
                                </div>
                            </div>
                        </div>
                        <div className={'bg-[#707070] col-span-12  md:col-span-12 lg:col-span-5 xl:col-span-5 '}>
                            <Fade when={transition} duration={1600} left>
                                <div className={'p-10 lg:p-12 xl:p-16 h-full bg-[#04204D]'}>
                                    <p className='text-3xl xl:text-5xl font-bold mt-9 md:mt-12 lg:20 xl:mt-28'>About.</p>
                                    <p className='text-lg xl:text-xl mt-8 md:mt-10 lg:mt-14 xl:mt-20'>
                                        The Only Open Finance With Biometrics Ekyc Verification
                                    </p>
                                    <p className='text-gray-400 mt-6 text base xl:text-lg'>
                                        We are the only company that provide the most advanced identity verification against Indonesian national database as the official Dukcapil partner in Platform Bersama that combine it with open finance facilitator for a seamless, simpler, and most secure financial data integration
                                    </p>
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