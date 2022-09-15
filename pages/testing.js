import React from 'react';
import {observer} from "mobx-react-lite";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
const Component1 = ()=>{
    return (
        <div className={'h-screen w-full bg-red-200'}>
            Component 1
        </div>
    )
}

const Component2 = ()=>{
    return (
        <div className={'h-screen w-full bg-green-200'}>
            Component 2
        </div>
    )
}
const Testing = observer(prop=>{
    return (
        <div className={'w-full'}>
            <ReactCompareSlider
                changePositionOnHover={true}
                itemOne={<Component1 />}
                itemTwo={<Component2 />}
                handle={(<div/>)}
            />
        </div>
    )
});

export default Testing;
