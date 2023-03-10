import React from "react";
import MainBottomChatWrapper from "./MainBottomChatWrapper";

export default function MainBottomArea() {
    return (
        <div className="main-bottom-wrapper">
            <MainBottomChatWrapper />
            <div className="main-bottom-contents">
                <div>
                    <div className="main-bottom-area-title">
                        안전한 양도 거래
                    </div>
                    <div className="main-bottom-area-desc">
                        실시간 채팅을 통해 쉽고 안전하게 거래해 보세요.
                    </div>
                </div>
            </div>
        </div>
    );
}
