import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import ProfileImageSelect from "./ProfileImageSelect";
import ModalPortal from "../@common/modal/portal/ModalPortal";
import SecessionModal from "../@common/modal/SecessionModal";
import { setModalOpen } from "../../store/modules/modal";
import UserAccount from "./UserAccount";
import { UserInfo } from "./_MyPage.interface";
import { getCurrentUserInfo } from "../../api/user/user";
import { useNavigate } from "react-router-dom";

export default function UserInfoContainer() {
    const modalOpen = useSelector((state: any) => state.modal.modalOpen);
    const dispatch = useDispatch();
    const token = useAppSelector((state) => state.user.token);
    const navigate = useNavigate();
    const [files, setFiles] = useState<File | null>(null);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
    const [getAccount, setGetAccount] = useState<boolean>(true);

    const getUserInfo = async () => {
        const result = await getCurrentUserInfo(token);
        setUserInfo(result.data);
    };

    useEffect(() => {
        getUserInfo();
    }, [getAccount]);

    const showModal = () => {
        dispatch(setModalOpen());
        navigate("/");
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
                            bank={userInfo.bankName}
                            account={userInfo.account}
                            getAccount={getAccount}
                            setGetAccount={setGetAccount}
                        />
                        <div className="secession-btn" onClick={showModal}>
                            회원 탈퇴
                        </div>
                    </div>
                </div>
            ) : null}
            {modalOpen && (
                <ModalPortal>
                    <SecessionModal />
                </ModalPortal>
            )}
        </>
    );
}
