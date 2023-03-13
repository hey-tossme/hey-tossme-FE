export interface IBtnState {
    btnState: boolean;
    setBtnState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IChatState {
    chatOpen: boolean;
    setChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
