import React, {useRef, useState} from 'react';
import {Carousel, Image} from 'antd';
import Link from "next/link";

const UnderConstruction = () => {
    const [activeSlide, setActiveSlide] = useState(-1);
    const [contentWidth, setWidth] = useState('50.6%');
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
            label: "Coming Soon",
            ref: useRef(null)
        },
        {
            label: "Analytic Platforms",
            ref: useRef(null)
        },
        {
            label: "Take the lead",
            ref: useRef(null)
        },
        {
            label: "The future",
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


    return (
        <div className={"w-screen h-screen under-construction"}>
            <div style={{paddingLeft:"4vw", paddingRight:'4vw', paddingTop:'8vh', paddingBottom:'8vh'}}>
                <div className={'container-1'}>
                    <Image className={"w-4/5 xs:w-3/5 md:w-2/4 xl:w-3/6"} style={{marginLeft:-15}} preview={false} src={'assets/logo/logo-for-light-background.png'} alt={"Trustlink"}/>
                    <div className={"grid grid-cols-12 gap-2"}>
                        <div className={'col-span-12 lg:col-span-24 xl:col-span-24 we-are-text'}>
                            <span>We Are&nbsp;</span>
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
                                    }}
                                >
                                    {
                                        text.map(prop => {
                                            return (
                                                <div key={prop.label}>
                                                    <span className={'text-slider'} ref={prop.ref}>{prop.label}</span>
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
                    <RenderMenu />
                </div>
            </div>
            <div className={'logo-accent'}>
                <Image preview={false} src={'/assets/accents/logo-big.png'}/>
            </div>
        </div>
    )
}

export default UnderConstruction;
