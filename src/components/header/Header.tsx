import React from "react";
import { HeaderProps } from "./_Header.interface";
import { CategoryContainer } from "./CategoryContainer";
import { InfoContainer } from "./InfoContainer";

export default function Header() {
    return (
        <header className="header-wrapper">
            <CategoryContainer />
            <InfoContainer />
        </header>
    );
}
