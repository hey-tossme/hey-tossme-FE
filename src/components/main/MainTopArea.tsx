import React from 'react';
import MainTopCardWrapper from './MainTopCardWrapper';

export default function MainTopArea() {
    return (
        <>
            <div className="main-top-wrapper">
                <div className="main-top-contents">
                    <div>
                        <div className="main-top-area-desc">
                            취소 · 환불 불가 예약 거래는
                        </div>
                        <div className="main-top-area-title">HEYTOSSME!</div>
                    </div>
                </div>
                <MainTopCardWrapper />
            </div>
        </>
    );
}
