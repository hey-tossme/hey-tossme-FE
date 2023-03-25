import React from "react";
import { PriceInputProps } from "./_write.interface";
import { commaNums } from "../../hooks/utils";

export default function PriceInput({ price, setPrice }: PriceInputProps) {
    const handleSetPrice = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setPrice(Number(target.value));
    };

    const handleSetPriceType = (e: React.FocusEvent) => {
        const target = e.target as HTMLInputElement;
        if (price !== null) {
            target.value = `${commaNums(price)}원`;
        }
    };

    return (
        <input
            className="write-info-item"
            type="text"
            placeholder="가격을 입력하세요"
            onChange={handleSetPrice}
            onBlur={handleSetPriceType}
        />
    );
}
