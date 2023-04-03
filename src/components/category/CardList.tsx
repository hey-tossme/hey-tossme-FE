import axios from "axios";
import CardItem from "../@common/product/CardItem";
import { CardListProps } from "./_Category.interface";

export default function CardList({ items, page }: CardListProps) {
    return (
        <div className="card-list-wrapper">
            <div className="card-list">
                {items.map((item) => {
                    return <CardItem key={item.id} id={item.id} item={item} page={page} />;
                })}
            </div>
        </div>
    );
}
