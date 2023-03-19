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

export interface GetUserAccount {
    getUserAccountInfo: () => boolean;
    bank: string;
    account: string;
}
