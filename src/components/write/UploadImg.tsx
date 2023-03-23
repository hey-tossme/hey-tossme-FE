import React from "react";
import nullImg from "../../assets/images/default-image.png";
import { uploadImgProps } from "./_write.interface";

export default function UploadImg({ files, setFiles, imageSrc, setImageSrc }: uploadImgProps) {
    const onUpload = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setFiles(e.target.files[0]);

        return new Promise<void>((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
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
