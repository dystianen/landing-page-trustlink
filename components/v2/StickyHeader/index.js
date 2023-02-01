import { Button, Dropdown, Image, Menu, Space } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DrawerSlide } from '../../DrawerSlide';
import { startCase } from 'lodash';
import { CaretDownOutlined, DownOutlined, RightOutlined } from '@ant-design/icons';
const emptyFunction = () => {};

const StickyHeader = (props) => {
  const {
    changeMenuOpen,
    isMenuOpen,
    onClickProduct = emptyFunction,
    onClickClients = emptyFunction,
    onClickContactUs = emptyFunction,
    onClickUseCases = emptyFunction,
    onClickAboutUs = emptyFunction,
    onClickTopPage = emptyFunction,
  } = props;
  const { t, i18n } = useTranslation('common');
  const [header, setHeader] = useState('header');
  const [isOpen, setIsOpen] = useState(isMenuOpen);
  const [isRotate, setIsRotate] = useState(false);
  const genericHamburgerLine = `h-1 my-1 rounded-full bg-[#04204D] transition ease transform duration-300`;
  const genericHamburgerLine2 = `h-1 w-full my-1 rounded-full bg-[#04204D] transition ease transform duration-300`;
  const mobile = useMediaQuery({ query: '(max-width: 576px)' });
  const tablet = useMediaQuery({ query: '(max-width: 980px)' });
  const [windows, setWindows] = useState();

  useEffect(() => {
    if (window) {
      setWindows(window);
    }
  }, []);

  const menu = [
    {
      name: t('About Us.'),
      key: 'about_us',
    },
    {
      name: t('Products'),
      key: 'products',
    },
    {
      name: t('Industry'),
      key: 'industry',
    },
    {
      name: t('For Developers'),
      key: 'use_case',
    },
    {
      name: t('Pricing'),
      key: 'clients',
    },
    {
      name: t('Legal'),
      key: 'clients',
    },
    {
      name: t('Contact Us'),
      key: 'contact_us',
    },
  ];

  const subMenu = [{ name: 'TrustVerify' }, { name: 'TrustScan' }, { name: 'TrustLive' }, { name: 'TrustConnect' }, { name: 'TrustVision' }];

  useEffect(() => {
    setIsOpen(isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const listenScrollEvent = (_event) => {
    if (window.scrollY < 73) {
      return setHeader('ease-in duration-200 ');
    } else if (window.scrollY > 70) {
      return setHeader('bg-white ease-in duration-200 drop-shadow-lg');
    }
  };

  const products = [
    {
      image: 'logo-trust-verify.png',
      name: 'Verify',
      productIndex: 0,
    },
    {
      image: 'logo-trust-scan.png',
      name: 'Scan',
      productIndex: 1,
    },
    {
      image: 'incode-crop.png',
      name: 'incode',
      productIndex: 3,
    },
    {
      image: 'logo-trust-live.png',
      name: 'Live',
      productIndex: 2,
    },
    {
      image: 'logo-trust-connect.png',
      name: 'Connect',
      productIndex: 3,
    },
  ];

  const dropdownOverlay = (
    <div className='bg-white drop-shadow-lg mt-3'>
      <div className='w-11/12 lg:w-11/12 xl:w-10/12 2xl:w-10/12 py-11 mx-auto space-x-3 flex justify-center'>
        <div className='w-4/12 flex flex-col space-y-4 pr-2 2xl:pr-10'>
          <div className='font-bold text-3xl'>Products</div>
          <div className='text-lg text-grey'>Our comprehensive solutions will enable your business to make faster and accurate decisions</div>
        </div>
        <div className='w-full xl:w-10/12 2xl:w-7/12 grid grid-cols-3 xl:grid-cols-3 gap-3'>
          {products.map((items, index) => {
            return items.name === 'incode' ? (
              <div
                key={index}
                id={'click-header-products-incode'}
                className='click-header-products-incode w-44 xl:w-48 flex items-center space-x-2 xl:space-x-3 cursor-pointer'
                onClick={() => window.open('https://incode.com/products/incode-omni/', '_blank')}
              >
                <div className='flex items-center usecase-img click-header-products-incode'>
                  <Image preview={false} src={`/assets/images/${items.image}`} alt={`Trustlink Trust ${items.name}`} className={'p-2 w-full h-full click-header-products-incode'} />
                </div>
                <div className={`arrow-right click-header-products-trust-${items.name}`} />
              </div>
            ) : (
              <div
                id={`click-header-products-trust-${items.name}`}
                key={index}
                className={`click-header-products-trust-${items.name} flex h-full w-full items-center space-x-2 xl:space-x-3 p-0 cursor-pointer border-none`}
                onClick={() => onClickProduct(items.productIndex)}
              >
                <div className={`flex items-center click-header-products-trust-${items.name}`}>
                  <div className={`w-[4.2rem] h-[4.2rem] xl:w-20 xl:h-20 bg-[#fff0e6] border-[2px] xl:border-3 border-[#FF6703] rounded-full usecase-img click-header-products-trust-${items.name} `}>
                    <Image preview={false} src={`/assets/images/${items.image}`} alt={`Trustlink Trust ${items.name}`} className={`p-5 w-[4.2rem] h-[4.2rem] xl:w-20 xl:h-20 click-header-products-trust-${items.name} `} />
                  </div>
                  <div className={`text-left w-32 font-semibold text-lg ml-2 click-header-products-trust-${items.name} `}>
                    Trust<span className={`text-orange click-header-products-trust-${items.name}`}>{items.name}</span>
                  </div>
                </div>
                <div className={`arrow-right click-header-products-trust-${items.name}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`z-[60] w-full sticky top-0 ${header} overflow-x-hidden`}>
      <div className={'w-full top-0 flex flex-row items-center justify-between p-5'}>
        <div className={'flex items-center md:ml-12'}>
          <Image preview={false} className={'cursor-pointer relative w-14 md:w-20 top-0'} alt={'Trustlink Icon'} src={'/assets/logo/icon-only.png'} style={{ zIndex: 10000 }} />
          <Image preview={false} className={'relative h-14 md:h-20 w-auto'} src={'/assets/logo/text-only.png'} alt={'Trustlink Text'} />
        </div>
        <div className={'choose-lang flex flex-col gap-3 mr-5 md:mr-10  xl:mr-12 z-30'}>
          <div className='flex flex-row justify-end items-center gap-10 mr-5'>
            <div className='flex flex-row items-center'>
              <Image preview={false} src={'/assets/icons/User_fill.svg'} alt='user' />
              <span className='text-base text-white font-bold'>Login</span>
            </div>

            <div className='text-base text-white font-bold'>Eng  |  Ind</div>

            <Image preview={false} src={'/assets/icons/search.svg'} alt='user' />
          </div>
          <div className='flex flex-row'>
            <DrawerSlide clicked={onClickProduct} menu={menu} setOpen={changeMenuOpen} onClickContact={onClickContactUs} isOpen={isOpen} />
            {tablet ? (
              ''
            ) : (
              <>
                {menu.map((items, _props) => (
                  <div key={_props} className={'flex items-center mx-2 xl:mx-4 2xl:mx-6 cursor-pointer'} onClick={items.onClicked}>
                    <p className={'mb-0 text-center flex items-center'} id={`click-header-${items.key}`}>
                      {items.key == 'products' ? null : items.name}{' '}
                      {items.key == 'products' && (
                        <Dropdown onOpenChange={(val) => setIsRotate(val)} overlayClassName='w-full' overlay={dropdownOverlay} trigger={['hover']}>
                          <Space>
                            Products
                            <DownOutlined className={isRotate && 'rotate-180 transition duration-100'} />
                          </Space>
                        </Dropdown>
                      )}
                    </p>
                  </div>
                ))}
              </>
            )}

            {/* <div className={'w-20 sm:w-20 h-20 transparent p-5 '} style={{ zIndex: 10000 }}>
            <button
              className={'flex flex-col w-full h-full justify-center group'}
              style={{ zIndex: 10000 }}
              onClick={() => {
                changeMenuOpen(!isOpen);
              }}
            >
              <div className={`${genericHamburgerLine} self-start ${isOpen ? 'w-full rotate-45 translate-y-3 opacity-0' : 'w-6 sm:w-8 lg:w-4 opacity-100 z[60]'}`} />
              <div className={`${genericHamburgerLine2} ${isOpen ? 'opacity-0' : 'opacity-100 z[60]'}`} />
              <div className={`${genericHamburgerLine} self-end ${isOpen ? 'w-full -rotate-45 -translate-y-3 opacity-0' : 'w-6 sm:w-8 lg:w-4 opacity-100 z[60]'}`} />
            </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
