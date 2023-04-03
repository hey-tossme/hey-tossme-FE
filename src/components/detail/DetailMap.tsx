import React from "react";
import Map from "./Map";
import { detailMapProps } from "./_detail.interface";
import { useState, useEffect } from "react";

export default function DetailMap({ item }: detailMapProps) {
    const [latitude, setLatitude] = useState(item.latitude);
    const [longitude, setLongitude] = useState(item.longitude);
    const [isAddress, setIsAddress] = useState<boolean>(false);
    const [isAddressDetail, setIsAddressDetail] = useState<boolean>(false);

    useEffect(() => {
        item.addressDetail && setIsAddressDetail(true);
        item.address && setIsAddress(true);
    }, [item]);

    useEffect(() => {
        if (!latitude && !longitude) {
            setLatitude(37.56639);
            setLongitude(126.978152);
        }
    }, [latitude, longitude]);

    return (
        <div className="detail-map-wrapper">
            <p className="map-title">위치</p>
            <Map latitude={item.latitude} longitude={item.longitude} />
            <p className="address">
                {isAddress && `${item.address}`}
                {isAddressDetail && `, ${item.addressDetail}`}
            </p>
        </div>
    );
}
