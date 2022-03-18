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
        <div className='ml-20 max-w-[95em] overflow-y-hidden lg:overflow-y-hidden pb-10 mt-[10vw]'>
            <div className={'relative w-full h-[550px] items-start flex justify-end'}>
                {/*<Fade bottom when={transition}>*/}
                {/*    <div className={'md:flex invisible mobilel:visible absolute bottom-[-320px] left-[-30px] xl:bottom-[-250px] xl:left-[-70px]'}>*/}
                {/*        <Image width={512} height={512} className={"h-[256px] w-[256px] xl:h-[512px] xl:w-[512px]"} src={'/assets/about_me.svg'} preview={false}/>*/}
                {/*    </div>*/}
                {/*</Fade>*/}
                <div className={" h-full w-[530px] ml-[40px] mt-[200px]"}>
                    <img className={"trustlinkIcon"} src={"/assets/about_me.svg"}/>
                </div>

                        {/* preview image */}
                <div className={'flex relative w-["100%"] justify-center'}>
                        <Image preview={false} src={"/assets/meeting_stock_image.png"} height={450} width={1040}/>
                    <div className={'flex absolute right-0 bottom-0 items-end'}>
                        <Image src={"/assets/about_me_right.png"} preview={false} id={'about_me'} />
                    </div>
                    <div className={'flex absolute left-0 bottom-0 items-end'}>
                        <Image src={"/assets/about_me_left.png"} preview={false} id={'about_me'} />
                    </div>
                </div>
            </div>
            <div className={'max-w-[90em] typographyAboutUs float-right flex justify-end'}>
                <div>
                    <div className={"w-[13vw]"}>
                        <Divider orientation="right" orientationMargin={24} className={"w-[10px] text-[#818fa6] tracking-[2.1px] font-bold"}>ABOUT US</Divider>
                    </div>
                    <Fade when={transition} duration={1600}>
                        <div>
                            <Title className={"font-bold text-[30px]"} >We are thrilled to advance our technology to meet the needs of our valued customers.</Title>
                        </div>
                        <div>
                            <Text className={'text-[#4f6382] text-[14px]'}>We are a leading digital biometric provider in Indonesia, exclusively focused on comprehensive biometric recognition products and highly tailored with data analytics platforms.</Text>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default AboutMePage;
