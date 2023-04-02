import React, { useEffect, useState } from "react";
import { PaginationProps } from "../../category/_Category.interface";

export default function Pagination({ page, setPage, items }: PaginationProps) {
    const [totalPageNums, setTotalPageNums] = useState<Array<any>>();

    useEffect(() => {
        if (items) {
            const totalCount = items.length;
            const totalPageNums = Math.ceil(totalCount / 8);
            const arr = new Array(totalPageNums).fill("");
            setTotalPageNums(arr);
        }
    }, [items]);

    const handleSetPage = (e: React.MouseEvent) => {
        const targetPage = e.target as HTMLDivElement;
        const pageList = document.querySelectorAll(".pagination");

        pageList.forEach((item) => {
            const page = item as HTMLDivElement;
            page.classList.remove("active");
        });

        targetPage.classList.add("active");

        setPage(Number(targetPage.innerText) - 1);
    };

    return (
        <div className="pagination-wrapper">
            {totalPageNums &&
                totalPageNums?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={index === 0 ? "pagination active" : "pagination"}
                            onClick={handleSetPage}
                        >
                            {index + 1}
                        </div>
                    );
                })}
        </div>
    );
}
