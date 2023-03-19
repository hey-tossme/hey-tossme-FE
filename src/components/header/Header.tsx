import React from "react";
import { HeaderProps } from "./_Header.interface";
import { CategoryContainer } from "./CategoryContainer";
import { InfoContainer } from "./InfoContainer";

export default function Header() {
    // 헤더에 액세스 토큰 넣어두기
    return (
        <header className="header-wrapper">
            <CategoryContainer />
            <InfoContainer />
        </header>
    );
}
