import React from "react";
import {useRouter} from "next/router";

const Breadcrumbs = ( props ) => {
    const { currentProduct } = props
    const router = useRouter()
    console.log("router", router)
    return <div className={'justify-center flex'}>
        Home / Product / <div style={{color: '#04204D'}}> {currentProduct} </div>
    </div>
}

export default Breadcrumbs