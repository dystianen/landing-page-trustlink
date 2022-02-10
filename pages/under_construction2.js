import React from 'react';
import { Image } from 'antd';

const UnderConstruction = () => {
    const menu = [
        {
            label: "more info"
        },
        {
            label: "contact us"
        }
    ];

    const RenderMenu = () => (
        <div className={'menu-container'}>
            {menu.map(prop => {
                return (
                    <div className={'menu-item'} key={prop.label}>
                        <div className={'menu-button'}></div>
                        <div className={'menu-label'}>{prop.label}</div>
                    </div>
                )
            })}
        </div>
    )
    return (
        <div className={"w-screen h-screen under-construction"}>
            <div style={{paddingLeft:"4vw", paddingRight:'4vw', paddingTop:'8vh', paddingBottom:'8vh'}}>
                <div className={'container-1'}>
                    <Image className={"w-3/5 sm:w-3/5 md:w-3/5 xl:w-3/6"} style={{marginLeft:-15}} preview={false} src={'assets/logo/logo-for-light-background.png'} alt={"Trustlink"}/>
                    <div>
                        <span className={'we-are-text'}>We Are</span>
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
