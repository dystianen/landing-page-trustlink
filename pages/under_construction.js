import React, {useRef, useState} from 'react';
import {Carousel, Image} from 'antd';
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import ParticlesLayout from "../components/Layout/ParticlesLayout";
import {ParticlePage} from "../components/Particle";

const UnderConstruction = () => {
    const [activeSlide, setActiveSlide] = useState(-1);
    const [contentWidth, setWidth] = useState('66.6%');
    const menu = [
        {
            label: "more info",
            link:  'about'
        },
        {
            label: "contact us",
            link: 'contact_us'
        }
    ];


    const text = [
        {
            label: "Facial Biometrics",
            ref: useRef(null)
        },
        {
            label: "Identity Verification",
            ref: useRef(null)
        },
        {
            label: "Open Finance",
            ref: useRef(null)
        },
        {
            label: "Coming Soon",
            ref: useRef(null)
        }
    ];

    const carouselRef = useRef(null)

    const RenderMenu = () => (
        <div className={'menu-container'}>
            {menu.map(prop => {
                return (
                    <Link href={`/${prop.link}`} key={prop.label} passHref>
                        <div className={'menu-item'}>
                                <div className={'menu-button'}></div>
                                <div className={'menu-label'}>{prop.label}</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    );

    const textSliderStyles = {
        // backgroundColor: "transparent linear-gradient(90deg, #FF6500 0%, #FFD1B300 100%) 0% 0% no-repeat padding-box"
        zIndex:2
    }

    let changeParticlePosition = () => {
        console.log('bruh123123', 'AAAAAAAAAAAA')
    }

    return (
        <div className={"w-screen h-screen under-construction"}>
            <div style={{paddingLeft:"4vw", paddingRight:'4vw', paddingTop:'8vh', paddingBottom:'8vh'}}>
                <div className={'container-1'}>
                    <Slide top delay={100} duration={1600}>
                        <Zoom>
                        <Image className={"w-4/5 xs:w-3/5 md:w-2/4 xl:w-3/6"} style={{marginLeft:-15}} preview={false} src={'assets/logo/logo-for-light-background.png'} alt={"Trustlink"}/>
                        </Zoom>
                    </Slide>
                    <Slide top delay={100} duration={1600}>
                    <Zoom>
                    <div className={"grid grid-cols-12 gap-2"}>
                        <div className={'col-span-12 lg:col-span-24 xl:col-span-24 we-are-text'}>
                                <span>We Are&nbsp;</span>
                            {/* </Zoom>
                            </Slide> */}

                            {/* <Slide top delay={100} duration={1600}>
                                <Zoom> */}
                                <div className={'container-slider'}>
                                    <Carousel
                                        ref={carouselRef}
                                        dotPosition={'right'}
                                        dots={false}
                                        autoplay={true}
                                        // className={`text-slider-container`}
                                        speed={1000}
                                        autoplaySpeed={4000}
                                        style={textSliderStyles}
                                        beforeChange={(from, to)=>{
                                            setWidth(text[to].ref?.current?.offsetWidth*1.1);
                                            setActiveSlide(to+1);
                                            changeParticlePosition(to+1);
                                        }}
                                    >
                                        {
                                            text.map(prop => {
                                                return (
                                                    <div key={prop.label}>
                                                        <span className={'text-slider'} ref={prop.ref}>&nbsp;{prop.label}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Carousel>
                                    <div className={`text-slider-container text${activeSlide}Full`} style={{
                                        alignSelf:'flex-end',
                                        height:80,
                                        zIndex:1,
                                        width: contentWidth,
                                        position:'relative', top:-80}}/>
                                </div>
                        </div>
                        <div className={'col-span-12 lg:col-span-8 xl:col-span-9'}>


                        </div>
                    </div>
                    </Zoom>
                    </Slide>
                    <RenderMenu />
                </div>
            </div>
            <div className={'logo-accent'}>
                <Image preview={false} src={'/assets/accents/logo-big-edited.png'}/>
            </div>
            <div>
                <ParticlePage setChangeSlide={(val)=>changeParticlePosition = val} slide={activeSlide}/>
            </div>
        </div>
    )
}

UnderConstruction.getLayout = function Layout(page) {
    return <ParticlesLayout>
        {page}
    </ParticlesLayout>;
};

export default UnderConstruction;
