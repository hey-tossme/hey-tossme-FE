import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { WriteNavigateProps } from "./_write.interface";
import CategorySelect from "./CategorySelect";
import UploadImg from "./UploadImg";
import TitleInput from "./TitleInput";
import PriceInput from "./PriceInput";
import ContentInput from "./ContentInput";
import AddressInput from "./AddressInput";
import DateSelect from "./DateSelect";
import { editProduct, putProduct } from "../../api/product/product";
import ModalPortal from "../@common/modal/portal/ModalPortal";
import DateInputConfirmModal from "../@common/modal/DateInputConfirmModal";

export default function WriteForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as WriteNavigateProps;
    const token = useAppSelector((state) => state.user.token);
    const modalOpen = useAppSelector((state) => state.modal.modalOpen);
    const [files, setFiles] = useState<File | null>(null);
    const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const [title, setTitle] = useState<string | null>(null);
    const [price, setPrice] = useState<Number | null>(null);
    const [content, setContent] = useState<string | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [addressDetail, setAddressDetail] = useState<string | null>(null);
    const [date, setDate] = useState<string | null>(null);
    const [time, setTime] = useState<string | null>("00:00");
    const [totalDate, setTotalDate] = useState<string | null>(null);
    const [disabled, setDisabled] = useState<boolean>(true);

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
        setDisabled(
            category === null ||
                title === null ||
                price === null ||
                content === null ||
                address === null ||
                date === null
        );
    }, [category, price, title, content, address, date]);

    useEffect(() => {
        console.log(time);
        date && setTotalDate(date);
        date && time && setTotalDate(`${date}-${time.split(":").join("-")}`);
    }, [date, time]);

    useEffect(() => {
        if (state !== null) {
            const time = state.item.dueTime.split("T")[1];
            const count = time.split(":").length - 1;

            if (count == 2) {
                const timeArr = time.split(":");
                timeArr.pop();
                setTime(timeArr.join(":"));
            } else {
                const timeArr = time.split(":");
                setTime(timeArr.join(":"));
            }

            setImageSrc(state.item.imageUrl);
            setCategory(state.item.category);
            setTitle(state.item.title);
            setContent(state.item.contents);
            setAddress(state.item.address);
            setAddressDetail(state.item.addressDetail);
            setPrice(state.item.price);
            setDate(state.item.dueTime.split("T")[0]);
            console.log(state.item);
        }
    }, [state]);

    const handlePutProduct = () => {
        if (state !== null) {
            console.log(state.item.id);
            editProduct(token, axiosBody, state.item.id).then(() => {
                navigate("/category");
            });
        } else {
            putProduct(token, axiosBody).then(() => {
                navigate("/category");
            });
        }
    };

    console.log(axiosBody);

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
            <DateSelect date={date} setDate={setDate} time={time} setTime={setTime} state={state} />
            <button
                type="button"
                className="enroll-btn"
                onClick={handlePutProduct}
                disabled={disabled}
            >
                등록
            </button>
        </>
    );
}
