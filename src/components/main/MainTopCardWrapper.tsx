import React, { useRef, useEffect, useState } from "react";
import MainTopCardItem from "./MainTopCardItem";

export default function MainTopCardWrapper() {
    const cards = [
        {
            id: 0,
            name: "롯데 호텔 제주",
            price: "498,000",
            date: "2023-03-06",
            place: "제주특별자치도 제주시 공항로 2",
            img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 1,
            name: "메이필드 디너 2인",
            price: "100,000",
            date: "날짜 무관",
            place: "서울특별시 용산구 한강대로 405",
            img: "https://images.unsplash.com/photo-1601118964938-228a89955311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 2,
            name: "대전 유라헤어",
            price: "80,000",
            date: "2023-03-20 오후 2시",
            place: "대전광역시 동구 중앙로 215",
            img: "https://images.unsplash.com/photo-1621770504632-a601605021a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpcnNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 3,
            name: "김해CC 부킹 양도",
            price: "600,000",
            date: "2023-04-12 오후 1시",
            place: "경상남도 김해시 김해대로 2232",
            img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 4,
            name: "서재페 1일권",
            price: "187,000",
            date: "2023-05-26",
            place: "서울특별시 송파구 올림픽로 424",
            img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
    ];

    const CARD_WIDTH = 240;
    const CARD_MARGIN = 28;
    const LENGTH = cards.length;
    const MAX_WIDTH = LENGTH * (CARD_WIDTH + CARD_MARGIN);
    const [slidePx, setSlidePx] = useState<number>(0);
    const [slideCount, setSlideCount] = useState<number>(0);
    const slideRef = useRef<HTMLDivElement>(null);

    let copiedCards = [...cards, ...cards];

    const handleSwipe = () => {
        if (slidePx > -MAX_WIDTH) {
            setSlidePx(slidePx - (CARD_WIDTH + CARD_MARGIN));
            setSlideCount(slideCount + 1);
            slideRef.current!.style.transition = "ease-in 0.5s all";
        } else if (slideCount == LENGTH) {
            setSlidePx(0);
            setSlideCount(0);
            slideRef.current!.style.transition = "";
        }
    };

    useEffect(() => {
        let timer = setInterval(() => {
            handleSwipe();
        }, 3000);
        return () => clearInterval(timer);
    }, [slideCount]);

    return (
        <>
            <div className="main-top-card-area">
                <div className="main-top-card-list">
                    <div
                        className="main-top-card-track"
                        style={{
                            left: `0px`,
                            transform: `translateX(${slidePx}px)`,
                            transition: "ease-in 0.5s all",
                        }}
                        ref={slideRef}
                    >
                        {copiedCards.map((item, index) => (
                            <MainTopCardItem item={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
