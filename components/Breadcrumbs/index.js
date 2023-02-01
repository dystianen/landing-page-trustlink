import React from "react";
import { useRouter } from "next/router";

const Breadcrumbs = (props) => {
  const { currentProduct } = props;
  const router = useRouter();
  console.log("router", router);
  return (
    <div className={"justify-center flex"}>
      <div className="text-[#bcbcbc]">Home</div>
      <div className="text-[#bcbcbc] ml-3">/</div>
      <div className="text-[#bcbcbc] ml-3">Product</div>
      <div className="text-[#bcbcbc] ml-3">/</div>
      <div className="text-[#04204D] font-bold ml-3"> {currentProduct} </div>
    </div>
  );
};

export default Breadcrumbs;
