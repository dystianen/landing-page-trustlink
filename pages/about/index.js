import { Image, Row, Col } from 'antd';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='w-sceen h-screen p-12'>
            <div className='bg-[#C1C1C1] h-full w-full grid grid-rows-3 grid-flow-col text-white'>
                <Row>
                    <Col span={6} className="bg-[#E6E9ED] text-center p-2">
                        <Image preview={false} className="w-72" style={{marginTop:'50%'}} src={'/assets/logo/logo-for-light-background.png'}/>
                    </Col>
                    <Col span={7}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3334781061417!2d106.82982881468574!3d-6.219681595497624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f7062b8557%3A0xeab1cb9306fa3551!2sThe%20H%20Tower!5e0!3m2!1sen!2sid!4v1644525588163!5m2!1sen!2sid" width="100%" height="100%" loading="lazy"></iframe>
                    </Col>
                    <Col span={11} className="bg-[#04204D] p-12">
                    <p className='text-5xl font-bold mt-40'>About.</p>
                    <p className='text-2xl'>
                        The Only Open Finance With Biometrics Ekyc Verification
                    </p>
                    </Col>
                    <Col span={6} style={{backgroundImage:"url('/assets/accents/finger-print.png')", backgroundRepeat:'no-repeat', backgroundPosition:"bottom", backgroundSize:340}} className="bg-[#FE6601]">
                    <p className="font-bold pl-8 pt-4 text-2xl">The Most Advance <br />
                       <p className='font-normal -mb-1'> End-To-End</p>
                        Digital Biometrics <br />
                        Solution Provider</p>
                    </Col>
                    <Col span={7} className="bg-[#FFB280] p-5">
                    <p>CALL US</p>
                    <p className='font-bold'>(021) 22902348</p>
                    <p>Mon - Fri (8.30 - 17.30)</p>
                    <p>EMAIL</p>
                    <p className='font-bold'>info@withtrustlink.com</p>
                    </Col>
                    <Col span={11} className="bg-[#04204D] p-12">
                    <p className='text-gray-400 -mt-20'>
                        We are the only company that provide the most advanced identity verification against Indonesian national database as the official Dukcapil partner in Platform Bersama that combine it with open finance facilitator for a seamless, simpler, and most secure financial data integration
                        </p>
                    </Col>
                </Row>
                {/* <Row className="relative">
                    <Col span={7} className="bg-[url('/assets/accents/finger-print.png')] bg-[#FE6601] bg-bottom-print">
                    <p className="font-bold pl-8 pt-4 text-2xl">The Most Advance <br />
                       <p className='font-normal -mb-1'> End-To-End</p>
                        Digital Biometrics <br />
                        Solution Provider</p>
                    </Col>
                    <Col span={8} className="bg-[#FFB280]">
                    <p>CALL US</p>
                    <p>(021) 22902348</p>
                    <p>Mon - Fri (8.30 - 17.30)</p>
                    <p>EMAIL</p>
                    <p>info@withtrustlink.com</p>
                    </Col>
                    <Col span={9}></Col>
                </Row> */}
            </div>
        </div>
    )
}

export default AboutPage;
