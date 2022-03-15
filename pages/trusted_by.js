import React from "react";


const TrustedBy = () => {
    return (
        <div className={'flex flex-row justify-between items-center w-full min-h-screen'}>
            {/* text section */}
            <div className={' w-full '}>
                <span className={'text-[0.9em] tracking-[.19em] font-bold uppercase text-gray-500 text-opacity-30'} style={{fontFamily:'montserrat'}}>Always Reliable</span>
                <span className={'we-are-text'}>Trusted By.</span>
                <span style={{ fontSize: '3.4em', fontFamily: 'montserrat', fontWeight: '500', color:'#04204D', textTransform:'capitalize'}}>Clients & Partners</span>
            </div>

            {/* logos */}
            <div className={'bg-red-600 w-3/4 absolute  '}>
                <p> Logos</p>
            </div>
        </div> 
    )
}

export default TrustedBy;
