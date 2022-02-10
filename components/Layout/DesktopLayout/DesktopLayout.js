import React, {useEffect, useState} from "react";
import {Avatar, Dropdown, Image, Layout, Menu, Modal, Tabs, Typography} from "antd";
import {useRouter} from "next/router";
import {useStore} from "../../StoreProvider";
import {observer} from "mobx-react-lite";
import logo from "/public/assets/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faReply,} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {profileRepository} from "../../../repository/profile";
import {appConfig} from "../../../config/app";
import {ColorUtil} from "../../../utils/color";
import {claimSourceRepository} from "../../../repository/claim_source";
import {useTranslation} from "react-i18next";
import Flags from 'country-flag-icons/react/3x2'
import {languages, SelectLang} from "../../../utils/i18n";

const {Sider, Header, Content, Footer} = Layout;
const {Paragraph, Text} = Typography;

const DesktopLayout = observer(({children}) => {
    const {TabPane} = Tabs;
    const router = useRouter();
    const store = useStore();
    const { t, i18n } = useTranslation();
    const [filterModal, setFilterModal] = useState(false);
    const [showSelectApps, setShowSelectApps] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const {data: profile} = profileRepository.hooks.useProfile();
    // const {data: updateLastActive} = profileRepository.hooks.useUpdateProfile();
    const {data: claim_source} = claimSourceRepository.hooks.useClaimSource();

    useEffect(() => {
        setShowSelectApps(store.applications.showSelectApps);
    }, [store.applications.showSelectApps]);

    useEffect(()=>{
        profileRepository.api.updateLastActive().then(res=>{
            console.log('update last active')
        })
        const timer = setInterval(()=>{
            profileRepository.api.updateLastActive().then(res=>{
                console.log('update last active')
            })
        }, (1000*60*10));

        return () => {
            clearInterval(timer);
            console.log('time_clear');
        }
    }, [])

    const goToChoosePage = async () => {
        router.push('/choose_app')
    };

    const menu = (
        <Menu>
            <Menu.Item key="0" style={{
                width: 100,
            }}>
                <Link href="/profile">{t('dropdown_avatar.profile_title')}</Link>
            </Menu.Item>
            {
                showSelectApps && (
                    <Menu.Item key="4">
                        <div className={"flex flex-row justify-between items-center"} onClick={goToChoosePage}>
                            <a className={"text-black"}>{t('switchApp')}</a>
                        </div>
                    </Menu.Item>
                )
            }
            <Menu.Item key="1" style={{
                width: 100,
            }}>
            <a type='text' onClick={async () => {
                await store.authentication.logout();
                router.push('/login');
            }}>{t('dropdown_avatar.logout_title')}</a>
            </Menu.Item>
        </Menu>
    );
    const openFilterModal = () => {
        setFilterModal(true);
    }

    return <div className={"flex flex-row h-screen"}>
        <div className={"flex-1 flex flex-col h-screen overflow-y-scroll"}>
            {/*Header*/}
            <div className={"flex flex-row w-full items-center justify-between px-6 md:px-20 my-6"}>
                <Link href={"/dashboard"}>
                    <a>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <Image
                            src={profile?.entity?.logo_url ? appConfig.imageApiUrl + profile?.entity?.logo_url : "/assets/logo.svg"}
                            alt={"logo"} className="min-w-full max-w-xs max-h-44 object-cover"
                            preview={false}
                        />
                    </a>
                </Link>
                <div className={"flex flex-row items-center justify-between sm:justify-end md:justify-end lg:justify-end"}>
                    <FontAwesomeIcon icon={faInfoCircle} size={'2x'} onClick={openFilterModal} style={{cursor: 'pointer'}}/>
                    <div className={'pl-4 md:pl-20'} style={{cursor: 'pointer'}}>
                        <SelectLang i18nHook={i18n} />
                    </div>
                    <div className={'pl-4 md:pl-20'} style={{cursor: 'pointer'}}>
                        <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter" arrow>
                            <Avatar size={46} src={profile?.profile?.photo ? `${appConfig.imageApiUrl}${profile?.profile.photo}` : "assets/placeholder_profile.png" }/>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className={"w-full px-6 md:px-20"}>
                {children}
            </div>
            {/*Footer*/}
            <div className={"flex flex-row w-full items-center justify-center px-18 py-8 mt-4 md:px-20 md:mt-12"}
                 style={{backgroundColor: store.ui.secondary}}>
                <h2 style={{color: ColorUtil.isLight(store.ui.secondary) ? '#000' : '#fff'}} className="text-center">Nationaal Werknemer Plan is een merk van Nationaal Bedrijfssport Plan B.V. - KvK: 76576051</h2>
            </div>
        </div>
        <Modal
            visible={filterModal}
            closable
            footer={null}
            bodyStyle={{backgroundColor: '#fff'}}
            onCancel={() => {
                setFilterModal(false)
            }}
            className="w-48 tc-modal"
        >
            <div className={"flex flex-col"}>
                {<div dangerouslySetInnerHTML={{
                    __html: `<div>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Spelregels Vitaliteitbudget</span></strong></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:center;'><u><span style='font-size:12px;font-family:"Calibri",sans-serif;'>- Let op! Niet van toepassing als uw vitaliteitbudget wordt geschonken door uw werkgever -</span></u></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Cafetariaregeling</span></strong></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Het vitaliteitbudget valt binnen de zogenoemde &ldquo;cafetariaregeling&rdquo;. Deze regeling biedt mooie voordelen voor u als medewerker. In dit overzicht brengen we de voordelen van de cafetariaregeling in beeld mede als een aantal voorwaarden waar u rekening mee moet houden.</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Vitaliteitbudget</span></strong></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Met het vitaliteitbudget werkt u voordelig aan uw actieve en vitale leefstijl. U profiteert van een voordeel van 37,10% of 49,50%, de hoogte is afhankelijk van uw belastbare schijf.&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></strong></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Dit levert, bij bijvoorbeeld een tenniscontributie waar de vergoeding &euro;30,00 per maand is, een kostenbesparing van &euro;133,55 per jaar op, &euro;11,15 per maand (schijf 37,10%) of &euro;178,20 per jaar, 14,85 per maand (schijf 49,50%).&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></strong></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Voorwaarden om rekening mee te houden als werknemer</span></strong></p>
        <ol style="list-style-type: decimal;margin-left:26px;">
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Een verrekening kan invloed hebben op de volgende punten, afhankelijk van de uitruilmethode (brutoloon, overuren, vakantiegeld):</span></li>
        </ol>
        <ul style="list-style-type: undefined;margin-left:44px;">
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>De hoogte van uw vakantiegeld</span></li>
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>De hoogte van het loon dat tijdens ziekte wordt doorbetaald</span></li>
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>De hoogte van mogelijke toekomstige uitkeringen</span></li>
        </ul>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Hoe kan ik hier gebruik van maken?</span></strong></p>
        <ol style="list-style-type: decimal;">
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Start uw aanvraag door een claim in te dienen</span></li>
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Upload een factuur of betaalbewijs van de leverancier, bijvoorbeeld de sportaanbieder</span></li>
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>U ontvangt een bevestiging van uw aanvraag</span></li>
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Wij controleren de aanvraag</span></li>
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>U ontvangt een bericht als de aanvraag is goed- of afgekeurd. Als de aanvraag is goed gekeurd ontvangt u hiervan een overeenkomst die ook naar uw werkgever wordt gestuurd.</span></li>
        </ol>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Wie betaalt die factuur?</span></strong></p>
        <ol style="list-style-type: decimal;">
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>U betaalt zelf de factuur. Na het betalen van de factuur kunt u deze indienen via een nieuwe claim.</span></li>
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Betaalt uw werkgever de factuur? Dan staat dit duidelijk vermeld onder de condities bij de betreffende claim.</span></li>
        </ol>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Hoe verder?</span></strong></p>
        <ol style="list-style-type: decimal;">
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Na het goedkeuren van de aanvraag wordt uw factuur verrekend met uw brutoloon, overuren of vakantiegeld. Afhankelijk van welke opties er mogelijk zijn bij uw werkgever.</span></li>
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Het bedrag dat wordt verrekend ontvangt u van ons (niet via uw werkgever) op het door uw opgegeven rekeningnummer welke u heeft ingevuld tijdens de aanmelding.&nbsp;</span></li>
        </ol>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Jaar of maand factuur / betaalbewijs?</span></strong></p>
        <ol style="list-style-type: decimal;">
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Als u een jaarfactuur of betaalbewijs heeft hoeft u deze slechts &eacute;&eacute;nmalig te uploaden. Wij zorgen ervoor dat deze wordt verrekend.</span></li>
            <li><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Als een maandfactuur heeft, bijvoorbeeld van uw tennisvereniging, dient u elke maand uw factuur of betaalbewijs te uploaden.</span></li>
        </ol>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>U wenst geen gebruik meer te maken van uw vitaliteitbudget</span></strong></p>
        <div style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'>
            <ol style="margin-bottom:0cm;list-style-type: decimal;">
                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Als u wilt stoppen kunt u een mail sturen naar&nbsp;</span><a href="mailto:support@vitalitybenefitgroup.com."><span style='font-size:12px;font-family:"Calibri",sans-serif;'>support@vitalitybenefitgroup.com.</span></a><span style='font-size:12px;font-family:"Calibri",sans-serif;'>. Wij zorgen ervoor dat uw vitaliteitbudget wordt stopgezet.</span></li>
            </ol>
        </div>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Uw dienstverband verloopt of is al verlopen</span></strong></p>
        <div style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'>
            <ol style="margin-bottom:0cm;list-style-type: decimal;">
                <li style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Als uw dienstverband verloopt of is verlopen kunt u na het verlopen van uw dienstverband geen gebruik maar maken van uw vitaliteitbudget.</span></li>
            </ol>
        </div>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:center;'><strong><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Overige vragen of opmerkingen?</span></strong></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;text-align:center;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>Voor overige vragen of opmerkingen kunt u contact opnemen via&nbsp;</span><a href="mailto:support@vitalitybenefitgroup.com."><span style='font-size:12px;font-family:"Calibri",sans-serif;'>support@vitalitybenefitgroup.com.</span></a><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;of via 085-1306826.</span></p>
        <p style='margin:0cm;font-size:16px;font-family:"Calibri",sans-serif;'><span style='font-size:12px;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
    </div>`
                }}/>}
            </div>
        </Modal>
    </div>
});
export default DesktopLayout;
