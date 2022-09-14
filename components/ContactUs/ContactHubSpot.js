import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Row, message, Divider, Image} from "antd";
import {useStore} from "../StoreProvider";
import {observer} from "mobx-react-lite";
import {useTranslation} from "next-i18next";
import {Head} from "next/document";
import HubspotForm from 'react-hubspot-form'
const ContactHubSpots = observer(({sectionRef}) => {
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
        form.validateFields().then( res => {
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
                    <Image preview={false} className="h-full w-auto" src={'/assets/images/accent-home-sectionContact-1.jpg'} alt={'Trustlink Section Contact 1'}/>
                </div>
                <div className={'h-full contact-bg absolute right-0 top-5'}>
                    <Image preview={false} className="h-full w-auto" src={'/assets/images/accent-home-sectionContact-2.jpg'} alt={'Trustlink Section Contact 2'}/>
                </div>
                <div className={'w-full flex justify-center mb-10'} >
                    <div className={'montserrat'}>
                        <div className={'flex flex-row justify-center items-center'}>
                            {/*<div className={'w-16 h-[2px] mr-6 opacity-50'} style={{backgroundColor: '#818FA6'}}/>*/}
                            {/*<p className={'text-sm mb-0 text-center text-[#818FA6] tracking-widest'}>{t('Let us Know')}</p>*/}
                            <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                            <p className={'text-sm mx-2 sm:mx-6 text-[#818FA6] montserrat mb-0 text-center font-normal'}>{t('Let us Know')}</p>
                            <div className={'w-10 sm:w-16 h-[2px] bg-[#818FA6] opacity-50'}/>
                        </div>
                        <div className={'flex flex-row items-end'}>
                            <p className={'text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-0 text-[#04204D] mr-4 sm:mr-8'}>{t('Intouch')}</p>
                            <p className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#04204D] mb-0 font-medium'}>{t('Ask Anything')}</p>
                        </div>
                    </div>
                </div>
                <div className={'flex justify-center w-full'} >
                    <div className={'w-[80%] lg:w-8/12 xl:w-[52%] bg-white z-30'}>
                        <div className={'px-6 sm:px-12 md:px-20 pt-10 pb-6 md:pb-10 min-h-[200px]'} id={'form-hubspot'}>
                            <HubspotForm
                                portalId={'22401809'}
                                formId={'6e12ea09-d674-4911-b053-d8ca7f998fda'}
                                onSubmit={() => console.log('Submit!')}
                                onReady={(form) => console.log('Form ready!')}
                                loading={<div>Loading...</div>}
                            />
                        </div>
                    </div>
                </div>
            </div>
    )
})

export default ContactHubSpots;
