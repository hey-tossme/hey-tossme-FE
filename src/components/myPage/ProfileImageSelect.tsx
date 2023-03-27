import React from "react";
import profile from "../../assets/images/profile-user.png";
import imageCompression from "browser-image-compression";
import { HiOutlinePlus } from "react-icons/hi";
import { IProfileFiles } from "../signUp/_SignUp.interface";

export default function ProfileImageSelect({
    files,
    setFiles,
    imageSrc,
    setImageSrc,
}: IProfileFiles) {
    const handleFileOnChange = async (e: any) => {
        let file = e.target.files[0];
        const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 300,
        };
        try {
            const compressedFile = await imageCompression(file, options);
            setFiles(compressedFile);
            const promise = imageCompression.getDataUrlFromFile(compressedFile);
            promise.then((result) => {
                setImageSrc(result);
            });
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
