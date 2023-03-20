import React from "react";
import { Link } from "react-router-dom";
import LogoButton from "../@common/logo/LogoButton";

export function CategoryContainer() {
    return (
        <div className="category-container">
            <div className="logo-wrapper">
                <LogoButton />
            </div>
            <Link to="/category">
                <div className="header-tab">카테고리</div>
            </Link>
        </div>
    );
}
