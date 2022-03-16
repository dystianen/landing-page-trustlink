import {Image} from "antd";

// const we_aimed = () => {
//   return (<>
//
//       <div className="mt-80 bg-[#04204D] text-white flex h-80 xss:h-72 sm:ml-20 sm:mt-20 lg:h-81 md:h-72">
//           <Image className="pt-[249px] xss:pt-[207px] 2xl:pt-5 xl:pt-[73px] lg:pt-16 md:pt-[139px] " preview={false} src={"/assets/icon.png"}/>
//           <div className="2xl:pl-10 2xl:py-10">
//               <div className="px-10 pt-8 text-lg fold:px-4 xss:pt-4 md:text-2xl lg:text-3xl 2xl:text-5xl">
//                   We Aim To Be The Most Advance End-To-End Digital Biometrics Solution Provider
//               </div>
//               <div className="text-xs py-8 px-10 fold:px-4 xss:pt-4 sm:pt-4 md:text-sm lg:text-lg 2xl:text-2xl">
//                   Accomplish great contribution in the digitalized economic solution across various organizations and thrive and nurture infrastructure in Indonesia.
//               </div>
//           </div>
//     </div>
//   </>
//     )
// }

const we_aimed = () => {
    return (<>

            <div className="sm:ml-20 mt-80 sm:mt-20 lg:h-81 h-84 md:h-72 bg-[#04204D] text-white flex">
                {/*<div className="text-3xl sm:text-xs pt-20 px-96 ">*/}
                <Image className="pt-80 2xl:pt-5 xl:pt-[46px] lg:pt-[119px] md:pt-[141px] " preview={false} src={"/assets/icon.png"}/>
                <div className="2xl:pl-10 2xl:py-10">
                    <div className="px-10 pt-8 text-xl xss:pt-16 md:text-2xl lg:text-3xl 2xl:text-5xl">
                        We Aim To Be The Most Advance End-To-End Digital Biometrics Solution Provider
                    </div>
                    {/*<div className="text-xs pt-4 px-96 sm:text-xs sm:pt-4 sm:px-10">*/}
                    <div className="text-sm sm:pt-4 px-10 xss:px-12 lg:text-lg md:text-sm py-8 2xl:text-2xl">
                        Accomplish great contribution in the digitalized economic solution across various organizations and thrive and nurture infrastructure in Indonesia.
                    </div>
                </div>
            </div>
        </>
    )
}

export default we_aimed;
