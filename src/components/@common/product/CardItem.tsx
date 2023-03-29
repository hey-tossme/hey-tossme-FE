import React from "react";
import { useState, useRef, useEffect } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { cardItemProps } from "../../category/_Category.interface";
import { customNullItemImg, commaNums, date } from "../../../hooks/utils";
import { useAppSelector } from "../../../store/hooks/configureStore.hook";
import { setBookmarkState } from "../../../api/bookmark/bookmark";

export default function CardItem({ item }: cardItemProps) {
    const { id, imageUrl, title, price, dueTime, address, status } = item;
    const [bookmark, setBookmark] = useState<boolean>();
    const bookmarkRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.user);

    useEffect(() => {
        const bookMarkClick: EventListenerOrEventListenerObject = (e: Event) => {
            const current = bookmarkRef.current as HTMLDivElement;
            if (bookmarkRef.current && current.contains(e.target as Node)) {
                handleSetBookmark();
            } else {
                const cardCurrent = cardRef.current as HTMLDivElement;
                if (cardCurrent && cardCurrent.contains(e.target as Node)) {
                    navigate(`/detail/${id}`, { state: { item: item } });
                }
            }
        };
        document.addEventListener("mousedown", bookMarkClick);
        return () => {
            document.removeEventListener("mousedown", bookMarkClick);
        };
    }, [bookmarkRef, cardRef, bookmark]);

    const handleSetBookmark = () => {
        bookmark ? setBookmark(false) : setBookmark(true);
        setBookmarkState(user.token, id).then((response) => {
            console.log(response);
        });
    };

    return (
        <div ref={cardRef} className="card-item">
            {status === "done" ? <div className="sold-out-label">판매 완료</div> : null}
            <div className="item-img-area">
                <img className="item-img" src={customNullItemImg(imageUrl)} alt="card-image"></img>
            </div>
            <div className="item-info-area">
                <div className="item-info-header">
                    <p className="item-info-title">{title}</p>
                    <div ref={bookmarkRef} className="bookmark-btn-wrapper">
                        {bookmark ? (
                            <BsBookmarkFill className="bookmark-btn" />
                        ) : (
                            <BsBookmark className="bookmark-btn" />
                        )}
                    </div>
                </div>
                <p className="item-info-price">{commaNums(price)}원</p>
                <p className="item-info-duedate">{date(dueTime)}</p>
                <p className="item-info-address">제주특별자치도 제주시 공항로 2</p>
            </div>
        </div>
    );
}
