import React, { useState, useEffect } from "react";
import spinner from "../assets/images/loading-icon.gif";

export default function OauthRedirect() {
    const [code, setCode] = useState<string | null>("");
    let authorization = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
        setCode(authorization);
        console.log(code);
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "200px" }}>
            <img src={spinner} alt="Loading..." />
        </div>
    );
}
