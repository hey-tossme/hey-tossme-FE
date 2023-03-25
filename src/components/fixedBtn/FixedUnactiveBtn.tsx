import React from "react";
import { IBtnState } from "./_FixedBtn.interface";
import { TbPlus } from "react-icons/tb";

export default function FixedUnactiveBtn({ btnState, setBtnState }: IBtnState) {
    return (
        <button className="btns-item plus-btn" onClick={() => setBtnState(true)}>
            <TbPlus className="plus-btn-icon" />
        </button>
    );
}
