export interface uploadImgProps {
    files: File | null;
    setFiles: React.Dispatch<React.SetStateAction<File | null>>;
    imageSrc: string | ArrayBuffer | null;
    setImageSrc: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
}

export interface CategorySelectProps {
    category: string | null;
    setCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface TitleInputProps {
    title: string | null;
    setTitle: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface PriceInputProps {
    price: Number | null;
    setPrice: React.Dispatch<React.SetStateAction<Number | null>>;
}

export interface ContentInputProps {
    content: string | null;
    setContent: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface AddressInputProps {
    address: string | null;
    setAddress: React.Dispatch<React.SetStateAction<string | null>>;
    addressDetail: string | null;
    setAddressDetail: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface DateSelectProps {
    date: string | null;
    setDate: React.Dispatch<React.SetStateAction<string | null>>;
    time: string | null;
    setTime: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface CustomDatepickerProps {
    date: string | null;
    setDate: React.Dispatch<React.SetStateAction<string | null>>;
}
