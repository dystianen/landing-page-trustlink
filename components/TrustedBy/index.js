import { Carousel, Image } from "antd";
import { propertyOf } from "lodash";
import React from "react";
import {useMediaQuery} from 'react-responsive'

const TrustedBy = () => {
      const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})

    const logos = [
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6 ',
            src: 'assets/logo/adie-logo.png',
            priview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/banque-logo.png',
            priview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/alma-logo.png',
            priview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/bnp-logo.png',
            priview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/aria-logo.png',
            priview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/adie-logo.png',
            priview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/banque-logo.png',
            priview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/alma-logo.png',
            priview : false,
            height : 45
        },
        {
            class_name: 'flex justify-center border-r-2 items-center text-center bg-white py-6',
            src: 'assets/logo/aria-logo.png',
            priview : false,
            height : 45
        },
    ]

    return (
        <div className={'flex flex-row justify-between items-center w-full min-h-screen pl-20'}>
            {/* text section */}
            <div className={' w-full z-50 '}>
                <div className={'relative z-50'}>
                    <div className={'flex flex-row items-center z-50'}>
                        <hr style={{ width: '4em', border:'0', borderTop:'solid rgba(156, 163, 175) 3px'}}  className={ 'inline-block  opacity-30 mr-3 '}/>
                         <span className={'text-[1em] tracking-[.23em] font-bold uppercase text-gray-400 text-opacity-30'} style={{fontFamily:'montserrat'}}>Always Reliable</span>
                    </div>
                    <span className={'we-are-text'}>Trusted By.</span>
                    <span style={{ fontSize: '3.4em', fontFamily: 'montserrat', fontWeight: '500', color:'#04204D', textTransform:'capitalize'}} >Clients & Partners</span>
                </div>
                {/* logos */}
                <div className={'flex flex-row justify-end  mt-6 z-50'}>
                    <div className={"bg-gray-300  w-[95%]"}>
                        <Carousel dots={true} slidesToShow={ isDesktopOrLaptop ? 5: 3 }>
                                {logos.map((props, index) => {
                                    return (
                                        <div key={index} className={props.class_name}>
                                            <Image src={props.src} height={props.height} preview={ props.priview}/>
                                        </div>
                                    )
                                })}
                            </Carousel>
                    </div>
                </div>
                <div className={'flex justify-end -mt-52 z-0'}>
                    <div className={'h-[255px] w-5/6 bg-gray-200 ' }/>
                </div>
            </div>
        </div> 
    )
}

export default TrustedBy;
