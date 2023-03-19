import React from "react";
import profile from "../../assets/images/profile-user.png";
import { HiOutlinePlus } from "react-icons/hi";
import { IProfileFiles } from "./_SignUp.interface";

export default function ProfileImageSelect({
    files,
    setFiles,
    imageSrc,
    setImageSrc,
}: IProfileFiles) {
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
        <form method="post" className="profile-select-form">
            <label htmlFor="choose-file">
                {imageSrc ? null : (
                    <div className="plus-badge">
                        <HiOutlinePlus className="plus-badge-icon" />
                    </div>
                )}
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
                onChange={(e) => onUpload(e)}
            />
        </form>
    );
}
