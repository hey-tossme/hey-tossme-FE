import React, { useState, useEffect } from "react";
import FixedActiveBtn from "./FixedActiveBtn";
import FixedUnactiveBtn from "./FixedUnactiveBtn";

export default function FixedBtn() {
    const [btnState, setBtnState] = useState<boolean>(true);
    const [chatOpen, setChatOpen] = useState<boolean>(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        {
            scrollPosition ? setBtnState(false) : setBtnState(true);
        }
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, [scrollPosition]);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    return (
        <div className="fixed-btns-container">
            <div className="fixed-btns-wrapper">
                {btnState ? (
                    <FixedActiveBtn chatOpen={chatOpen} setChatOpen={setChatOpen} />
                ) : (
                    <FixedUnactiveBtn btnState={btnState} setBtnState={setBtnState} />
                )}
            </div>
        </div>
    );
}
