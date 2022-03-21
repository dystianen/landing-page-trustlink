import React, {useEffect, useState} from 'react';
import Particles from "react-tsparticles";

export const ParticlesTrusted = (props) => {
    const {
        setChangeSlide = (val)=>{},
        opacity=0.5,
        numberValue=180,
        numberDensity=3200,
        distance=150,
        dimention={},
        className="",
        slide
    } = props
    const [slideActive, setSlideActive] = useState(1);
    const particlesInit = (main) => {
        // console.log(main);
    };

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    const changeParticlePosition = (val) => {

    }

    useEffect(()=>{
        setChangeSlide(changeParticlePosition)
    }, [])

    return (
        <div className={``}>
            <Particles
                id="tsparticles"
                className={className}
                init={particlesInit}
                loaded={particlesLoaded}
                {
                    ...dimention
                }
                // width={'25%'}
                // height={'35vh'}
                options={{
                    background: {
                        color: {
                            value: 'red',
                        },
                    },
                    fullScreen: {
                        enable: false,
                        zIndex:2
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.5,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#FE944D","#707070"],
                        },
                        links: {
                            color: "#FE944D",
                            distance: distance,
                            enable: true,
                            opacity:0.5 ,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: numberDensity,
                            },
                            value: numberValue,
                        },
                        opacity: {
                            value: opacity,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}
