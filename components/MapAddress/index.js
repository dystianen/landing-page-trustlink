import React from 'react';

export const MapAddress = (props) => {
    const {
        style={},
        className=''
    } = props;
    return (
        <div style={props.style} className={props.className}>
            {/*<iframe className={'h-full'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.298439614077!2d106.83960811476904!3d-6.224324195494293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f38cd5f00001%3A0x5cb013567aa7df01!2sKota%20Kasablanca%20Office%2088!5e0!3m2!1sid!2sid!4v1644949204792!5m2!1sid!2sid" width="100%" height="100%" loading="lazy" />*/}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.127172632607!2d106.8197754059584!3d-6.230161799466955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3a1e339e897%3A0xec3a7bf9c2bb54d6!2sCentennial%20Tower!5e0!3m2!1sen!2sid!4v1653903313447!5m2!1sen!2sid" width="100%" height="100%"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
