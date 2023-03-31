import React, { useEffect, useState } from "react";
import KeywordsTag from "./KeywordsTag";
import { KeywordInfo } from "./_MyPage.interface";
import { HiOutlineTag } from "react-icons/hi";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { getKeywords, postKeywords } from "../../api/user/user";

export default function Keywords() {
    const token = useAppSelector((state) => state.user.token);
    const [keyword, setKeyword] = useState<string>("");
    const [keywordList, setKeywordList] = useState<KeywordInfo[]>([]);
    const [sendKeyword, setSendKeyword] = useState<boolean>(false);

    const getUserKeyword = async () => {
        const result = await getKeywords(token);
        setKeywordList(result.data);
    };

    const postUserKeyword = async () => {
        await postKeywords(token, keyword);
        setSendKeyword(!sendKeyword);
    };

    useEffect(() => {
        getUserKeyword();
    }, [sendKeyword]);

    return (
        <div className="keywords-container">
            <div className="keyword-form-wrapper">
                <div className="keywords-form-box">
                    <HiOutlineTag className="keywords-form-icon" />
                    <input
                        type="text"
                        className="keywords-input"
                        placeholder="관심 키워드를 등록해 보세요."
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button className="keywords-btn" onClick={postUserKeyword}>
                        등록하기
                    </button>
                </div>
                <div className="keywords-tag-container">
                    {keywordList.map((keyword) => (
                        <KeywordsTag
                            keyword={keyword}
                            key={keyword.id}
                            setSendKeyword={setSendKeyword}
                            sendKeyword={sendKeyword}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
