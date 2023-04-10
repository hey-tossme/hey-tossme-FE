import React, { useState } from "react";
import { requestUploadImg } from "../../api/@common/image";
import { changeProfile } from "../../api/user/user";
import profile from "../../assets/images/profile-user.png";
import imageCompression from "browser-image-compression";
import { HiOutlinePlus } from "react-icons/hi";
import { IProfileFiles } from "../signUp/_SignUp.interface";
import { useAppSelector } from "../../store/hooks/configureStore.hook";

export default function ProfileImageSelect({
    files,
    setFiles,
    imageSrc,
    setImageSrc,
}: IProfileFiles) {
    const token = useAppSelector((state: any) => state.user.token);
    const handleFileOnChange = async (e: any) => {
        let file = e.target.files[0];
        const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 300,
        };
        try {
            const compressedFile = await imageCompression(file, options);
            const resizingFile = new File([compressedFile], file.name, { type: file.type });
            setFiles(resizingFile);
            const promise = imageCompression.getDataUrlFromFile(compressedFile);
            promise.then((result) => {
                setImageSrc(result);
            });
            const imgFrm = new FormData();
            imgFrm.append("file", resizingFile);
            const result = await requestUploadImg(token, imgFrm);
            await changeProfile(token, result.data, null, null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form method="post" className="profile-select-form">
            <label htmlFor="choose-file">
                <div className="plus-badge">
                    <HiOutlinePlus className="plus-badge-icon" />
                </div>
                <img
                    src={imageSrc ? imageSrc : profile}
                    alt="profile-image"
                    className="profile-select-form-img"
                    loading="lazy"
                />
            </label>
            <input
                type="file"
                id="choose-file"
                name="choose-file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileOnChange(e)}
            />
        </form>
    );
}
