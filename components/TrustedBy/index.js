import { Carousel, Image } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';

const TrustedBy = ({ sectionRef }) => {
  const lg = useMediaQuery({ query: '(min-width: 1024px)' });
  const md = useMediaQuery({ query: '(min-width: 768px)' });
  const sm = useMediaQuery({ query: '(min-width: 576px)' });
  const { t } = useTranslation();
  const router = useRouter();
  const { color } = router.query;

  const showSlide = lg ? 5 : md ? 4 : sm ? 4 : 2;
  const logos = [
    {
      src: 'assets/trusted_by/duitku.png',
      href: 'https://www.duitku.com/',
    },
    {
      src: 'assets/trusted_by/flip.png',
      href: 'https://flip.id/landing',
    },
    {
      src: 'assets/trusted_by/asaren-crop.png',
      href: 'https://asaren.ai/',
    },
    {
      src: 'assets/trusted_by/TECH5_logo-01.png',
      href: 'https://tech5.ai/',
    },
    {
      src: 'assets/trusted_by/interbio.svg',
      href: 'https://interbio.id/',
    },
    {
      src: 'assets/trusted_by/logo-dark.png',
      href: 'https://totmtechnologies.com/',
    },
    // {
    //     src: 'assets/trusted_by/more.png',
    // },
    {
      src: 'assets/trusted_by/vida.png',
      href: 'https://www.vida.id/',
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
        <h1 className='text-2xl text-[#04204D] font-bold'>Trusted By</h1>
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
    </div>
  );
};

export default TrustedBy;
