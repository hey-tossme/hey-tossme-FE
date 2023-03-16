import React from "react";

export default function Pagination() {
    const handleSetPage = (e: React.MouseEvent) => {
        const targetPage = e.target as HTMLDivElement;
        const pageList = document.querySelectorAll(".pagination");

        pageList.forEach((item) => {
            const page = item as HTMLDivElement;
            page.classList.remove("active");
        });

        targetPage.classList.add("active");
    };

    return (
        <div className="pagination-wrapper">
            <div className="pagination" onClick={handleSetPage}>
                1
            </div>
            <div className="pagination" onClick={handleSetPage}>
                2
            </div>
            <div className="pagination" onClick={handleSetPage}>
                3
            </div>
        </div>
    );
}
