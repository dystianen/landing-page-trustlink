import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Row, message, Divider} from "antd";
import {useStore} from "../StoreProvider";
import {observer} from "mobx-react-lite";

const Intouch = observer(() => {
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
        // <div className={'w-screen h-screen pb-10 overflow-y-auto overflow-x-hidden'}>

            <div className={'min-h-full pl-8 lg:pl-10 w-full'}>
                <div className={'w-full lg:w-3/5 flex relative justify-center lg:justify-start'} >
                    <div className={'lg:pl-14'} style={{fontFamily: 'montserrat'}}>
                        <div className={'flex flex-row items-center'}>
                            <div className={'w-1/5 h-px mr-6'} style={{backgroundColor: '#818FA6'}}/>
                            <p className={'lg:text-xl mb-2 text-center lg:text-left lg:mt-0'} style={{color: '#818FA6'}}> FIRST TO KNOW</p>
                        </div>
                        <p className={'text-5xl lg:text-7xl font-bold mb-2 text-center lg:text-left lg:mt-0'} style={{color: '#1D365F'}}>Intouch.</p>
                        <p className={'lg:text-5xl'} style={{color: '#1D365F'}}>Ask anything.</p>
                    </div>
                </div>
                <div className={'flex justify-end'}>
                    <div className={'lg:w-2/3 md:w-3/4 sm:w-3/4'} style={{backgroundColor: '#E6E9ED'}}>
                        <div className={'px-5 lg:px-11'}>
                            <Form
                                layout={"vertical"}
                                className={'pt-12 lg:pt-18 xl:pt-22'}
                                form={form}
                            >
                                <Row gutter={16}>
                                    <Col xs={{span: 24}} sm={{span: 12}}>
                                        <Form.Item
                                            label={<label className={'text-gray-500 font-normal lg:text-xl '}>First Name</label>}
                                            name={'firstname'}
                                            rules={[
                                                {
                                                    required: true,
                                                    message:'You must input First Name'
                                                },
                                            ]}>
                                            <Input className={'border-transparent border-[1px] rounded border-solid border-gray-400 h-10'} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={{span: 24}} sm={{span: 12}}>
                                        <Form.Item
                                            label={<label className={'text-gray-500 font-normal lg:text-xl'}>Last Name</label>}
                                            name={'lastname'}
                                            rules={[
                                                {
                                                    required: true,
                                                    message:'You must input Last Name'
                                                },
                                            ]}>
                                            <Input className={'border-transparent border-[1px] rounded border-solid border-gray-400 h-10'} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item
                                    label={<label className={'text-gray-500 font-normal lg:text-xl'}>Company</label>}
                                    name={'company'}
                                    rules={[
                                        {
                                            required: true,
                                            message:'You must input your company'
                                        },
                                    ]}>
                                    <Input className={'border-transparent border-[1px] rounded border-solid border-gray-400 h-10'} />
                                </Form.Item>
                                <Form.Item
                                    label={<label className={'text-gray-500 font-normal lg:text-xl'}>Email (Company’s Email Only)</label>}
                                    name={'email'}
                                    rules={[
                                        {
                                            required: true,
                                            message:'You must input your company email'
                                        },
                                        { type: 'email' }
                                    ]}>
                                    <Input className={'border-transparent border-[1px] rounded border-solid border-gray-400 h-10'} />
                                </Form.Item>
                                <Form.Item
                                    label={<label className={'text-gray-500 font-normal lg:text-xl'}>Phone Number</label>}
                                    name={'phone_number'}
                                    rules={[
                                        {
                                            required: false,
                                            message:'You must input phone number'
                                        },
                                    ]}>
                                    <Input type={"number"} className={'border-transparent border-[1px] rounded border-solid border-gray-400 h-10 w-full validation'} />
                                </Form.Item>
                                <Form.Item
                                    label={<label className={'text-gray-500 font-normal lg:text-xl'}>How Can We Help?</label>}
                                    name={'help'}
                                    rules={[
                                        {
                                            required: false,
                                            message:'Please tell us how can we help you'
                                        },
                                    ]}>
                                    <Input.TextArea autoSize={{ minRows: 3, maxRows: 4 }} className={'border-transparent border-[1px] rounded border-solid border-gray-400'} />
                                </Form.Item>
                                <div className={'flex justify-end xl:pt-10'}>
                                    <Button
                                        loading={loading}
                                        type="primary"
                                        className={'rounded-none w-40 h-10 mb-8 lg:text-xl flex justify-center content-center'}
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
                </div>
            </div>
        // </div>

        // Redesign
        // <div className={'flex  w-full justify-center'}>
        //     <div className={'grid  gap-4 w-6/12'}>
        //         <div className={'inline ml-5 '}>
        //             <div className={'inline-flex items-center'}>
        //                 <hr style={{ width: '4em', border: '0', borderTop: 'solid rgba(156, 163, 175) 2.5px' }} className={'inline-block  opacity-30 mr-3 '} />
        //                 <p className={'text-sm mb-0 font-medium tracking-[.23em] uppercase'} style={{ color: '#818FA6', fontFamily: 'montserrat' }}>First To Know</p>
        //             </div>
        //             <p className={'lg:text-5xl sm:text-4xl'} style={{color :'#1D365F'}}>
        //                 <b className={'lg:text-7xl sm:text-6xl '} >Intouch.</b> Ask Anything.
        //             </p>
        //         </div>
        //         <div className={'flex justify-center'}>
        //             <Form
        //                         layout={"vertical"}
        //                         className={'w-full'}
        //                         form={form}
        //                     >
        //                         <Row gutter={16}>
        //                             <Col xs={{span: 24}} sm={{span: 12}}>
        //                                 <Form.Item
        //                                     label={<label className={'text-gray-500 font-normal lg:text-xl '}>First Name</label>}
        //                                     name={'firstname'}
        //                                     rules={[
        //                                         {
        //                                             required: true,
        //                                             message:'You must input First Name'
        //                                         },
        //                                     ]}>
        //                                     <Input className={'border-transparent border-[1px] rounded border-solid border-gray-400 h-10'} />
        //                                 </Form.Item>
        //                             </Col>
        //                             <Col xs={{span: 24}} sm={{span: 12}}>
        //                                 <Form.Item
        //                                     label={<label className={'text-gray-500 font-normal lg:text-xl'}>Last Name</label>}
        //                                     name={'lastname'}
        //                                     rules={[
        //                                         {
        //                                             required: true,
        //                                             message:'You must input Last Name'
        //                                         },
        //                                     ]}>
        //                                     <Input className={'border-transparent border-[1px] rounded border-solid border-gray-400 h-10'} />
        //                                 </Form.Item>
        //                             </Col>
        //                         </Row>
        //                         <Form.Item
        //                             label={<label className={'text-gray-500 font-normal lg:text-xl'}>Company</label>}
        //                             name={'company'}
        //                             rules={[
        //                                 {
        //                                     required: true,
        //                                     message:'You must input your company'
        //                                 },
        //                             ]}>
        //                             <Input className={'border-transparent border-[1px] rounded border-solid border-gray-400 h-10'} />
        //                         </Form.Item>
        //                         <Form.Item
        //                             label={<label className={'text-gray-500 font-normal lg:text-xl'}>Email (Company’s Email Only)</label>}
        //                             name={'email'}
        //                             rules={[
        //                                 {
        //                                     required: true,
        //                                     message:'You must input your company email'
        //                                 },
        //                                 { type: 'email' }
        //                             ]}>
        //                             <Input className={'border-transparent border-[1px] rounded border-solid border-gray-400 h-10'} />
        //                         </Form.Item>
        //                         <Form.Item
        //                             label={<label className={'text-gray-500 font-normal lg:text-xl'}>Phone Number</label>}
        //                             name={'phone_number'}
        //                             rules={[
        //                                 {
        //                                     required: false,
        //                                     message:'You must input phone number'
        //                                 },
        //                             ]}>
        //                             <Input type={"number"} className={'border-transparent border-[1px] rounded border-solid border-gray-400 h-10 w-full validation'} />
        //                         </Form.Item>
        //                         <Form.Item
        //                             label={<label className={'text-gray-500 font-normal lg:text-xl'}>How Can We Help?</label>}
        //                             name={'help'}
        //                             rules={[
        //                                 {
        //                                     required: false,
        //                                     message:'Please tell us how can we help you'
        //                                 },
        //                             ]}>
        //                             <Input.TextArea autoSize={{ minRows: 3, maxRows: 4 }} className={'border-transparent border-[1px] rounded border-solid border-gray-400'}/>
        //                         </Form.Item>
        //                         <div className={'flex justify-end'}>
        //                             <Button
        //                                 loading={loading}
        //                                 // type="primary"
        //                                 className={'rounded-lg w-[50%] h-12 py-2 mb-8 lg:text-xl bg-[#1D365F] text-white'}
        //                                 onClick={async () => {
        //                                     setLoading(true);
        //                                     await submitForm();
        //                                 }}
        //                             >
        //                                 Submit
        //                             </Button>
        //                         </div>
        //                     </Form>
        //         </div>
        //     </div>
        // </div>
    )
})

export default Intouch;