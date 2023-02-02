import {Image, Typography} from "antd";
import React, {useState} from "react";
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';


const {Text, Title} = Typography;

const ProductsDropdownOverlay = (props) => {
    const router = useRouter();
    const {menu, setMenu = () => {}} = props;
    const products = [
        {
            image: "logo-trust-verify.png",
            name: "Verify",
            productIndex: 0,
        },
        {
            image: "logo-trust-scan.png",
            name: "Scan",
            productIndex: 1,
        },
        {
            image: "incode-crop.png",
            name: "incode",
            productIndex: 3,
        },
        {
            image: "logo-trust-live.png",
            name: "Live",
            productIndex: 2,
        },
        {
            image: "logo-trust-connect.png",
            name: "Connect",
            productIndex: 3,
        },
        // {
        //   image: "logo-trust-vision.png",
        //   name: "Vision",
        //   productIndex: 4,
        // },
    ];

    console.log(menu, 'ini menu')

    const currentCompo = () => (
        <div className="w-11/12 lg:w-11/12 xl:w-10/12 2xl:w-10/12 py-11 mx-auto space-x-3 flex justify-center">
            <div className="w-4/12 flex flex-col space-y-4 pr-2 2xl:pr-10">
                <div className="font-bold text-3xl">Products</div>
                <div className="text-lg text-grey">Our comprehensive solutions will enable your business to make faster and accurate decisions</div>
            </div>
            <div className="w-full xl:w-10/12 2xl:w-7/12 grid grid-cols-3 xl:grid-cols-3 gap-3">
                {products.map((items, index) => {
                    return (
                        items.name === 'incode' ? (
                            <div key={index} id={'click-header-products-incode'} className="click-header-products-incode w-44 xl:w-48 flex items-center space-x-2 xl:space-x-3 cursor-pointer" onClick={() => window.open('https://incode.com/products/incode-omni/', "_blank")}>
                                <div className="flex items-center usecase-img click-header-products-incode">
                                    <Image preview={false} src={`/assets/images/${items.image}`} alt={`Trustlink Trust ${items.name}`} className={"p-2 w-full h-full click-header-products-incode"} />
                                </div>
                                {/*<RightOutlined className={"ml-2 text-lg"} />*/}
                                <div className={`arrow-right click-header-products-trust-${items.name}`} />
                            </div>
                        ) : (
                            <div id={`click-header-products-trust-${items.name}`} key={index} className={`click-header-products-trust-${items.name} flex h-full w-full items-center space-x-2 xl:space-x-3 p-0 cursor-pointer border-none`} onClick={() => onClickProduct(items.productIndex)}>
                                <div className={`flex items-center click-header-products-trust-${items.name}`}>
                                    <div className={`w-[4.2rem] h-[4.2rem] xl:w-20 xl:h-20 bg-[#fff0e6] border-[2px] xl:border-3 border-[#FF6703] rounded-full usecase-img click-header-products-trust-${items.name} `}>
                                        <Image preview={false} src={`/assets/images/${items.image}`} alt={`Trustlink Trust ${items.name}`} className={`p-5 w-[4.2rem] h-[4.2rem] xl:w-20 xl:h-20 click-header-products-trust-${items.name} `} />
                                    </div>
                                    <div className={`text-left w-32 font-semibold text-lg ml-2 click-header-products-trust-${items.name} `}>
                                        Trust<span className={`text-orange click-header-products-trust-${items.name}`}>{items.name}</span>
                                    </div>
                                </div>
                                {/*<RightOutlined className={"ml-2 text-lg"} />*/}
                                <div className={`arrow-right click-header-products-trust-${items.name}`} />
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    )

    const menuList = () => {
        return menu === 2 ? ( <>
                <Fade cascade bottom duration={1000}>
                    <div className="h-full w-2/6 rounded-l-3xl flex flex-col px-10 py-9 justify-between montserrat text-[16px] font-medium">
                        <Text className={'cursor-pointer'} onClick={() => router.push('product/account-information')}>OCR</Text>
                        <Text className={'cursor-pointer'} onClick={() => router.push('product/transaction-history')}>Transaction History</Text>
                        <Text className={'cursor-pointer'} onClick={() => router.push('product/e-commerce-and-e-wallet-data')}>E-Commerce and E-Wallet Data</Text>
                    </div>
                    <div className="h-full w-2/6 rounded-l-3xl flex flex-col px-10 py-9 justify-start montserrat text-[16px] font-medium">
                        <Text className={'cursor-pointer'}>Income and Employment Verification</Text>
                    </div>
                </Fade>
                </>
            ) : menu === 1 && (
            <Fade cascade bottom duration={1000}>
                <div className="h-full w-2/6 rounded-l-3xl flex flex-col px-10 py-9 justify-between montserrat text-[16px] font-medium">
                    <Text className={'cursor-pointer'} onClick={() => router.push('product/account-information')}>OCR</Text>
                    <Text className={'cursor-pointer'} onClick={() => router.push('product/passive-liveness')}>Passive Liveness</Text>
                    <Text className={'cursor-pointer'} onClick={() => router.push('product/digital-signature')}>Digital Signature with e-KYC</Text>
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

export default ProductsDropdownOverlay;