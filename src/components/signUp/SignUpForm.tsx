import React, { useState } from "react";
import {
    HiOutlineMail,
    HiOutlineLockClosed,
    HiOutlineShieldCheck,
    HiOutlineIdentification,
    HiOutlinePlus,
} from "react-icons/hi";
import profile from "../../assets/images/profile-user.png";

export default function SignUpForm() {
    const [files, setFiles]: any = useState(null);
    const [imageSrc, setImageSrc]: any = useState(null);

    // photo upload
    const onUpload = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setFiles(e.target.files[0]);

        return new Promise<void>((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result || null);
                resolve();
            };
        });
    };

    return (
        <>
            <div className="sign-up-form-container">
                <div className="sign-up-form-wrapper">
                    <div className="sign-up-form-left">
                        <form method="post" className="profile-select-form">
                            <label htmlFor="choose-file">
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
                            <div className="plus-badge">
                                <HiOutlinePlus className="plus-badge-icon" />
                            </div>
                        </form>
                    </div>
                    <div className="sign-up-form-right">
                        <div className="email-box">
                            <HiOutlineMail className="email-box-icon" />
                            <input type="text" className="email-box-input" placeholder="이메일" />
                            <button className="send-email-code">인증</button>
                        </div>
                        <div className="code-box">
                            <HiOutlineShieldCheck className="code-box-icon" />
                            <input type="text" className="code-box-input" placeholder="인증 코드" />
                            <button className="check-email-code">확인</button>
                        </div>
                        <div className="pw-box">
                            <HiOutlineLockClosed className="pw-box-icon" />
                            <input type="text" className="pw-box-input" placeholder="비밀번호" />
                        </div>
                        <div className="pw-recheck-box">
                            <HiOutlineLockClosed className="pw-recheck-box-icon" />
                            <input
                                type="text"
                                className="pw-recheck-box-input"
                                placeholder="비밀번호 확인"
                            />
                        </div>
                        <div className="name-box">
                            <HiOutlineIdentification className="name-box-icon" />
                            <input type="text" className="name-box-input" placeholder="이름" />
                        </div>
                    </div>
                </div>
            </div>
            <button className="sign-up-btn">가입하기</button>
        </>
    );
}
