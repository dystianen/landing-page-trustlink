import { CloseOutlined } from '@ant-design/icons';
import {Image, Avatar, Divider, Typography} from 'antd';
import React, {useEffect, useState} from 'react';
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import { useRouter } from 'next/router';
import Link from "next/link";

const { Title, Text } = Typography;



const AboutMePage = () => {
    const router = useRouter();
    const [transition, setTransition] = useState(false);

    useEffect(() => {
        setTransition(true);
    }, []);

    return (
        <div className='ml-20 max-w-screen overflow-y-hidden lg:overflow-y-hidden pb-10 mt-[10vw]'>
            <div className={'relative max-w-screen md:flex justify-center'}>
                <Fade bottom when={transition}>
                    <div className={'md:flex invisible mobilel:visible absolute bottom-[-320px] left-[-30px] xl:bottom-[-250px] xl:left-[-70px]'}>
                        <Image width={512} height={512} className={"h-[256px] w-[256px] xl:h-[512px] xl:w-[512px]"} src={'/assets/about_me.svg'} preview={false}/>
                    </div>
                </Fade>
                        {/* preview image */}
                <div className={'flex relative w-["100%"] justify-center'}>
                        <Image preview={false} src={"https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"} height={500} width={1000}/>
                    <div className={'flex absolute right-0 bottom-0 items-end'}>
                        <Image src={"/assets/about_me_right.png"} preview={false} id={'about_me'} />
                    </div>
                    <div className={'flex absolute left-0 bottom-0 items-end'}>
                        <Image src={"/assets/about_me_left.png"} preview={false} id={'about_me'} />
                    </div>
                </div>


            </div>
            <div className={'flex ml-[40px] justify-end mobilel:justify-end mobilel:mt-[40px]'}>
                <div className={'mobilel:w-[60vw]'}>
                    <div className={"w-[13vw]"}>
                        <Divider orientation="right" orientationMargin={24} className={"w-[10px] text-[#818fa6] tracking-[2.1px] font-bold"}>ABOUT US</Divider>
                    </div>
                    <Fade when={transition} duration={1600}>
                        <div className={"w-screen mobilel:w-[40vw]"}>
                            <Title className={"font-bold text-[30px]"} >We are thrilled to advance our technology to meet the needs of our valued customers.</Title>
                        </div>
                        <div className={"mobilel:w-[30vw]"}>
                            <Text className={'text-[#4f6382] text-[14px]'}>We are a leading digital biometric provider in Indonesia, exclusively focused on comprehensive biometric recognition products and highly tailored with data analytics platforms.</Text>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default AboutMePage;
