import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItem from "../@common/product/CardItem";
import { CardListProps } from "./_Category.interface";
import { getBookmarkState } from "../../api/bookmark/bookmark";
import { useAppSelector } from "../../store/hooks/configureStore.hook";

export default function CardList({ items, page }: CardListProps) {
    const user = useAppSelector((state) => state.user);

    return (
        <div className="card-list-wrapper">
            <div className="card-list">
                {items &&
                    items.map((item) => {
                        return <CardItem key={item.id} item={item} page={page} />;
                    })}
            </div>
        </div>
    );
}
