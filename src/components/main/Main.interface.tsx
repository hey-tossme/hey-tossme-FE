export interface ICard {
    id: number;
    name: string;
    price: string;
    date: string;
    place: string;
    img: any;
}

export interface ICardItem {
    item: ICard;
}
