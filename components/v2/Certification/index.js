import React from 'react';
import { Carousel, Image } from 'antd';
import { useTranslation } from 'next-i18next';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';

export default function Certification({ sectionRef }) {
    const lg = useMediaQuery({ query: '(min-width: 1024px)' });
    const md = useMediaQuery({ query: '(min-width: 768px)' });
    const sm = useMediaQuery({ query: '(min-width: 576px)' });
    const { t } = useTranslation();
    const router = useRouter();
    const { color } = router.query;
  
    const showSlide = lg ? 5 : md ? 4 : sm ? 4 : 2;
    const logos = [
        {
            src: '/assets/aftech-2.png',
            href: 'https://fintech.id/id'
        },
        {
            src: '/assets/images/ISO-27001-logo.png',
            href: 'https://isoindonesiacenter.com/iso-27001-information-security/'
        },
        {
            src: '/assets/dukcapil.png',
            href: 'https://dukcapil.kemendagri.go.id/'
        },
        {
            src: '/assets/keminfo.png',
            href: 'https://www.kominfo.go.id/'
        },
        {
            src: '/assets/ibeta.png',
            href: 'https://www.ibeta.com/'
        },
        {
            src: '/assets/images/logo-aitb-2.png',
            href: 'https://biometrik.org/'
        },
    ];
  
    const openLink = (href, index, src) => {
      let selectedIndex = index + 2;
      if (index >= logos.length - 2) {
        selectedIndex = (logos.length - index) % 2;
      }
      const data = logos[selectedIndex];
      window.open(data.href, '_blank');
    };
  
    return (
      <div className={'relative w-full h-auto z-50 section-most-top-client mt-20 pb-10'} ref={sectionRef}>
        <div className={'flex flex-col justify-center items-center mx-20'}>
          <h1 className='text-2xl text-[#04204D] font-bold'>Certification & Association</h1>
          <div className={'w-full'}>
            <Carousel dots={false} slidesToShow={showSlide} autoplay={true} speed={1000} autoplaySpeed={1000}>
              {logos.map((props, index) => {
                return (
                  <div key={index} className={`flex justify-center items-center text-center bg-white company-logo ${color === 'true' ? 'logo-image-gray' : ''} h-20 md:h-24 xl:h-30`}>
                    <div className={'h-full about-img py-5 md:py-7 xl:py-8 px-2'}>
                      <Image src={props.src} onClick={() => openLink(props.href, index, props.src)} className={'h-full w-auto'} preview={false} alt={'Trustlink Clients Logo'} />
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

        <hr className='mt-10'/>
      </div>
    );
}
