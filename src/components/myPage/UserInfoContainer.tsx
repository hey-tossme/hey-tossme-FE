import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileImageSelect from "./ProfileImageSelect";
import UserAccount from "./UserAccount";
import { UserInfo } from "./_MyPage.interface";
import { customAxios } from "../../api/customAxios";

export default function UserInfoContainer() {
    const [files, setFiles] = useState<File | null>(null);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
    const USER_URL = "/fakeData/userinfo.json";

    const getUserInfo = () => {
        axios.get(USER_URL).then((res) => {
            const response = res.data;
            setUserInfo(response.data);
        });
    };

    // const requestUserInfo = async () => {
    //     const res = await customAxios.get("/v1/members");
    //     console.log(res);
    // };

    useEffect(() => {
        getUserInfo();
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
                        imageSrc={imageSrc ? imageSrc : userInfo.imageUrl}
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
