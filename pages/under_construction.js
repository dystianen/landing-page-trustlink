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
                    <Image className={"w-3/5 sm:w-3/5 md:w-3/5 xl:w-3/6"} style={{marginLeft:-15}} preview={false} src={'assets/logo/logo-for-light-background.png'} alt={"Trustlink"}/>
                    <div className={"grid grid-cols-5 gap-4"}>
                        <span className={'col-span-5 xl:col-span-1 we-are-text'}>We Are</span>
                        <div className={'col-span-5 xl:col-span-4'}>
                            <div className={"slider-container"}>
                                <Carousel
                                    dotPosition={'right'}
                                    dots={false}
                                    autoplay={true}
                                    className={'text-slider-container'}
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
                            </div>

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
