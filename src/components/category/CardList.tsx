import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItem from "../@common/product/CardItem";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { CardListProps, listProps } from "./_Category.interface";

export default function CardList({ items }: CardListProps) {
    return (
        <div className="card-list-wrapper">
            <div className="card-list">
                {items &&
                    items.map((item) => {
                        return <CardItem key={item.id} item={item} />;
                    })}
            </div>
        </div>
    );
}
