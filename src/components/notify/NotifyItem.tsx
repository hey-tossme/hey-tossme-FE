import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks/configureStore.hook";
import { deleteList, updateReadList } from "../../store/modules/notify";
import { FiX } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { NotifyItemProps } from "./_Notify.interface";

export default function NotifyItem({ isRead, item }: NotifyItemProps) {
    const dispatch = useAppDispatch();
    const dark = useAppSelector((state) => state.dark);
    const [targetItem, setTargetItem] = useState<any>();

    useEffect(() => {
        axios.get("../../../public/fakeData/product.json").then((res) => {
            const itemId = item.itemId;
            const productList = res.data.data.content;
            const target = productList.filter((item: any) => item.id === itemId);
            setTargetItem(target[0]);
        });
    }, []);

    const handleDelete = async () => {
        // x 버튼 클릭시 알림 삭제하기
        try {
            const res = await axios.delete(`/fakeData/notification.json?id=${item.id}`);
            console.log(res);
        } catch (err) {
            console.log("error");
        }
        dispatch(deleteList(item));
    };

    const handleRead = async () => {
        // 알림 item 클릭시 읽음 처리 readOrNot: true 로 수정
        try {
            const res = await axios.patch(`/fakeData/notification.json?id=${item.id}`, {
                readOrNot: true,
            });
            console.log(res);
        } catch (err) {
            console.log("error");
        }
        dispatch(updateReadList(item));
    };

    // console.log(dark.dark);
    console.log(targetItem);

    return (
        <Link
            to={item.type !== "transaction" ? `/detail/${item.itemId}` : "/notify"}
            state={item.type !== "transaction" && targetItem && { item: targetItem }}
        >
            <div onClick={handleRead} className="notify-item">
                <div onClick={handleDelete} className="delete-btn">
                    {dark.dark ? (
                        <FiX size="20px" color="#ffffff" />
                    ) : (
                        <FiX size="20px" color="#333333" />
                    )}
                </div>
                <div className="notify-text-group">
                    <div className="notify-icon">
                        {!isRead && dark.dark && <FaRegBell size="20px" color="#ffffff" />}
                        {!isRead && !dark.dark && <FaRegBell size="20px" color="#333333" />}
                        {isRead && <FaRegBell size="20px" color="#A6A6A6" />}
                    </div>
                    {item.type === "transaction" && (
                        <p className="notify-text">
                            <span className="title">{item.title}</span>에 대한 거래가
                            완료되었습니다.
                        </p>
                    )}
                    {item.type === "bookmark" && (
                        <p className="notify-text">
                            내가 올린 <span className="title">{item.title}</span> 상품이 다른
                            사용자의 위시 리스트에 등록되었습니다.
                        </p>
                    )}
                    {item.type === "keyword" && (
                        <p className="notify-text">
                            내가 등록한 관심 키워드와 관련된 상품이 게시되었습니다. 지금 확인해
                            보세요!
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}
