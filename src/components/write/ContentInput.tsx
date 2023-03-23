import React from "react";
import { ContentInputProps } from "./_write.interface";

export default function ContentInput({ content, setContent }: ContentInputProps) {
    const handleSetContent = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setContent(target.value);
    };

    return (
        <textarea
            className="write-info-item textarea-box"
            placeholder="해당 상품에 대한 내용을 작성해 주세요."
            onChange={handleSetContent}
        ></textarea>
    );
}
