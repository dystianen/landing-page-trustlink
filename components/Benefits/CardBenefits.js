import React from "react";
import Image from "next/image";

function CardBenefits(props) {
  const { image, tittle } = props;
  return (
    <div className="min-w-full p-10 max-w-screen-2xl">
      <div className="w-full overflow-hidden rounded-xl lg:w-[330px] md:h-4/5 sm:w-[339px] xs:[339px] lg shadow-lg bg-[#04204D]">
        <div className="flex justify-center object-center mt-10 align-middle">
          {image && <Image src={image} width={70} height={70} objectFit="cover" alt="image"  loading="eager" />}
        </div>

        <div className="px-6 py-4">
          <div className="pt-3 pb-5 mb-2 text-xl font-bold text-center text-white">
            {tittle}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBenefits;
