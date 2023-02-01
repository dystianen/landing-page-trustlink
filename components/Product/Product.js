import React from "react";
import Image from "next/image";
import Breadcrumbs from "../Breadcrumbs";
import ReactPlayer from "react-player";

const Product = (props) => {
  const { breadcrumb, text, image, video } = props;
  return (
    <section className="pt-6 bg-[#f5f5f5] relative z-10">
      <Breadcrumbs currentProduct={breadcrumb} />
      <div className="flex justify-between">
        <div className="mx-auto mt-20 mr-4">
          <div className="max-w-[500px]">
            <p className="text-[#333333] text-2xl">{text}</p>
          </div>
          <div className="mt-12">
            <button className="mr-4 border-[1.5px] border-[#FF6600] px-7 py-2 text-[#FF6600] font-medium rounded-full">
              View API Docs
            </button>
            <button className="text-white bg-gradient-to-b from-[#f9ab77] to-[#FF7113] px-[1.76rem] py-[0.6rem] rounded-full">
              Contact Us
            </button>
          </div>
        </div>
        {video ? (
          <ReactPlayer url={video} playing={true} loop={true} />
        ) : (
          <div>
            <Image src={image} alt="laptop" width={600} height={600} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;
