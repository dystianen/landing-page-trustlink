import React from 'react';
import {CloseOutlined} from '@ant-design/icons'
import Link from "next/link";
import {Button, Col, Form, Image, Input, Row} from "antd";
import Zoom from 'react-reveal/Zoom';

const ContactPage = () => {
    const [form] = Form.useForm();

    const submitForm = () => {
        form
        .validateFields().then( res => {
            console.log(res, 'result')
        })
    }
    return (
        <div className={'w-screen h-screen pb-20 overflow-y-auto lg:overflow-y-hidden'}>
            <div className={'flex justify-end pad-0'}>
                <Link href={`/under_construction`} passHref>
                    <div className={'w-9 h-9 flex justify-center items-center cursor-pointer'} style={{backgroundColor: '#e6e9ed'}}>
                        <CloseOutlined style={{color: '#B4BCC9'}} />
                    </div>
                </Link>
            </div>

            <div className={'flex flex-col lg:flex-row min-h-full px-3 lg:px-10'}>
                <Zoom>
                    <div className={'w-full lg:w-3/5 flex items-center relative justify-center lg:justify-start'} style={{backgroundColor: '#FE6601'}}>
                        <div className={'text-white pl-2 lg:pl-14'}>
                            <p className={'text-4xl lg:text-5xl font-bold mt-10 text-center lg:text-left lg:mt-0'}>Be the first <br/>to hear from us</p>
                            <p className={'text-sm lg:w-72 pt-0 text-center lg:text-left'}>Sign Up to get notified whe our website <br/> is launch. We have some great stuff <br/>comin to you. Stay tuned!</p>

                            <Form
                                layout={"vertical"}
                                className={'pt-10 lg:pt-20'}
                            >
                                <Row gutter={16}>
                                    <Col xs={{span: 22}} sm={{span: 12}} md={{span: 12}} className={'text-center'}>
                                        <Form.Item>
                                            <Input className={'placeholder-white border-transparent	text-white w-52 h-10'} style={{backgroundColor: '#FE944D'}} placeholder="Full Name"/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{span: 22}} sm={{span: 12}} md={{span: 12}} className={'text-center'}>
                                        <Form.Item>
                                            <Input className={'placeholder-white border-transparent	w-52 text-white h-10'} style={{backgroundColor: '#FE944D'}} placeholder="Email"/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                            <div className={'pt-20 flex flex-row crop-div'}>
                            </div>
                            <div className={'crop-div'}>
                                <Image src={'/assets/accents/finger-print.png'} preview={false} className={'crop-img'}/>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom>
                <div className={'w-full lg:w-2/5'} style={{backgroundColor: '#E6E9ED'}}>
                    <div className={'px-5 lg:px-11'}>
                        <Form
                            layout={"vertical"}
                            className={'pt-12 lg:pt-28'}
                            form={form}
                        >
                            <Row gutter={16}>
                                <Col xs={{span: 24}} sm={{span: 12}}>
                                    <Form.Item
                                        label={<label className={'text-gray-500 font-normal text-lg'}>First Name</label>}
                                        name={'firstname'}
                                        rules={[
                                            {
                                                required: false,
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
                                                required: false,
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
                                       required: false,
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
                                        required: false,
                                        message:'You must input email company'
                                    },
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
                                rules={[
                                    {
                                        required: false,
                                        message:'You must input Last Name'
                                    },
                                ]}>
                                <Input.TextArea autoSize={{ minRows: 3, maxRows: 4 }} className={'border-transparent'} style={{backgroundColor: '#B4BCC9'}}/>
                            </Form.Item>
                            <div className={'flex justify-end pt-10'}>
                                <Button
                                    type="primary"
                                    className={'rounded-none w-40'}
                                    onClick={async () => {
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
