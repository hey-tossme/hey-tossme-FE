import React from "react";
import { useState, useRef, useEffect } from "react";
import { useAppSelector } from "../../../store/hooks/configureStore.hook";
import { useNavigate } from "react-router-dom";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { CardItemProps } from "../../category/_Category.interface";
import { customNullItemImg, commaNums, date } from "../../../hooks/utils";
import { deleteBookmarkState, setBookmarkState } from "../../../api/bookmark/bookmark";

export default function CardItem({ item, page, id, bookmark }: CardItemProps) {
    const { imageUrl, title, price, dueTime, address, addressDetail, status } = item;
    const user = useAppSelector((state) => state.user);
    const bookmarkList = useAppSelector((state) => state.bookmark);
    const bookmarkRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<boolean>();
    const navigate = useNavigate();

    useEffect(() => {
        bookmarkList &&
            bookmarkList.map((bookmarkItem: any) => {
                if (item.id === bookmarkItem.itemId) {
                    setState(true);
                }
            });
    }, [bookmarkList]);

    useEffect(() => {
        const bookMarkClick: EventListenerOrEventListenerObject = (e: Event) => {
            const current = bookmarkRef.current as HTMLDivElement;
            if (bookmarkRef.current && current.contains(e.target as Node)) {
                handleSetBookmark();
            } else {
                const cardCurrent = cardRef.current as HTMLDivElement;
                if (cardCurrent && cardCurrent.contains(e.target as Node)) {
                    navigate(`/detail/${id}`);
                }
            }
        };
        document.addEventListener("mousedown", bookMarkClick);
        return () => {
            document.removeEventListener("mousedown", bookMarkClick);
        };
    }, [bookmarkRef, cardRef, state]);

    const handleSetBookmark = () => {
        if (state) {
            deleteBookmarkState(user.token, item.id).then(() => {
                setState(false);
            });
        } else {
            setBookmarkState(user.token, item.id).then(() => {
                setState(true);
            });
        }
    };

    return (
        <div ref={cardRef} className="card-item">
            {status === "DONE" && <div className="sold-out-label">판매 완료</div>}
            <div className="item-img-area">
                <img
                    className="item-img"
                    src={customNullItemImg(imageUrl)}
                    alt="card-image"
                    loading="lazy"
                />
            </div>
            <div className="item-info-area">
                <div className="item-info-header">
                    <p className="item-info-title">{title}</p>
                    <div ref={bookmarkRef} className="bookmark-btn-wrapper">
                        {bookmark || state ? (
                            <BsBookmarkFill className="bookmark-btn" />
                        ) : (
                            <BsBookmark className="bookmark-btn" />
                        )}
                    </div>
                </div>
                <p className="item-info-price">{commaNums(price)}원</p>
                <p className="item-info-duedate">{date(dueTime)}</p>
                <p className="item-info-address">
                    {address} {addressDetail}
                </p>
            </div>
        </div>
    );
}
