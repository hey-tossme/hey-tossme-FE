import React, { useState, useEffect, useRef } from "react";
import { changeProfile } from "../../api/user/user";
import { useAppSelector, useAppDispatch } from "../../store/hooks/configureStore.hook";
import { setLogin } from "../../store/modules/user";
import { TbCreditCard } from "react-icons/tb";
import { BsFillCaretDownFill } from "react-icons/bs";
import { GetUserAccount } from "./_MyPage.interface";

export default function UserAccount({ bank, account, getAccount, setGetAccount }: GetUserAccount) {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: any) => state.user);
    const accountState = useAppSelector((state: any) => state.user.account);
    const componentRef = useRef<HTMLDivElement>(null);
    const [accountNumber, setAccountNumber] = useState<string>("");
    const [userBankName, setUserBankName] = useState<string>("");
    const [showList, setShowList] = useState<boolean>(false);

    const bankList = [
        { id: 0, name: "KEB하나은행" },
        { id: 1, name: "SC제일은행" },
        { id: 2, name: "국민은행" },
        { id: 3, name: "신한은행" },
        { id: 4, name: "외환은행" },
        { id: 5, name: "우리은행" },
        { id: 6, name: "한국시티은행" },
        { id: 7, name: "경남은행" },
        { id: 8, name: "광주은행" },
        { id: 9, name: "대구은행" },
        { id: 10, name: "부산은행" },
        { id: 11, name: "전북은행" },
        { id: 12, name: "제주은행" },
        { id: 13, name: "기업은행" },
        { id: 14, name: "농협" },
        { id: 15, name: "수협" },
        { id: 16, name: "한국산업은행" },
        { id: 17, name: "한국수출입은행" },
        { id: 18, name: "카카오뱅크" },
        { id: 19, name: "토스뱅크" },
    ];

    const selectBankList = (item: string) => {
        setShowList(false);
        setUserBankName(item);
    };

    const confirmAccount = async () => {
        const result = await changeProfile(user.token, null, accountNumber, userBankName);
        console.log(result);
        dispatch(
            setLogin({
                token: user.token,
                id: user.id,
                account: result.data.account,
            })
        );
        setGetAccount(true);
    };

    useEffect(() => {
        const outsideClick: EventListenerOrEventListenerObject = (e: Event) => {
            const current = componentRef.current as HTMLDivElement;
            if (componentRef.current && !current.contains(e.target as Node)) setShowList(false);
        };
        document.addEventListener("mousedown", outsideClick);
        return () => {
            document.removeEventListener("mousedown", outsideClick);
        };
    }, [componentRef]);

    return (
        <div className="user-account-check-container">
            {accountState && getAccount ? (
                <>
                    <div className="user-account-check">
                        <TbCreditCard className="user-account-check-icon" /> 판매자 등록 완료
                    </div>
                    <div className="user-account">
                        <div className="text-bold">
                            {bank} {account}
                        </div>
                        <button className="user-account-btn" onClick={() => setGetAccount(false)}>
                            계좌 변경
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex">
                        <div className="input-box">
                            <div
                                className="bank-list-select-box"
                                onClick={() => setShowList(!showList)}
                            >
                                <input
                                    className="bank-list-select"
                                    type="text"
                                    placeholder="은행 선택"
                                    value={userBankName}
                                    readOnly={true}
                                />
                                <BsFillCaretDownFill className="bank-list-select-icon" />
                            </div>
                            {showList ? (
                                <div className="bank-list-select-option-wrapper" ref={componentRef}>
                                    {bankList.map((item) => (
                                        <div
                                            className="bank-list-select-option"
                                            key={item.id}
                                            onClick={() => selectBankList(item.name)}
                                        >
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                            <input
                                type="text"
                                className="account-form"
                                placeholder="계좌번호를 입력해 주세요."
                                onChange={(e) => setAccountNumber(e.target.value)}
                            />
                        </div>
                        <button
                            className="account-submit-btn"
                            onClick={confirmAccount}
                            disabled={accountNumber === ""}
                        >
                            등록
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
