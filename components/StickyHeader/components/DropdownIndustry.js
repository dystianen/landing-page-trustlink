import {Image, Typography} from "antd";
import React, {useState} from "react";
import Fade from 'react-reveal/Fade';


const {Text, Title} = Typography;

const IndustryDropdownOverlay = (props) => {
    const {menu, setMenu = () => {}} = props;

    const menuList = () => {
        return menu === 2 ? ( <>
                <Fade cascade bottom duration={1000}>
                    <div className="h-full w-2/6 rounded-l-3xl flex flex-col px-10 py-9 justify-between montserrat text-[16px] font-medium">
                        <Text className={'cursor-pointer'}>Lending</Text>
                    </div>
                </Fade>
                </>
            ) : menu === 1 && (
            <Fade cascade bottom duration={1000}>
                <div className="h-full w-2/6 rounded-l-3xl flex flex-col px-10 py-9 justify-between montserrat text-[16px] font-medium">
                    <Text className={'cursor-pointer'}>Bank & Fintech</Text>
                    <Text className={'cursor-pointer'}>Travel</Text>
                    <Text className={'cursor-pointer'}>Hospitaliy</Text>
                </div>
            </Fade>
        )
    }

    return (
        <div className="bg-white drop-shadow-lg mt-3 w-[70vw] max-h-[15rem] h-[15rem] rounded-3xl flex justify-start">
            {/*{currentCompo()}*/}
            <div className={`h-full bg-[#F1F3F6] w-2/6 rounded-l-3xl px-2 py-2  `}>
                <div className={`flex flex-col xl:p-4 h-1/2 ${menu === 1 && 'bg-[#C0E0F0]'} rounded-l-3xl`} onClick={() => setMenu(1)}>
                    <Text className={'text-[16px] font-bold'}>Identity Verification</Text>
                    <Text className={'text-[14px]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                </div>
                <div className={`flex flex-col xl:p-4 h-1/2 ${menu === 2 && 'bg-[#C0E0F0]'} rounded-l-3xl`} onClick={() => setMenu(2)}>
                    <Text className={'text-[16px] font-bold'}>Open Finance</Text>
                    <Text className={'text-[14px]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                </div>
            </div>
            {menuList()}
        </div>
    )
};

export default IndustryDropdownOverlay;