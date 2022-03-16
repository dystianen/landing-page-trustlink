import { Image } from "antd";
import React from "react";


const TrustedBy = () => {
    return (
        <div className={'flex flex-row justify-between items-center w-full min-h-screen'}>
            {/* text section */}
            <div className={' w-full '}>
                <div className={'block'}>
                    <div className={'flex flex-row items-center'}>
                        <hr style={{ width: '4.5em', border:'0', borderTop:'solid rgba(156, 163, 175) 3px'}}  className={ 'inline-block  opacity-30 mr-5 '}/>
                         <span className={'text-[1em] tracking-[.23em] font-bold uppercase text-gray-400 text-opacity-30'} style={{fontFamily:'montserrat'}}>Always Reliable</span>
                    </div>
                    <span className={'we-are-text'}>Trusted By.</span>
                    <span style={{ fontSize: '3.4em', fontFamily: 'montserrat', fontWeight: '500', color:'#04204D', textTransform:'capitalize'}}>Clients & Partners</span>
                </div>
                {/* logos */}
                <div className={'flex flex-row justify-end  mt-5'}>
                    <div className={"bg-gray-300  w-[95%]"}>
                        <div className={'grid grid-cols-5 divide-x-[2px] items-center bg-white text-center w-full'}>
                            <div className={'flex justify-center items-center h-20'}>
                                <Image src={'assets/logo/adie-logo.png'} preview={false} width={85} />
                            </div>
                            <div className={'flex justify-center items-center h-20'}>
                                <Image src={'assets/logo/banque-logo.png'} preview={false} width={175} />
                            </div>
                            <div className={'flex justify-center items-center h-20'}>
                                <Image src={'assets/logo/alma-logo.png'} preview={false} width={85} />
                            </div>
                            <div className={'flex justify-center items-center h-20'}>
                                <Image src={'assets/logo/bnp-logo.png'} preview={false} width={175} />
                            </div>
                            <div className={'flex justify-center items-center h-20'}>
                                <Image src={'assets/logo/aria-logo.png'} preview={false} width={105} />
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
        </div> 
    )
}

export default TrustedBy;
