import { Carousel, Image } from "antd";
import { propertyOf } from "lodash";
import React from "react";


const TrustedBy = () => {
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
        <div className={'flex flex-row justify-between items-center w-full min-h-screen'}>
            <div className={'h-[255px] w-5/6 bg-gray-200 z-10 absolute right-0 sm:top-[12rem]  ' }/>
            {/* text section */}
            <div className={' w-full z-50 '}>
                <div className={'block z-50'}>
                    <div className={'flex flex-row items-center z-50'}>
                        <hr style={{ width: '4em', border:'0', borderTop:'solid rgba(156, 163, 175) 3px'}}  className={ 'inline-block  opacity-30 mr-3 '}/>
                         <span className={'text-[1em] tracking-[.23em] font-bold uppercase text-gray-400 text-opacity-30'} style={{fontFamily:'montserrat'}}>Always Reliable</span>
                    </div>
                    <span className={'we-are-text'}>Trusted By.</span>
                    <span style={{ fontSize: '3.4em', fontFamily: 'montserrat', fontWeight: '500', color:'#04204D', textTransform:'capitalize'}}>Clients & Partners</span>
                </div>
                {/* logos */}
                <div className={'flex flex-row justify-end  mt-5 z-50'}>
                    <div className={"bg-gray-300  w-[95%]"}>
                            <Carousel autoplay dots={false} slidesToShow={5}>
                                {logos.map(props => {
                                    return (
                                        <div className={props.class_name}>
                                            <Image src={props.src} height={props.height} preview={ props.priview}/>
                                        </div>
                                    )
                                })}
                            </Carousel>
                    </div>
                  </div>
            </div>
        </div> 
    )
}

export default TrustedBy;
