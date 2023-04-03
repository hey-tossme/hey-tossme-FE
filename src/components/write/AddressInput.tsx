import React from "react";
import { useState, useEffect, useRef } from "react";
import { AddressInputProps } from "./_write.interface";

export default function AddressInput({
    address,
    setAddress,
    addressDetail,
    setAddressDetail,
}: AddressInputProps) {
    const [isFind, setIsFind] = useState<boolean>(false);
    const [defaultAddress, setDefaultAddress] = useState<string | null>();
    const [defaultAddressDetail, setDefaultAddressDetail] = useState<string | null>();
    const addressRef = useRef<HTMLInputElement>(null);
    const addressDetailRef = useRef<HTMLInputElement>(null);

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

    useEffect(() => {
        !defaultAddress && address && setDefaultAddress(address);
        !defaultAddressDetail && addressDetail && setDefaultAddressDetail(addressDetail);
    }, [address, addressDetail]);

    useEffect(() => {
        const addressCurrent = addressRef.current as HTMLInputElement;
        const addressDetailCurrent = addressDetailRef.current as HTMLInputElement;

        if (defaultAddress) {
            addressCurrent.value = defaultAddress;
        }

        if (defaultAddressDetail) {
            setIsFind(true);
            addressDetailCurrent.value = defaultAddressDetail;
        }
    }, [defaultAddress, defaultAddressDetail]);

    return (
        <div className="address-input-box">
            <input
                className="write-info-item"
                ref={addressRef}
                type="text"
                placeholder="장소를 선택하세요"
                onClick={findAddress}
                readOnly
            />
            {isFind && (
                <input
                    className="write-info-item"
                    ref={addressDetailRef}
                    type="text"
                    placeholder="상세 주소를 입력해주세요"
                    onChange={handleSetAddressDetail}
                />
            )}
        </div>
    );
}
