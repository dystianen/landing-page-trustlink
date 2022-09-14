import React, { useState } from "react";
import {
    Button,
    Layout,
    Menu,
    Popover,
    Typography,
    Avatar,
    Dropdown,
    Modal,
    Image
} from "antd";
import { UserOutlined } from "@ant-design/icons";
// import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoneyBillWave,
    faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { observer } from "mobx-react-lite";
import img_header from "../../../public/assets/header_img.png";
import {useRouter} from "next/router";
import {useStore} from "../../StoreProvider";
import {profileRepository} from "../../../repository/profile";
import {appConfig} from "../../../config/app";
import {useTranslation} from "react-i18next";

const FixedFooter = observer(({ children, title, icon }) => {
    const router = useRouter();
    const store = useStore();
    const { t, i18n } = useTranslation();
    const [filterModal, setFilterModal] = useState(false);
    const {data: profile} = profileRepository.hooks.useProfile();

    const menu = (
        <Menu>
            <Menu.Item
                key="0"
                style={{
                    width: 100,
                }}
            >
                <Link href="/profile">
                    <a>{t('dropdown_avatar.profile_title')}</a>
                </Link>
            </Menu.Item>
            <Menu.Item
                key="1"
                style={{
                    width: 100,
                }}
            >
                <button type='text' onClick={async () => {
                    await store.authentication.logout();
                    router.push('/login');
                }}>{t('dropdown_avatar.logout_title')}</button>
            </Menu.Item>
        </Menu>
    );

    const openFilterModal = () => {
        setFilterModal(true);
    };

    return (
        <>
            <div className={"flex flex-row h-screen"}>
                <div
                    className={
                        "flex-1 flex flex-col h-screen overflow-x-hidden"
                    }
                >
                    {/*Header*/}
                    <div
                        className={
                            "flex flex-row w-full items-center justify-between px-6 md:px-20 my-6"
                        }
                    >
                        <Link href="/dashboard">
                            <a>
                                <Image
                                    src={profile?.entity?.logo_url ? appConfig.imageApiUrl + profile?.entity?.logo_url : "/assets/logo.svg"}
                                    alt={"Trustlink Logo"}
                                    height={87.69}
                                    width={87.69}
                                    className="w-14 h-14 md:w-16 md:h-16"
                                />
                            </a>
                        </Link>
                        <div
                            className={
                                "flex flex-row items-center justify-between sm:justify-end md:justify-end lg:justify-end"
                            }
                        >
                            <FontAwesomeIcon
                                icon={faInfoCircle}
                                size={"2x"}
                                onClick={openFilterModal}
                                style={{ cursor: "pointer" }}
                            />
                            <div
                                className={"pl-4 md:pl-20"}
                                style={{ cursor: "pointer" }}
                            >
                                <Dropdown
                                    overlay={menu}
                                    trigger={["click"]}
                                    placement="bottomCenter"
                                    arrow
                                >
                                    <Image
                                        src={img_header}
                                        alt={"Trustlink Profile"}
                                        height={46}
                                        width={46}
                                    />
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    {/*Body*/}
                    <div className={"w-full px-6 md:px-20"}>{children}</div>
                    {/*Footer*/}
                    <div
                        className={
                            "flex flex-row w-full items-center justify-center px-18 py-8 mt-4 md:px-20 md:mt-12 2xl:block 2xl:fixed 2xl:bottom-0"
                        }
                        style={{ backgroundColor: "#003049" }}
                    >
                        <h2 style={{ color: "#fff" }} className={"text-center"}>
                            Nationaal Werknemer Plan is een merk van Nationaal Bedrijfssport Plan B.V. - KvK: 76576051
                        </h2>
                    </div>
                </div>
                <Modal
                    visible={filterModal}
                    closable
                    footer={null}
                    bodyStyle={{ backgroundColor: "#fff" }}
                    onCancel={() => {
                        setFilterModal(false);
                    }}
                    className="w-48"
                >
                    <div>
                        <h1 className={"text-base font-semibold m-0"}>
                            Lorem ipsum
                        </h1>
                        <hr className={"my-2"} />
                        <h1 className={"text-base font-medium m-0"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus finibus, mi iaculis viverra porta,
                            urna ante molestie ex, vel pellentesque velit tellus
                            in arcu. Nunc congue, lorem nec facilisis volutpat,
                            diam tortor fringilla nunc, eget malesuada eros
                            felis aliquam urna. Aliquam erat volutpat. Etiam
                            vitae leo blandit justo varius feugiat sed mattis
                            sapien. Donec finibus lobortis blandit. Mauris
                            varius luctus nulla pretium molestie. Curabitur sed
                            iaculis augue. Phasellus ultrices elit sed odio
                            pellentesque, at porta nisi sagittis. Nunc
                            imperdiet, felis at hendrerit laoreet, lectus velit
                            porta eros, vitae volutpat justo enim eget libero.
                        </h1>
                    </div>
                </Modal>
            </div>
        </>
    );
});

export default FixedFooter;
