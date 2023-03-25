import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { CategorySelectProps } from "./_write.interface";

export default function CategorySelect({ category, setCategory }: CategorySelectProps) {
    const CATEGORY_TYPE = ["숙박", "레스토랑", "미용실", "전시공연", "액티비티"];
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleSetCategory: EventListenerOrEventListenerObject = (e: Event) => {
            const listCurrent = listRef.current as HTMLDivElement;
            const item = e.target as HTMLDivElement;

            if (!listCurrent.contains(e.target as Node)) return;

            if (listCurrent && listCurrent.contains(e.target as Node)) {
                listCurrent.childNodes.forEach((item) => {
                    const target = item as HTMLDivElement;
                    target.classList.remove("active");
                });
            }

            item.classList.add("active");
            setCategory(item.innerText);
        };

        document.addEventListener("mousedown", handleSetCategory);
        return () => {
            document.removeEventListener("mousedown", handleSetCategory);
        };
    }, [listRef]);

    useEffect(() => {
        setCategory(null);
    }, []);

    return (
        <div ref={listRef} className="category-select-wrapper">
            {CATEGORY_TYPE.map((category, index) => {
                return (
                    <div key={index} className={`category-select-item`}>
                        {category}
                    </div>
                );
            })}
        </div>
    );
}
