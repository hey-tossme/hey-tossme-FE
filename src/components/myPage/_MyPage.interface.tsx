export interface UserInfo {
    id: number;
    email: string;
    name: string;
    imageURL: string;
    socialType: string | null;
    createdAt: string;
    status: string;
    account: string;
    bankName: string;
}

export interface ItemInfo {
    id: number;
    itemId: number;
    imageUrl: string;
    title: string;
    price: number;
    dueTime: string;
    address: string;
    addressDetail: string;
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
    sendKeyword: boolean;
    setSendKeyword: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface GetUserAccount {
    bank: string;
    account: string;
    getAccount: boolean;
    setGetAccount: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PaginationType {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}
