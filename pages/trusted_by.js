import React from "react";


const TrustedBy = () => {
    return (
        <div className={'flex flex-row justify-between items-center w-full min-h-screen'}>
            {/* text section */}
            <div className={' w-full '}>
                <div className={'block'}>
                    <div className={'flex flex-row items-center'}>
                        <hr style={{ width: '3em', border:'solid grey '}} className={ 'inline-block mr-2 opacity-25'}/>
                         <span className={'text-[0.9em] tracking-[.19em] font-bold uppercase text-gray-500 text-opacity-25'} style={{fontFamily:'montserrat'}}>Always Reliable</span>
                    </div>
                    <span className={'we-are-text'}>Trusted By.</span>
                    <span style={{ fontSize: '3.4em', fontFamily: 'montserrat', fontWeight: '500', color:'#04204D', textTransform:'capitalize'}}>Clients & Partners</span>
                </div>
            {/* logos */}
                <div className={'flex justify-end'}>
                    <div className={'bg-gray-300 w-5/6'}>
                        <p> Logos</p>
                    </div>
                  </div>
            </div>

        </div> 
    )
}

export default TrustedBy;
