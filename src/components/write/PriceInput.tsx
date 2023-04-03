import React from "react";
import { useState, useEffect, useRef } from "react";
import { PriceInputProps } from "./_write.interface";
import { commaNums } from "../../hooks/utils";

export default function PriceInput({ price, setPrice }: PriceInputProps) {
    const [defaultPrice, setDefaultPrice] = useState<Number | null>();
    const ref = useRef<HTMLInputElement>(null);

    const handleSetPrice = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setPrice(Number(target.value));
    };

    const handleSetPriceType = (e: React.FocusEvent) => {
        const target = e.target as HTMLInputElement;
        if (price !== null) {
            target.value = `${commaNums(price)}`;
        }
    };

    useEffect(() => {
        !defaultPrice && price && setDefaultPrice(price);
    }, [price]);

    useEffect(() => {
        const current = ref.current as HTMLInputElement;
        if (defaultPrice) {
            current.value = `${commaNums(defaultPrice)}`;
        }
    }, [defaultPrice]);

    return (
        <input
            className="write-info-item"
            ref={ref}
            type="text"
            placeholder="가격을 입력하세요"
            onChange={handleSetPrice}
            onBlur={handleSetPriceType}
        />
    );
}
