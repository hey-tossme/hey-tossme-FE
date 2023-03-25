import React, { useEffect } from "react";
import { useState } from "react";
import CategorySelect from "./CategorySelect";
import UploadImg from "./UploadImg";
import TitleInput from "./TitleInput";
import PriceInput from "./PriceInput";
import ContentInput from "./ContentInput";
import AddressInput from "./AddressInput";
import DateSelect from "./DateSelect";
import axios from "axios";

export default function WriteForm() {
    const [files, setFiles] = useState<File | null>(null);
    const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const [title, setTitle] = useState<string | null>(null);
    const [price, setPrice] = useState<Number | null>(null);
    const [content, setContent] = useState<string | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [addressDetail, setAddressDetail] = useState<string | null>(null);
    const [date, setDate] = useState<string | null>(null);
    const [time, setTime] = useState<string | null>(null);
    const [totalDate, setTotalDate] = useState<string | null>(null);

    const axiosBody = {
        category: category,
        title: title,
        price: price,
        dueDate: totalDate,
        contents: content,
        address: address,
        addressDetail: addressDetail,
        imageUrl: imageSrc,
    };

    useEffect(() => {
        date && setTotalDate(date);
        date && time && setTotalDate(`${date}-${time}`);
    }, [date, time]);

    console.log(axiosBody);

    const handleEnroll = () => {
        axios.post("/items", axiosBody);
    };

    return (
        <>
            <UploadImg
                files={files}
                setFiles={setFiles}
                imageSrc={imageSrc}
                setImageSrc={setImageSrc}
            />
            <CategorySelect category={category} setCategory={setCategory} />
            <TitleInput title={title} setTitle={setTitle} />
            <PriceInput price={price} setPrice={setPrice} />
            <ContentInput content={content} setContent={setContent} />
            <AddressInput
                address={address}
                addressDetail={addressDetail}
                setAddress={setAddress}
                setAddressDetail={setAddressDetail}
            />
            <DateSelect date={date} setDate={setDate} time={time} setTime={setTime} />
            <button type="button" className="enroll-btn" onClick={handleEnroll}>
                등록
            </button>
        </>
    );
}
