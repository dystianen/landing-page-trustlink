import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Row, message, Divider, Image} from "antd";
import {useStore} from "../StoreProvider";
import {observer} from "mobx-react-lite";
import {useTranslation} from "next-i18next";

const ContactUs = observer(({sectionRef}) => {
    const [form] = Form.useForm();
    const [form2] = Form.useForm();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const store = useStore();
    const { t } = useTranslation('common');

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
            <div className={'w-full relative section-most-top'} id='contact' ref={sectionRef}>
                <div className={'h-full contact-bg absolute -left-20 md:-left-16 lg:-left-12 xl:left-0 top-5'}>
                    <Image preview={false} className="h-full w-auto" src={'/assets/images/accent-home-sectionContact-1.jpg'}/>
                </div>
                <div className={'h-full contact-bg absolute right-0 top-5'}>
                    <Image preview={false} className="h-full w-auto" src={'/assets/images/accent-home-sectionContact-2.jpg'}/>
                </div>
                <div className={'w-full flex justify-center mb-10'} >
                    <div className={'montserrat'}>
                        <div className={'flex flex-row items-center'}>
                            <div className={'w-16 h-[2px] mr-6 opacity-50'} style={{backgroundColor: '#818FA6'}}/>
                            <p className={'text-sm mb-0 text-center text-[#818FA6] tracking-widest'}>{t('Let us Know')}</p>
                        </div>
                        <div className={'flex flex-row items-end'}>
                            <p className={'text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-0 text-[#1D365F] mr-4 sm:mr-8'}>{t('Intouch')}</p>
                            <p className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1D365F] mb-0 font-medium'}>{t('Ask Anything')}</p>
                        </div>
                    </div>
                </div>
                <div className={'flex justify-center w-full'} >
                    <div className={'w-[80%] lg:w-8/12 xl:w-[52%] bg-white z-30'}>
                        <div className={'px-6 sm:px-12 md:px-20 pt-6 sm:pt-12 md:pt-20 pb-6 md:pb-10'}>
                            <Form layout={"vertical"} form={form}>
                                <Row gutter={16}>
                                    <Col xs={{span: 24}} sm={{span: 12}}>
                                        <Form.Item
                                            label={<label className={'text-sm sm:text-base montserrat'}>{t('First Name')}</label>}
                                            name={'firstname'}
                                            rules={[
                                                {
                                                    required: true,
                                                    message:'You must input First Name'
                                                },
                                            ]}>
                                            <Input
                                                className={'border rounded border-[#D4D4D8] h-12 montserrat text-sm sm:text-base'}
                                                placeholder={t('Enter your first name')}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{span: 24}} sm={{span: 12}}>
                                        <Form.Item
                                            label={<label className={'text-sm sm:text-base montserrat'}>{t('Last Name')}</label>}
                                            name={'lastname'}
                                            rules={[
                                                {
                                                    required: true,
                                                    message:'You must input Last Name'
                                                },
                                            ]}>
                                            <Input
                                                className={'border rounded border-[#D4D4D8] h-12 montserrat text-sm sm:text-base'}
                                                placeholder={t('Enter your last name')}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item
                                    label={<label className={'text-sm sm:text-base montserrat'}>{t('Company')}</label>}
                                    name={'company'}
                                    rules={[
                                        {
                                            required: true,
                                            message:'You must input your company'
                                        },
                                    ]}>
                                    <Input
                                        className={'border rounded border-[#D4D4D8] h-12 montserrat text-sm sm:text-base'}
                                        placeholder={t('Enter your company name')}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label={<label className={'text-sm sm:text-base montserrat'}>Email ({t('Company Email Only')})</label>}
                                    name={'email'}
                                    rules={[
                                        {
                                            required: true,
                                            message:'You must input your company email'
                                        },
                                        { type: 'email' }
                                    ]}>
                                    <Input
                                        className={'border rounded border-[#D4D4D8] h-12 montserrat text-sm sm:text-base'}
                                        placeholder={t('Enter your email')}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label={<label className={'text-sm sm:text-base montserrat'}>{t('Phone Number')}</label>}
                                    name={'phone_number'}
                                    rules={[
                                        {
                                            required: true,
                                            message:'You must input phone number'
                                        },
                                    ]}>
                                    {/*<Input type={"number"} className={'border-transparent border-[1px] rounded border-solid border-gray-400 h-10 w-full validation'} />*/}
                                    <Input
                                        className={'border rounded border-[#D4D4D8] h-12 montserrat text-sm sm:text-base'}
                                        placeholder={t('Enter your phone number')}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label={<label className={'text-sm sm:text-base montserrat'}>{t('How Can We Help')}</label>}
                                    name={'help'}
                                    rules={[
                                        {
                                            required: true,
                                            message:'Please tell us how can we help you'
                                        },
                                    ]}>
                                    <Input.TextArea
                                        autoSize={{ minRows: 3, maxRows: 4 }}
                                        className={'border rounded border-[#D4D4D8] h-12 montserrat text-sm sm:text-base'}
                                        placeholder={t('Enter your inquiries')}
                                    />
                                </Form.Item>
                                <div className={'flex justify-end'}>
                                    <Button
                                        loading={loading}
                                        className={'rounded-lg flex justify-center items-center bg-[#04204D] text-white text-base sm:text-lg h-12 w-1/2 montserrat'}
                                        onClick={async () => {
                                            setLoading(true);
                                            await submitForm();
                                        }}
                                    >
                                        {t('Submit')}
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
    )
})

export default ContactUs;
