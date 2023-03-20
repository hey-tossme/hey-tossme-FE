import React from "react";
import { KeywordType } from "./_MyPage.interface";
import { HiOutlineX } from "react-icons/hi";

export default function KeywordsTag({ keyword }: KeywordType) {
    return (
        <div className="keyword-tag">
            <div className="keyword-text">{keyword.keyword}</div>
            <button className="keyword-delete-btn">
                <HiOutlineX className="keyword-delete-btn-icon" />
            </button>
        </div>
    );
}
