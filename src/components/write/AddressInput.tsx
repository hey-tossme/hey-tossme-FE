import React from "react";
import { useState } from "react";
import { AddressInputProps } from "./_write.interface";

export default function AddressInput({
    address,
    setAddress,
    addressDetail,
    setAddressDetail,
}: AddressInputProps) {
    const [isFind, setIsFind] = useState<boolean>(false);

    const findAddress = (e: React.MouseEvent) => {
        new window.daum.Postcode({
            oncomplete: function (data: any) {
                const jibunAddress = data.jibunAddress;
                const target = e.target as HTMLInputElement;

                target.value = jibunAddress;

                setAddress(jibunAddress);
            },
        }).open();
        setIsFind(true);
    };

    const handleSetAddressDetail = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setAddressDetail(target.value);
    };

    return (
        <div className="address-input-box">
            <input
                className="write-info-item"
                type="text"
                placeholder="장소를 선택하세요"
                onClick={findAddress}
                readOnly
            />
            {isFind && (
                <input
                    className="write-info-item"
                    type="text"
                    placeholder="상세 주소를 입력해주세요"
                    onChange={handleSetAddressDetail}
                />
            )}
        </div>
    );
}
