import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { setSearchData } from "../../store/modules/search";

export default function Pagination() {
    const dispatch = useAppDispatch();
    const searchResult = useAppSelector((state) => state.searchResult);
    const [totalPageNums, setTotalPageNums] = useState<Array<any>>();

    useEffect(() => {
        const totalCount = searchResult.content.length;
        const totalPageNums = Math.ceil(totalCount / 8);
        const arr = new Array(totalPageNums).fill("");
        setTotalPageNums(arr);
    }, [searchResult]);

    const handleSetPage = (e: React.MouseEvent) => {
        const targetPage = e.target as HTMLDivElement;
        const pageList = document.querySelectorAll(".pagination");

        pageList.forEach((item) => {
            const page = item as HTMLDivElement;
            page.classList.remove("active");
        });

        targetPage.classList.add("active");
        dispatch(setSearchData({ pageNum: Number(targetPage.innerText) }));
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
