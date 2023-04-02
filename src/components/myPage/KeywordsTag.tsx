import React from "react";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { KeywordType } from "./_MyPage.interface";
import { HiOutlineX } from "react-icons/hi";
import { deleteKeywords } from "../../api/user/user";

export default function KeywordsTag({ keyword, sendKeyword, setSendKeyword }: KeywordType) {
    const token = useAppSelector((state) => state.user.token);

    const handleDeleteKeyword = async () => {
        await deleteKeywords(token, keyword.keyword);
        setSendKeyword(!sendKeyword);
    };

    return (
        <div className="keyword-tag">
            <div className="keyword-text">{keyword.keyword}</div>
            <button className="keyword-delete-btn" onClick={handleDeleteKeyword}>
                <HiOutlineX className="keyword-delete-btn-icon" />
            </button>
        </div>
    );
}
