import axios from "axios";
import CardItem from "../@common/product/CardItem";
import { CardListProps } from "./_Category.interface";
import { useEffect, useState } from "react";
import { getBookmarkState } from "../../api/bookmark/bookmark";
import { useAppDispatch, useAppSelector } from "../../store/hooks/configureStore.hook";
import { setBookmarkList } from "../../store/modules/bookmark";

export default function CardList({ items, page }: CardListProps) {
    const token = useAppSelector((state) => state.user.token);
    const [bookmark, setBookmark] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getBookmarkState(token, page, 8).then((response) => {
            dispatch(setBookmarkList(response.data.content));
        });
    }, [bookmark]);

    return (
        <div className="card-list-wrapper">
            <div className="card-list">
                {items.map((item) => {
                    return (
                        <CardItem
                            key={item.id}
                            id={item.id}
                            item={item}
                            page={page}
                            bookmark={bookmark}
                            setBookmark={setBookmark}
                        />
                    );
                })}
            </div>
        </div>
    );
}
