import { AxiosResponse } from "axios";

export interface IConfirmController {
    confirmCode: (email: string, code: string) => Promise<AxiosResponse<any, any>>;
    defaultEvent: (email: string) => void;
    confirm: boolean;
    setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: () => void;
    registerEmail: string;
}

export interface IProfileFiles {
    files: File | null;
    setFiles: React.Dispatch<React.SetStateAction<File | null>>;
    imageSrc: string | ArrayBuffer | null;
    setImageSrc: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
}

export interface IModalController {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
