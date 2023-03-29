import React, { useEffect, useState } from "react";
import axios from "axios";
import KeywordsTag from "./KeywordsTag";
import { KeywordInfo } from "./_MyPage.interface";
import { HiOutlineTag } from "react-icons/hi";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { getKeywords } from "../../api/user/user";

export default function Keywords() {
    const token = useAppSelector((state) => state.user.token);
    const [keywordList, setKeywordList] = useState<KeywordInfo[]>([]);
    const KEYWORD_URL = "/fakeData/keywords.json";

    const getKeywordList = () => {
        axios.get(KEYWORD_URL).then((res) => {
            const response = res.data;
            setKeywordList(response.data);
        });
    };

    const getUserKeyword = async () => {
        const result = await getKeywords(token);
        console.log(result);
    };

    useEffect(() => {
        getKeywordList();
        getUserKeyword();
    }, []);

    return (
        <div className="keywords-container">
            <div className="keyword-form-wrapper">
                <div className="keywords-form-box">
                    <HiOutlineTag className="keywords-form-icon" />
                    <input
                        type="text"
                        className="keywords-input"
                        placeholder="관심 키워드를 등록해 보세요."
                    />
                    <button className="keywords-btn">등록하기</button>
                </div>
                <div className="keywords-tag-container">
                    {keywordList.map((keyword) => (
                        <KeywordsTag keyword={keyword} key={keyword.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
