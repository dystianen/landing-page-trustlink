import React, {useEffect, useState} from 'react';
import Particles from "react-tsparticles";

export const ParticlePage = (props) => {
    const {
        setChangeSlide = (val)=>{},
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
        console.log('bruh123123', "HAIII", val)
    }

    useEffect(()=>{
        setChangeSlide(changeParticlePosition)
    }, [])

    return (
        <div className={`particle${slide}`}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                width={'25%'}
                height={'35vh'}
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
                                opacity: 0.8,
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
                            distance: 150,
                            enable: true,
                            opacity:0.8 ,
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
                                area: 1600,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.8,
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
