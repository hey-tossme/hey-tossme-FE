import React from "react";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { setSearchData } from "../../store/modules/search";
import { useAppDispatch } from "../../store/hooks/configureStore.hook";

export default function SelectKeyword() {
    const dispatch = useAppDispatch();

    const handleGetKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeout(() => {
            dispatch(setSearchData({ keyword: e.target.value }));
        }, 500);
    };

    return (
        <div className="search-bar-item">
            <BiSearch className="item-icon" />
            <input
                className="item-input"
                onChange={handleGetKeyword}
                type="text"
                placeholder="키워드로 검색하세요."
            />
        </div>
    );
}
