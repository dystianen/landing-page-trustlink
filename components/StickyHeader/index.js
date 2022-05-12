import { Image } from 'antd';
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import React ,{ useState, useEffect } from 'react';
import { DrawerSlide } from '../DrawerSlide';

const StickyHeader = (props) => {
    const {changeMenuOpen, isMenuOpen} = props;
    const { t, i18n } = useTranslation('common');
    const [header, setHeader] = useState("header");
    const [isOpen, setIsOpen] = useState(isMenuOpen);
    const genericHamburgerLine = `h-1 my-1 rounded-full bg-[#FF6600] transition ease transform duration-300`;
    const genericHamburgerLine2 = `h-1 w-full my-1 rounded-full bg-[#FF6600] transition ease transform duration-300`;

    useEffect(()=>{
        setIsOpen(isMenuOpen)
    }, [isMenuOpen])

    const listenScrollEvent = event => {
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
     const menu = [
        {
            name: t('About Us.'),
        }, {
            name: t('Products'),
        }, {
            name: t('Use Cases'),
        },
    ]
    return (
         <div className={`z-[60] w-full sticky top-0 ${header}`}>
            <div className={' w-full top-0 flex flex-row'} style={{ justifyContent: 'space-between' }}>
                    <div className={'flex items-center'}>
                        <Image preview={false} className="cursor-pointer relative w-14 md:w-20 top-0" src={'/assets/logo/icon-only.png'} style={{ zIndex: 10000 }}  />
                        <Image preview={false} className="relative h-14 md:h-20 w-auto" src={'/assets/logo/text-only.png'} />
                    </div>
                <div className={'choose-lang flex flex-row mr-6 md:mr-10 lg:mr-12  z-30'}>
                    <DrawerSlide menu={menu} isOpen={isOpen} />
                    <div className={'w-16 sm:w-20 h-20 transparent  top-6 left-0 p-5'} style={{ zIndex: 10000 }}>
                        <button className="flex flex-col w-full h-full justify-center group" style={{ zIndex: 10000 }} onClick={() =>{
                            changeMenuOpen(!isOpen)
                        }}
                        >
                            <div className={`${genericHamburgerLine} self-start ${isOpen ? "w-full rotate-45 translate-y-3 opacity-100" : "w-3 sm:w-4 opacity-100 z[60]"}`}/>
                            <div className={`${genericHamburgerLine2} ${isOpen ? "opacity-0" : "opacity-100 z[60]"}`}/>
                            <div className={`${genericHamburgerLine} self-end ${isOpen ? "w-full -rotate-45 -translate-y-3 opacity-100" : "w-3 sm:w-4 opacity-100 z[60]"}`}/>
                        </button>
                    </div>
                        {/* <Link href={'/'} locale="en">
                            <p className={`cursor-pointer font-medium ${i18n.language === 'en' && 'text-[#FE7519]'}`}>EN</p>
                        </Link>
                        <div className={'w-px h-5 mt-1 mx-2'} style={{ backgroundColor: '#818FA6' }} />
                        <Link href={'/'} locale="id">
                            <p className={`cursor-pointer font-medium ${i18n.language === 'id' && 'text-[#FE7519]'}`}>ID</p>
                        </Link> */}
                    </div>
             </div>
        </div>
    );
}

export default StickyHeader;
