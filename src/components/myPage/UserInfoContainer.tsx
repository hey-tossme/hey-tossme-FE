import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import ProfileImageSelect from "./ProfileImageSelect";
import UserAccount from "./UserAccount";
import { UserInfo } from "./_MyPage.interface";
import { getCurrentUserInfo } from "../../api/user/user";

export default function UserInfoContainer() {
    const token = useAppSelector((state) => state.user.token);
    const [files, setFiles] = useState<File | null>(null);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);

    const userInfoTest = async () => {
        const result = await getCurrentUserInfo(token);
        setUserInfo(result.data);
    };

    useEffect(() => {
        userInfoTest();
    }, []);

    const getUserAccountInfo = () => {
        if (userInfo?.account) return true;
        else return false;
    };

    return (
        <>
            {userInfo ? (
                <div className="user-info-container">
                    <ProfileImageSelect
                        files={files}
                        setFiles={setFiles}
                        imageSrc={imageSrc ? imageSrc : userInfo.imageURL}
                        setImageSrc={setImageSrc}
                    />
                    <div className="user-info-content">
                        <div className="user-info-name">{userInfo.name} 님</div>
                        <div className="user-info-email">{userInfo.email}</div>
                        <UserAccount
                            getUserAccountInfo={getUserAccountInfo}
                            bank={userInfo.bankname}
                            account={userInfo.account}
                        />
                        <div className="secession-btn">회원 탈퇴</div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
