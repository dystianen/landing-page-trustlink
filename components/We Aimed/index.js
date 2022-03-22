import {Col, Image, Row} from "antd";

const WeAimed = () => {
    return (<>
            <Row className="ml-20 text-white h-auto bg-[#04204D]">
                <Col className="flex items-start" span={6} order={1}>
                {/*<Col span={6} order={1}>*/}
                    <Image preview={false} src={"../assets/we_aimed.png"}/>
                </Col>
                <Col className="ml-8 py-4 md:pt-14 lg:pt-8 2xl:ml-4 2xl:pt-8" span={10} order={2}>
                    <div className="montserrat text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                        We Aim To Be <span className="font-bold">The Most Advance</span> End-To-End <span className="font-bold">Digital Biometrics Solution Provider</span>
                    </div>
                    <div className="montserrat text-xs pt-4 lg:text-lg 2xl:pt-2 2xl:text-2xl">
                        Accomplish great contribution in the digitalized economic solution across various organizations and thrive and nurture infrastructure in Indonesia.
                    </div>
                </Col>
                {/*<Col span={4} offset={12} xs={{ order: 3 }} sm={{ order: 3 }} md={{ order: 3 }} lg={{ order: 3 }}>*/}
                {/*</Col>*/}
            </Row>
        </>
    )
}

export default WeAimed;
