import React, { useEffect, useState } from "react";
import { PaginationProps } from "../../category/_Category.interface";

export default function Pagination({ totalPage, setPage, page }: PaginationProps) {
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
            {new Array(totalPage).fill(0).map((_, index) => (
                <div
                    key={index}
                    className={index === page ? "pagination active" : "pagination"}
                    onClick={handleSetPage}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    );
}
