import React from "react";
import Map from "./Map";
import { detailMapProps } from "./_detail.interface";

export default function DetailMap({ item }: detailMapProps) {
    return (
        <div className="detail-map-wrapper">
            <p className="map-title">위치</p>
            <Map latitude={item.latitude} longitude={item.longitude} />
            <p className="address">{`${item.address}, ${item.addressDetail}`}</p>
        </div>
    );
}
