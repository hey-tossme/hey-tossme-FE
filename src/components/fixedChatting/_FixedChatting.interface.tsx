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

export interface NewMessageInfo {
    id: number;
    sender: ISellerInfo;
    message: string;
}

export interface ChattingInfoState {
    chattingInfo: IChattingInfo[];
    setChattingInfo: React.Dispatch<React.SetStateAction<IChattingInfo[]>>;
    chatState: boolean;
    setChatState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ItemInfo {
    item: IChattingInfo;
    chatState: boolean;
    setChatState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ItemType {
    item: IChattingInfo;
}

export interface SendAccount {
    item: IChattingInfo;
    sendAccount: () => void;
}

export interface IMessageListInfo {
    message: IMessageInfo;
}

export interface NewMsgInfo {
    message: string;
    profileUrl: string;
    senderId: number;
    userName: string;
}

export interface NewMsgType {
    msg: NewMsgInfo;
}

export interface ITradeModal {
    item: IChattingInfo;
    tradeStatus: boolean;
    setTradeStatus: React.Dispatch<React.SetStateAction<boolean>>;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
