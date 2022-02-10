import React, {useEffect, useState} from 'react';
import {Modal, Spin} from "antd";
import {observer} from 'mobx-react-lite';
export const ModalLoader = observer((props) =>{
    return <Modal
        title={null}
        footer={null}
        visible={props.isOpen}
        closable={false}
        centered
        style={{zIndex:9999999999}}
    >
        <div style={{display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <Spin size={'large'}/>
            <span style={{marginTop:5}}>{props.text || 'Loading ...'}</span>
        </div>
    </Modal>
});
