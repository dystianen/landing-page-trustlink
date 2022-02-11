import { CloseOutlined } from '@ant-design/icons';
import { Image, Avatar } from 'antd';
import React from 'react';
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';

const AboutPage = () => {

    return (
        <div className='w-sceen h-screen pb-20'>
            <div className={'flex justify-end pad-0'}>
                <Link href={`/under_construction`} passHref>
                    <div className={'w-10 h-10 flex justify-center items-center cursor-pointer'} style={{backgroundColor: '#E6E9ED'}}>
                        <Avatar shape="square" style={{ backgroundColor:'transparent'}} size={40} icon={<CloseOutlined style={{color: '#B4BCC9'}} />} />
                    </div>
                </Link>
            </div>
            <div className={'flex flex-row min-h-full min-w-full px-10 text-white'}>
                <Fade bottom>
                    <div className={'grid grid-cols-12'}>
                        <div className={'col-span-3 bg-[#707070]'}>
                            <div className={'text-center bg-[#E6E9ED] h-3/5'}>
                                <Image preview={false} className="w-80" style={{marginTop:'50%'}} src={'/assets/logo/logo-for-light-background.png'} />
                            </div>
                            <Fade right>
                                <div className={'bg-no-repeat bg-left-bottom  p-20 h-2/5 bg-[#FE6601]'}  style={{backgroundImage:"url('/assets/accents/finger-print.png')", backgroundSize:250, backgroundPositionX:'-100px', backgroundPositionY:150}}>
                                    <p className="font-bold text-2xl">The Most Advance <br />
                                    <span className='font-light'> End-To-End</span><br />
                                        Digital Biometrics <br />
                                        Solution Provider</p>
                                </div>
                            </Fade>
                        </div>
                        <div className={'col-span-4'}>
                            <div className={'h-3/5 bg-[#D8D8D8]'}>
                                <Slide left>
                                    <div className="bg-red-200 h-full">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3334781061417!2d106.82982881468574!3d-6.219681595497624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f7062b8557%3A0xeab1cb9306fa3551!2sThe%20H%20Tower!5e0!3m2!1sen!2sid!4v1644525588163!5m2!1sen!2sid" width="100%" height="100%" loading="lazy" />
                                    </div>
                                </Slide>
                            </div>
                            <div className={'h-2/5 px-20 py-14 bg-[#FFB280]'}>
                                <p className={'text-base font-light tracking-widest'}>CALL US <br />
                                <Fade bottom>
                                    <Fade right>
                                        <div className='font-normal tracking-normal text-3xl -mb-px'>(021) 22902348</div>
                                    </Fade>
                                </Fade>
                                <br />
                                Mon - Fri (8.30 - 17.30)<br />
                                <p className={'mt-8 -mb-px'}>EMAIL <br /></p>
                                <span className='font-normal tracking-normal text-3xl'>info@withtrustlink.com</span></p>
                            </div>
                        </div>
                        <div className={'bg-[#707070] col-span-5 '}>
                            <Fade left>
                                <div className={'p-16 h-full bg-[#04204D]'}>
                                    <p className='text-6xl font-bold mt-28'>About.</p>
                                    <p className='text-2xl mt-20'>
                                        The Only Open Finance With Biometrics Ekyc Verification
                                    </p>
                                    <p className='text-gray-400 mt-6 text-lg'>
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
