import React from 'react';

export const MapAddress = (props) => {
    const {
        style={},
        className=''
    } = props;
    return (
        <div style={props.style} className={props.className}>
            <iframe className={'h-full'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.298439614077!2d106.83960811476904!3d-6.224324195494293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f38cd5f00001%3A0x5cb013567aa7df01!2sKota%20Kasablanca%20Office%2088!5e0!3m2!1sid!2sid!4v1644949204792!5m2!1sid!2sid" width="100%" height="100%" loading="lazy" />
        </div>
    )
}
