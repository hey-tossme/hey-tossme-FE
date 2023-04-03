export interface NotifyProps {
    getIsNew: (answer: boolean) => void;
}

export interface NotifyNavigateProps {
    isNew: boolean;
    setIsNew: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NotifyType {
    id: number;
    itemId: number;
    type: string;
    title: string;
    readOrNot: boolean;
    createAt: string;
}

export interface NotifyContainerProps {
    isRead: boolean;
    list: Array<NotifyType>;
}

export interface NotifyListProps {
    isRead: boolean;
    list: Array<NotifyType>;
}

export interface NotifyItemProps {
    isRead: boolean;
    item: NotifyType;
}
