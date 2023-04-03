import React, { useEffect, useState } from "react";
import { requestUploadImg } from "../../api/@common/image";
import nullImg from "../../assets/images/default-image.png";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { uploadImgProps } from "./_write.interface";

export default function UploadImg({ files, setFiles, imageSrc, setImageSrc }: uploadImgProps) {
    const token = useAppSelector((state) => state.user.token);
    const [request, setRequest] = useState();
    const onUpload = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setFiles(e.target.files[0]);

        const imgFrm = new FormData();
        imgFrm.append("file", file);
        requestUploadImg(token, imgFrm).then((response) => {
            setImageSrc(response.data);
        });

        return new Promise<void>((resolve) => {
            reader.onload = () => {
                resolve();
            };
        });
    };

    return (
        <form method="post" className="upload-img-form">
            <label htmlFor="choose-file">
                <img
                    src={imageSrc ? imageSrc : nullImg}
                    alt="profile-image"
                    className="upload-img"
                    loading="lazy"
                />
            </label>
            <input
                type="file"
                id="choose-file"
                name="choose-file"
                accept="image/*"
                className="hidden"
                onChange={(e) => onUpload(e)}
            />
        </form>
    );
}
