export interface UserInfo {
    id: number;
    email: string;
    name: string;
    imageUrl: string;
    socialType: string | null;
    createdAt: string;
    status: string;
    account: string;
    bankname: string;
}

export interface ItemInfo {
    id: number;
    img: string;
    title: string;
    price: number;
    dueTime: string;
    address: string;
    status: string;
}

export interface ItemType {
    item: ItemInfo;
}

export interface KeywordInfo {
    id: number;
    keyword: string;
}

export interface KeywordType {
    keyword: KeywordInfo;
}

export interface GetUserAccount {
    getUserAccountInfo: () => boolean;
    bank: string;
    account: string;
}
