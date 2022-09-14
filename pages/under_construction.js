import React, {useRef, useState} from 'react';
import {Carousel, Image} from 'antd';
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import ParticlesLayout from "../components/Layout/ParticlesLayout";
import {ParticlePage} from "../components/Particle";
import {CarouselPage} from "../components/Carousel";

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
                    <Slide top delay={100} duration={1600}>
                        <Zoom>
                        <Image className={"w-4/5 xs:w-3/5 md:w-2/4 xl:w-3/6"} style={{marginLeft:-15}} preview={false} src={'assets/logo/logo-for-light-background-rotated.png'} alt={"Trustlink Master Logo"}/>
                        </Zoom>
                    </Slide>
                    <Slide top delay={100} duration={1600}>
                    <Zoom>
                    <div className={"grid grid-cols-12 gap-2"}>
                        <div className={'col-span-12 lg:col-span-24 xl:col-span-24 we-are-text'}>
                                <span>We Are&nbsp;</span>
                                <CarouselPage />
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
                <ParticlePage />
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
