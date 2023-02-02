import { Col, Row } from "antd";
import React from "react";
import CardBenefits from "./CardBenefits";

function Benefits(props) {
  const { icon, text, cardData } = props;
  return (
    <div className="bg-gradient-to-br from-[#F2F5FF] to-[#dfe2ee] min-h-[554px] max-h-full">
      <div className="w-1/2 pt-5 pb-5 mx-auto">
        <h1 className="text-2xl font-bold text-center text-[#333333] mt-5">
          Benefits
        </h1>
        <p className="text-lg text-[#333333] text-center">{text}</p>
      </div>
      <Row gutter={16} justify="center">
        {cardData?.map((data, idx) => {
          return (
            <Col lg={{ span: 5 }} md={{ span: 10 }} key={idx}>
              <CardBenefits image={data.image} tittle={data.tittle} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Benefits;
