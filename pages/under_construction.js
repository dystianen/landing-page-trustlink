import React from 'react';
import {Carousel, Image} from 'antd';
import Link from "next/link";

const UnderConstruction = () => {
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
            label: "Coming Soon"
        },
        {
            label: "Analytic Platforms"
        },
        {
            label: "Take the lead"
        },
        {
            label: "The future"
        }
    ];

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


    return (
        <div className={"w-screen h-screen under-construction"}>
            <div style={{paddingLeft:"4vw", paddingRight:'4vw', paddingTop:'8vh', paddingBottom:'8vh'}}>
                <div className={'container-1'}>
                    <Image className={"w-4/5 xs:w-3/5 md:w-2/4 xl:w-3/6"} style={{marginLeft:-15}} preview={false} src={'assets/logo/logo-for-light-background.png'} alt={"Trustlink"}/>
                    <div className={"grid grid-cols-12 gap-2"}>
                        <div className={'col-span-12 lg:col-span-24 xl:col-span-24 we-are-text'}>
                            <span>We Are&nbsp;</span>
                                <Carousel
                                    dotPosition={'right'}
                                    dots={false}
                                    autoplay={true}

                                    speed={1000}
                                    autoplaySpeed={4000}
                                >
                                    {
                                        text.map(prop => {
                                            return (
                                                <div key={prop.label}>
                                                    <span className={'text-slider'}>{prop.label}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </Carousel>
                            {/*<div className={"slider-container"}>*/}
                            {/*    <Carousel*/}
                            {/*        dotPosition={'right'}*/}
                            {/*        dots={false}*/}
                            {/*        autoplay={true}*/}
                            {/*        className={'text-slider-container'}*/}
                            {/*        speed={1000}*/}
                            {/*        autoplaySpeed={4000}*/}
                            {/*    >*/}
                            {/*        {*/}
                            {/*            text.map(prop => {*/}
                            {/*                return (*/}
                            {/*                    <div key={prop.label}>*/}
                            {/*                        <span className={'text-slider'}>{prop.label}</span>*/}
                            {/*                    </div>*/}
                            {/*                )*/}
                            {/*            })*/}
                            {/*        }*/}
                            {/*    </Carousel>*/}
                            {/*</div>*/}
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
