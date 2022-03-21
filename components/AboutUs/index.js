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
        <div className='pl-20 overflow-y-hidden lg:overflow-y-hidden pb-10 mt-[10vw]'>
            <div className={'relative w-full h-auto items-start flex justify-center'}>
                <div className={'flex relative w-[90%]'}>
                    <span className={'z-10 about-img'}>
                        <Image preview={false} src={"/assets/meeting_stock_image.png"} className={'h-full'} />
                    </span>
                    <div className={'absolute left-0 bottom-0 h-[50%] w-[21%] z-20'}>
                        <Image src={"/assets/about_me_left.png"} preview={false} id={'about-me'} className={'h-full'}/>
                    </div>
                    <div className={"absolute left-[-21%] top-[50%] w-[42%] h-full z-0 about-img"}>
                        <Image src={"/assets/about_me.svg"} preview={false} className={'h-full'}/>
                    </div>
                </div>
            </div>
            <div className={'w-[60%] float-right mt-10 mr-10'}>
                <div className={"w-[13vw]"}>
                    <Divider orientation="right" orientationMargin={24} className={"w-[10px] text-[#818fa6] tracking-[2.1px] font-bold montserrat"}>ABOUT US</Divider>
                </div>
                <Fade when={transition} duration={1600}>
                    <div>
                        <Title className={"font-bold text-[30px] montserrat"} >We are thrilled to advance <br />our technology to meet <br />the needs of our valued customers.</Title>
                    </div>
                    <div>
                        <Text className={'text-[#4f6382] text-[14px] montserrat'}>We are a leading digital biometric provider in Indonesia, <br />exclusively focused on comprehensive biometric recognition <br />products and highly tailored with data analytics platforms.</Text>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default AboutMePage;
