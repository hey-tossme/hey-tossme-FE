export interface IChattingInfo {
    id: number;
    buyer: ISellerInfo;
    seller: ISellerInfo;
    item: IItemInfo;
    lastMessage: string;
    accountTransferStatus: boolean;
}

export interface ISellerInfo {
    id: number;
    email: string;
    name: string;
    imageURL: string;
    socialType: string | null;
    status: string;
    account: string | null;
    bankName: string | null;
}

export interface IItemInfo {
    id: number;
    seller: ISellerInfo;
    category: string;
    title: string;
    contents: string | null;
    price: number;
    createdAt: string;
    dueTime: string;
    latitude: number;
    longitude: number;
    imageUrl: string;
    status: string;
}

export interface IMessageInfo {
    id: number;
    sender: ISellerInfo;
    message: string;
}

export interface ChattingInfoState {
    chattingInfo: IChattingInfo[];
    setChattingInfo: React.Dispatch<React.SetStateAction<IChattingInfo[]>>;
}

export interface ItemInfo {
    item: IChattingInfo;
}

export interface IMessageListInfo {
    message: IMessageInfo;
}

export interface ITradeModal {
    tradeStatus: boolean;
    setTradeStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
