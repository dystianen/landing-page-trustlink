import { Image } from 'antd';
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import React ,{ useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DrawerSlide } from '../DrawerSlide';
import {startCase} from 'lodash';
const emptyFunction = () => {}

const StickyHeader = (props) => {
    const {changeMenuOpen, isMenuOpen, onClickProduct=emptyFunction, onClickClients=emptyFunction, onClickContactUs=emptyFunction, onClickUseCases=emptyFunction, onClickAboutUs=emptyFunction, onClickTopPage = emptyFunction} = props;
    const { t, i18n } = useTranslation('common');
    const [header, setHeader] = useState("header");
    const [isOpen, setIsOpen] = useState(isMenuOpen);
    const genericHamburgerLine = `h-1 my-1 rounded-full bg-[#04204D] transition ease transform duration-300`;
    const genericHamburgerLine2 = `h-1 w-full my-1 rounded-full bg-[#04204D] transition ease transform duration-300`;
    const mobile = useMediaQuery({ query: '(max-width: 576px)' });
    const tablet = useMediaQuery({ query: '(max-width: 980px)' });
    const [windows, setWindows] = useState()

    useEffect(() => {
        if(window){
            setWindows(window)
        }
    }, [])
    const menu = [
        {
            name: 'Home',
            onClicked : onClickTopPage,
        }, {
            name: t('About Us.'),
            onClicked : onClickAboutUs,
        }, {

            name: t('Products'),
            onClicked : onClickProduct,
        }, {
            name: t('Use Case'),
            onClicked :onClickUseCases

        },
        {
            name: 'Clients',
            onClicked :onClickClients
        },
        {
            name: t('Contact Us'),
            onClicked :onClickContactUs
        }
    ];

    useEffect(() => {
        setIsOpen(isMenuOpen)
    }, [isMenuOpen]);


    const listenScrollEvent = _event => {
        if (window.scrollY < 73) {
        return setHeader("ease-in duration-200 ");
        } else if (window.scrollY > 70) {
        return setHeader("bg-white ease-in duration-200 drop-shadow-lg");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);

        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);
    return (
         <div className={`z-[60] w-full sticky top-0 ${header} overflow-x-hidden`}>
            <div className={' w-full top-0 flex flex-row'} style={{ justifyContent: 'space-between' }}>
                <div className={'flex items-center ml-5 md:ml-12'}>
                    <Image preview={false} className="cursor-pointer relative w-14 md:w-20 top-0" src={'/assets/logo/icon-only.png'} style={{ zIndex: 10000 }}  />
                    <Image preview={false} className="relative h-14 md:h-20 w-auto" src={'/assets/logo/text-only.png'} />
                </div>
                {/* {windows?.scrollY > 70 &&
                    <div className={'relative  bg-red-300'}>
                        <Image preview={false} className=" w-[500px] " src={'/assets/header-plexus.png'} />
                         <p>dsad</p>
                    </div>
                } */}
                <div className={'choose-lang flex flex-row  mr-5 md:mr-10  xl:mr-12 z-30'}>
                    <DrawerSlide
                        menu={menu}
                        setOpen={changeMenuOpen}
                        onClickContact={onClickContactUs}
                        isOpen={isOpen} />
                    {tablet ? '' : menu.map((items, _props) => (
                        <div key={_props} className='mt-6 mx-2 xl:mx-4 2xl:mx-6 cursor-pointer ' onClick={items.onClicked}>
                            <p>
                               {items.name}
                            </p>
                        </div>
                    ))}
                    <div className={'w-20  h-20 transparent  p-5 '} style={{ zIndex: 10000 }}>
                        <button className="flex flex-col w-full h-full justify-center group" style={{ zIndex: 10000 }} onClick={() =>{
                            changeMenuOpen(!isOpen)
                        }}
                        >
                            <div className={`${genericHamburgerLine} self-start ${isOpen ? "w-full rotate-45 translate-y-3 opacity-100" : "w-3 sm:w-4 opacity-100 z[60]"}`}/>
                            <div className={`${genericHamburgerLine2} ${isOpen ? "opacity-0" : "opacity-100 z[60]"}`}/>
                            <div className={`${genericHamburgerLine} self-end ${isOpen ? "w-full -rotate-45 -translate-y-3 opacity-100" : "w-3 sm:w-4 opacity-100 z[60]"}`}/>
                        </button>
                    </div>
                </div>
             </div>
        </div>
    );
}

export default StickyHeader;
