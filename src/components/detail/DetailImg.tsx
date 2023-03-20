import React from "react";
import { customNullItemImg } from "../../hooks/utils";
import { detailImgProps } from "./_detail.interface";

export default function DetailImg({ url }: detailImgProps) {
    return <img className="detail-img-area" src={customNullItemImg(url)} alt="detail-image"></img>;
}
