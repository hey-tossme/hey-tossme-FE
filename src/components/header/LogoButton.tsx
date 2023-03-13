import React from "react";
import { Link } from "react-router-dom";

export default function LogoButton() {
    return (
        <Link to="/">
            <button className="logo-btn">
                HEYT
                <div className="relative flex items-center">
                    <span className="ball">O</span>
                    <span className="shadow"></span>
                </div>
                SSME
            </button>
        </Link>
    );
}
