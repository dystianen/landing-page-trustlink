import React from 'react';
import {CloseOutlined} from '@ant-design/icons'
import Link from "next/link";
import {Button, Col, Form, Image, Input, Row} from "antd";

const ContactPage = () => {
    const [form] = Form.useForm();

    const submitForm = () => {
        form
        .validateFields().then( res => {
            console.log(res, 'result')
        })
    }
    return (
        <div className={'h-screen pb-20'}>
            <div className={'flex justify-end pad-0'}>
                <Link href={`/under_construction`} passHref>
                    <div className={'w-10 h-10 flex justify-center items-center cursor-pointer'} style={{backgroundColor: '#e6e9ed'}}>
                        <CloseOutlined style={{color: '#B4BCC9'}} />
                    </div>
                </Link>
            </div>

            <div className={'flex flex-row min-h-full px-10'}>
                <div className={'w-3/5 flex items-center relative'} style={{backgroundColor: '#FE6601'}}>
                    <div className={'text-white pl-14'}>
                        <p className={'text-5xl font-bold'}>Be the first <br/>to hear from us</p>
                        <p className={'text-sm w-72 pt-0'}>Sign Up to get notified whe our website <br/> is launch. We have some great stuff <br/>comin to you. Stay tuned!</p>

                        <Form
                            layout={"vertical"}
                            className={'pt-20'}
                        >
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item>
                                        <Input className={'placeholder-white border-transparent	text-white w-52 h-10'} style={{backgroundColor: '#FE944D'}} placeholder="Full Name"/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item>
                                        <Input className={'placeholder-white border-transparent	w-52 text-white h-10'} style={{backgroundColor: '#FE944D'}} placeholder="Email"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                        <div className={'pt-20 flex flex-row'}>
                        </div>
                    </div>
                    <Image style={{position:'relative', top:0, left:0}} src={'/assets/accents/finger-print.png'} preview={false}/>
                </div>
                <div className={'w-2/5'} style={{backgroundColor: '#E6E9ED'}}>
                    <div className={'pl-11 pr-10'}>
                        <Form
                            layout={"vertical"}
                            className={'pt-28'}
                            form={form}
                        >
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label={'First Name'}
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
                                <Col span={12}>
                                    <Form.Item
                                        label={'Last Name'}
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
                                label={'Company'}
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
                                label={'Email (Company’s Email Only)'}
                                name={'email'}
                                rules={[
                                    {
                                        required: true,
                                        message:'You must input email company'
                                    },
                                ]}>
                                <Input className={'border-transparent h-10'} style={{backgroundColor: '#B4BCC9'}}/>
                            </Form.Item>
                            <Form.Item
                                label={'Phone Number'}
                                name={'phone_number'}
                                rules={[
                                    {
                                        required: true,
                                        message:'You must input phone number'
                                    },
                                ]}>
                                <Input type={"number"} className={'border-transparent h-10 w-full validation'} style={{backgroundColor: '#B4BCC9'}}/>
                            </Form.Item>
                            <Form.Item
                                label={'How Can We Help?'}
                                rules={[
                                    {
                                        required: true,
                                        message:'You must input Last Name'
                                    },
                                ]}>
                                <Input.TextArea autoSize={{ minRows: 3, maxRows: 4 }} className={'border-transparent'} style={{backgroundColor: '#B4BCC9'}}/>
                            </Form.Item>
                            <div className={'flex justify-end pt-16'}>
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
            </div>
        </div>
    )
}

export default ContactPage;
