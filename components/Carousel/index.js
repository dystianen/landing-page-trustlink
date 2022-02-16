import React, {useEffect, useRef, useState} from 'react';
import {Carousel} from "antd";

export const CarouselPage = () => {
    const [activeSlide, setActiveSlide] = useState(-1);
    const [contentWidth, setWidth] = useState('66.6%');

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

    const textSliderStyles = {
        // backgroundColor: "transparent linear-gradient(90deg, #FF6500 0%, #FFD1B300 100%) 0% 0% no-repeat padding-box"
        zIndex:2
    }

    let changeParticlePosition = () => {
        console.log('bruh123123', 'AAAAAAAAAAAA')
    }
    return (
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
    )
}