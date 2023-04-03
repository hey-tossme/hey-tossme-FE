import React from "react";
import { Link } from "react-router-dom";
import LogoButton from "../@common/logo/LogoButton";
import { useAppSelector } from "../../store/hooks/configureStore.hook";

export function CategoryContainer() {
    const token = useAppSelector((state) => state.user.token);

    return (
        <div className="category-container">
            <div className="logo-wrapper">
                <LogoButton />
            </div>
            {token && (
                <Link to="/category">
                    <div className="header-tab">카테고리</div>
                </Link>
            )}
        </div>
    );
}
