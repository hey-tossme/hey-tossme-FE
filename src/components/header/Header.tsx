import React from "react";
import { CategoryContainer } from "./CategoryContainer";
import { InfoContainer } from "./InfoContainer";

export default function Header() {
    return (
        <header className="wrapper">
            <CategoryContainer />
            <InfoContainer />
        </header>
    );
}
