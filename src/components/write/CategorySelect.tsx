import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { CategorySelectProps } from "./_write.interface";

export default function CategorySelect({ category, setCategory }: CategorySelectProps) {
    const listRef = useRef<HTMLDivElement>(null);
    const [defaultCategory, setDefaultCategory] = useState<string | null>();
    const CATEGORY_TYPE = [
        {
            type: "숙박",
            category: "accommodation",
        },
        {
            type: "레스토랑",
            category: "restaurant",
        },
        {
            type: "미용실",
            category: "beauty",
        },
        {
            type: "전시공연",
            category: "concert",
        },
        {
            type: "액티비티",
            category: "activity",
        },
    ];

    useEffect(() => {
        const handleSetCategory: EventListenerOrEventListenerObject = (e: Event) => {
            const listCurrent = listRef.current as HTMLDivElement;
            const item = e.target as HTMLDivElement;

            if (!listCurrent.contains(e.target as Node)) return;

            if (listCurrent && listCurrent.contains(e.target as Node)) {
                listCurrent.childNodes.forEach((item) => {
                    const target = item as HTMLDivElement;
                    target.classList.remove("active");
                    setDefaultCategory(null);
                });
            }

            item.classList.add("active");
            CATEGORY_TYPE.map((category) => {
                item.innerText === category.type && setCategory(category.category);
            });
        };

        document.addEventListener("mousedown", handleSetCategory);
        return () => {
            document.removeEventListener("mousedown", handleSetCategory);
        };
    }, [listRef]);

    useEffect(() => {
        const target = CATEGORY_TYPE.filter((item) => item.category === category);
        category && setDefaultCategory(target[0].category);
    }, [category]);

    return (
        <div ref={listRef} className="category-select-wrapper">
            {CATEGORY_TYPE.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={`category-select-item ${
                            defaultCategory === item.category ? "active" : null
                        }`}
                    >
                        {item.type}
                    </div>
                );
            })}
        </div>
    );
}
