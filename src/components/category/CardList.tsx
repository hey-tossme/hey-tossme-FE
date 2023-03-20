import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItem from "../@common/product/CardItem";
import { useAppSelector } from "../../store/hooks/configureStore.hook";

export default function CardList() {
    const searchResult = useAppSelector((state) => state.searchResult);
    const [cardList, setCardList] = useState<Array<any> | null>();

    useEffect(() => {
        setCardList(searchResult.content);
    }, [searchResult]);

    return (
        <div className="card-list-wrapper">
            <div className="card-list">
                {cardList &&
                    cardList.map((item) => {
                        return (
                            <CardItem
                                key={item.id}
                                id={item.id}
                                img={item.image_url}
                                title={item.title}
                                price={item.price}
                                endDate={item.dueTime}
                                address=""
                            />
                        );
                    })}
            </div>
        </div>
    );
}
