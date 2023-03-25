import React from "react";
import { TitleInputProps } from "./_write.interface";

export default function TitleInput({ title, setTitle }: TitleInputProps) {
    const handleSetTitle = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setTitle(target.value);
    };

    return (
        <input
            className="write-info-item"
            type="text"
            placeholder="글 제목을 입력하세요"
            onChange={handleSetTitle}
        />
    );
}
