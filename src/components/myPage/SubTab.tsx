import React, { useState } from "react";
import MyBooking from "./MyBooking";
import MyProducts from "./MyProducts";
import Bookmark from "./Bookmark";
import Keywords from "./Keywords";

export default function SubTab() {
    const [tabState, setTabState] = useState<number>(0);
    const [page, setPage] = useState<number>(0);

    const tabList = [
        { id: 0, name: "내 예약 확인", content: <MyBooking page={page} setPage={setPage} /> },
        { id: 1, name: "업로드한 상품", content: <MyProducts page={page} setPage={setPage} /> },
        { id: 2, name: "북마크한 상품", content: <Bookmark page={page} setPage={setPage} /> },
        { id: 3, name: "관심 키워드 등록", content: <Keywords /> },
    ];

    const handleTabActive = (id: number) => {
        setTabState(id);
        setPage(0);
    };

    return (
        <>
            <div className="tab-wrapper">
                <ul className="tabs">
                    {tabList.map((tab) => (
                        <li
                            className={
                                "tab tab-lifted" + (tabState === tab.id ? " tab-active" : "")
                            }
                            key={tab.id}
                            onClick={() => handleTabActive(tab.id)}
                        >
                            {tab.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tab-content-wrapper">{tabList[tabState].content}</div>
        </>
    );
}
