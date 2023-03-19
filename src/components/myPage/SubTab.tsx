import React, { useState } from "react";
import MyBooking from "./MyBooking";
import MyProducts from "./MyProducts";
import Bookmark from "./Bookmark";
import Keywords from "./Keywords";

export default function SubTab() {
    const [tabState, setTabState] = useState<number>(0);

    const tabList = [
        { id: 0, name: "내 예약 확인", content: <MyBooking /> },
        { id: 1, name: "업로드한 상품", content: <MyProducts /> },
        { id: 2, name: "북마크한 상품", content: <Bookmark /> },
        { id: 3, name: "관심 키워드 등록", content: <Keywords /> },
    ];

    const handleTabActive = (id: number) => {
        setTabState(id);
    };

    return (
        <>
            <div className="tab-wrapper">
                <div className="tabs">
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
                </div>
            </div>
            <div className="tab-content-wrapper">{tabList[tabState].content}</div>
        </>
    );
}
