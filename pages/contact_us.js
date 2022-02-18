import React, {useEffect, useState} from 'react';
import {CloseOutlined, CheckOutlined} from '@ant-design/icons'
import Link from "next/link";
import {Button, Col, Form, Image, Input, Row, Avatar, message} from "antd";
import Zoom from 'react-reveal/Zoom';
import {useStore} from "../components/StoreProvider";

const ContactPage = () => {
    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const store = useStore();
    useEffect(() => {
        setShow(true)
    },[])

    const submitForm = () => {
        form
        .validateFields().then( res => {
            return store.contact_us.sendContactUs(res).then(res=>{
                setLoading(false);
                message.success('Successfully send your message!');
                form.resetFields();
                // alert('success')
            }).catch(err=>{
                message.error('Something wrong');
            })
        })
    }

    const submitFormNewsletter = () => {
        form2
            .validateFields().then( res => {
            return store.authentication.sendNewsletter(res).then(res=>{
                setLoading2(false);
                message.success('Successfully subscribed!');
                form2.resetFields();
                // alert('success')
            })
        })
    }
    return (
        <div className={'w-screen h-screen pb-10 overflow-y-auto'}>
            <div className={'flex justify-end pad-0'}>
            <div className={'w-8 lg:w-10 h-8 lg:h-10 flex justify-center items-center cursor-pointer bg-[#FF4A63]'} onClick={() => {
                    setShow(false)
                    window.location.href = 'under_construction'
                }}>
                    <Avatar shape="square" className={'bg-transparent'} size={36} icon={<CloseOutlined className={'text-[#FFF] centerIcon'} />} />
                </div>
            </div>

            <div className={'flex flex-col lg:flex-row min-h-full px-8 lg:px-10'}>
                <Zoom when={show} duration={500}>
                    <div className={'w-full lg:w-3/5 flex items-center relative justify-center lg:justify-start'} style={{backgroundColor: '#FE6601'}}>
                        <div className={'text-white pl-2 lg:pl-14'}>
                            <p className={'text-5xl lg:text-8xl font-bold mt-10 text-center lg:text-left lg:mt-0'}>Get in touch <br/>with us</p>
                            {/*<p className={'text-sm lg:w-72 pt-0 text-center lg:text-left'}>Sign Up to get notified when our website <br/> is launch. We have some great stuff <br/>coming to you. Stay tuned!</p>*/}
                            {/*<p className={'text-sm lg:w-72 pt-0 text-center lg:text-left'}>Please enter your information below <br/> and a Trustlink solution specialist will be in touch.</p>*/}
                            <p className={'text-sm lg:w-72 pt-0 text-center lg:text-left lg:text-xl'}>Sign Up and tell us how we can help. We’ll get in touch shortly</p>
                            {/*<Form*/}
                            {/*    layout={"vertical"}*/}
                            {/*    className={'pt-10 lg:pt-20 formNewsletter'}*/}
                            {/*    form={form2}*/}
                            {/*>*/}
                            {/*    <Row gutter={16}>*/}
                            {/*        <Col xs={{span: 22, offset:1}} sm={{span: 10}} md={{span: 10, offset:2}} lg={{span: 10, offset:1}} className={'text-center'}>*/}
                            {/*            <Form.Item*/}
                            {/*                name={'fullname'}*/}
                            {/*                rules={[*/}
                            {/*                    {*/}
                            {/*                        required: true,*/}
                            {/*                        message:'You must input your full name'*/}
                            {/*                    },*/}
                            {/*                ]}*/}
                            {/*            >*/}
                            {/*                <Input className={'placeholder-white border-transparent	text-white w-52 h-10'} style={{backgroundColor: '#FE944D'}} placeholder="Full Name"/>*/}
                            {/*            </Form.Item>*/}
                            {/*        </Col>*/}
                            {/*        <Col xs={{span: 22, offset:1}} sm={{span: 10}} md={{span: 10}} lg={{span: 10}} className={'text-center'}>*/}
                            {/*            <Form.Item*/}
                            {/*                name={'email'}*/}
                            {/*                rules={[*/}
                            {/*                    {*/}
                            {/*                        required: true,*/}
                            {/*                        message:'You must input your email'*/}
                            {/*                    },*/}
                            {/*                    { type: 'email' }*/}
                            {/*                ]}*/}
                            {/*            >*/}
                            {/*                <Input className={'placeholder-white border-transparent	w-52 text-white h-10'} style={{backgroundColor: '#FE944D'}} placeholder="Email"/>*/}
                            {/*            </Form.Item>*/}
                            {/*        </Col>*/}
                            {/*        <Col xs={{span: 22, offset:1}} sm={{span: 10}} md={{span: 20, offset:2}} lg={{span: 24}}  className={'text-center lg:text-left mb-8 lg:mb-2'}>*/}
                            {/*            <Button*/}
                            {/*                type="primary"*/}
                            {/*                size={'large'}*/}
                            {/*                loading={loading2}*/}
                            {/*                onClick={async () => {*/}
                            {/*                    setLoading(true);*/}
                            {/*                    await submitFormNewsletter();*/}
                            {/*                }}*/}
                            {/*                className="-ml-3">Get notified</Button>*/}
                            {/*        </Col>*/}
                            {/*    </Row>*/}
                            {/*    /!*<Row gutter={16}>*!/*/}
                            {/*    /!*    <Col xs={{span:0}} sm={{span:12}}></Col>*!/*/}
                            {/*    /!*    <Col xs={{span: 22}} sm={{span: 12}} md={{span: 12}} style={{display:'flex', justifyContent:'flex-end'}}>*!/*/}
                            {/*    /!*        <Form.Item>*!/*/}
                            {/*    /!*            <Button type={'primary'}>Subscribe</Button>*!/*/}
                            {/*    /!*        </Form.Item>*!/*/}
                            {/*    /!*    </Col>*!/*/}
                            {/*    /!*</Row>*!/*/}
                            {/*</Form>*/}
                            <div className={'pt-20 flex flex-row crop-div'}>
                            </div>
                            <div className={'crop-div'}>
                                <Image src={'/assets/accents/finger-print.png'} preview={false} className={'crop-img'}/>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom when={show} duration={500}>
                <div className={'w-full lg:w-2/5'} style={{backgroundColor: '#E6E9ED'}}>
                    <div className={'px-5 lg:px-11'}>
                        <Form
                            layout={"vertical"}
                            className={'pt-12 lg:pt-18 xl:pt-22'}
                            form={form}
                        >
                            <Row gutter={16}>
                                <Col xs={{span: 24}} sm={{span: 12}}>
                                    <Form.Item
                                        label={<label className={'text-gray-500 font-normal text-lg'}>First Name</label>}
                                        name={'firstname'}
                                        rules={[
                                            {
                                                required: true,
                                                message:'You must input First Name'
                                            },
                                        ]}>
                                        <Input className={'border-transparent h-10'} style={{backgroundColor: '#B4BCC9'}}/>
                                    </Form.Item>
                                </Col>
                                <Col xs={{span: 24}} sm={{span: 12}}>
                                    <Form.Item
                                        label={<label className={'text-gray-500 font-normal text-lg'}>Last Name</label>}
                                        name={'lastname'}
                                        rules={[
                                            {
                                                required: true,
                                                message:'You must input Last Name'
                                            },
                                        ]}>
                                        <Input className={'border-transparent h-10'} style={{backgroundColor: '#B4BCC9'}}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                label={<label className={'text-gray-500 font-normal text-lg'}>Company</label>}
                                name={'company'}
                                rules={[
                                    {
                                       required: true,
                                       message:'You must input your company'
                                    },
                                ]}>
                                <Input className={'border-transparent h-10'} style={{backgroundColor: '#B4BCC9'}}/>
                            </Form.Item>
                            <Form.Item
                                label={<label className={'text-gray-500 font-normal text-lg'}>Email (Company’s Email Only)</label>}
                                name={'email'}
                                rules={[
                                    {
                                        required: true,
                                        message:'You must input your company email'
                                    },
                                    { type: 'email' }
                                ]}>
                                <Input className={'border-transparent h-10'} style={{backgroundColor: '#B4BCC9'}}/>
                            </Form.Item>
                            <Form.Item
                                label={<label className={'text-gray-500 font-normal text-lg'}>Phone Number</label>}
                                name={'phone_number'}
                                rules={[
                                    {
                                        required: false,
                                        message:'You must input phone number'
                                    },
                                ]}>
                                <Input type={"number"} className={'border-transparent h-10 w-full validation'} style={{backgroundColor: '#B4BCC9'}}/>
                            </Form.Item>
                            <Form.Item
                                label={<label className={'text-gray-500 font-normal text-lg'}>How Can We Help?</label>}
                                name={'help'}
                                rules={[
                                    {
                                        required: false,
                                        message:'Please tell us how can we help you'
                                    },
                                ]}>
                                <Input.TextArea autoSize={{ minRows: 3, maxRows: 4 }} className={'border-transparent'} style={{backgroundColor: '#B4BCC9'}}/>
                            </Form.Item>
                            <div className={'flex justify-end xl:pt-10'}>
                                <Button
                                    loading={loading}
                                    type="primary"
                                    className={'rounded-none w-40 mb-8'}
                                    onClick={async () => {
                                        setLoading(true);
                                        await submitForm();
                                    }}
                                >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Zoom>
            </div>
        </div>
    )
}

export default ContactPage;
