import React, { useEffect, useState } from "react";
import { mapProps } from "./_detail.interface";

export default function Map({ latitude, longtitude }: mapProps) {
    const { kakao } = window;

    useEffect(() => {
        const container = document.getElementById("customMap");
        const options = {
            center: new kakao.maps.LatLng(latitude, longtitude),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        const marker = new kakao.maps.Marker({
            map: map,
            position: options.center,
        });
    }, [latitude, longtitude]);

    return (
        <div className="w-[770px] inline-block">
            <div id="customMap" className="w-full h-[200px] rounded-[8px]"></div>
        </div>
    );
}
