import React from "react";
import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/configureStore.hook";
import { useNavigate } from "react-router-dom";
import { setModalOpen } from "../../../store/modules/modal";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { CardItemProps } from "../../category/_Category.interface";
import { customNullItemImg, commaNums, date } from "../../../hooks/utils";
import {
    deleteBookmarkState,
    getBookmarkState,
    setBookmarkState,
} from "../../../api/bookmark/bookmark";

export default function CardItem({ item, page }: CardItemProps) {
    const { id, imageUrl, title, price, dueTime, address, status } = item;
    const user = useAppSelector((state) => state.user);
    const [isBookmarkItems, setIsBookmarkItems] = useState<any>();
    const [bookmark, setBookmark] = useState<boolean>();
    const bookmarkRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getBookmarkState(user.token, page, 8).then((response) => {
            setIsBookmarkItems(response.data.content);
        });
    }, [bookmark]);

    useEffect(() => {
        isBookmarkItems &&
            isBookmarkItems.map((isBookmarkItem: any) => {
                if (item.id === isBookmarkItem.itemId) {
                    setBookmark(true);
                }
            });
    }, [isBookmarkItems]);

    useEffect(() => {
        const bookMarkClick: EventListenerOrEventListenerObject = (e: Event) => {
            const current = bookmarkRef.current as HTMLDivElement;
            if (bookmarkRef.current && current.contains(e.target as Node)) {
                handleSetBookmark();
            } else {
                const cardCurrent = cardRef.current as HTMLDivElement;
                if (cardCurrent && cardCurrent.contains(e.target as Node)) {
                    navigate(`/detail/${id}`, { state: { item: item, page: page } });
                }
            }
        };
        document.addEventListener("mousedown", bookMarkClick);
        return () => {
            document.removeEventListener("mousedown", bookMarkClick);
        };
    }, [bookmarkRef, cardRef, bookmark]);

    const handleSetBookmark = () => {
        if (bookmark) {
            deleteBookmarkState(user.token, item.id).then(() => {
                setBookmark(false);
            });
        } else {
            setBookmarkState(user.token, item.id).then(() => {
                setBookmark(true);
            });
        }
        !user && dispatch(setModalOpen());
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
                        {bookmark ? (
                            <BsBookmarkFill className="bookmark-btn" />
                        ) : (
                            <BsBookmark className="bookmark-btn" />
                        )}
                    </div>
                </div>
                <p className="item-info-price">{commaNums(price)}원</p>
                <p className="item-info-duedate">{date(dueTime)}</p>
                <p className="item-info-address">{address}</p>
            </div>
        </div>
    );
}
