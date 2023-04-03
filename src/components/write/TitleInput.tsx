import React from "react";
import { useEffect, useState, useRef } from "react";
import { TitleInputProps } from "./_write.interface";

export default function TitleInput({ title, setTitle }: TitleInputProps) {
    const [defaultTitle, setDefaultTitle] = useState<string | null>();
    const ref = useRef<HTMLInputElement>(null);

    const handleSetTitle = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setTitle(target.value);
    };

    useEffect(() => {
        !defaultTitle && title && setDefaultTitle(title);
    }, [title]);

    useEffect(() => {
        const current = ref.current as HTMLInputElement;
        if (defaultTitle) {
            current.value = defaultTitle;
        }
    }, [defaultTitle]);

    return (
        <input
            className="write-info-item"
            ref={ref}
            type="text"
            placeholder="글 제목을 입력하세요"
            onChange={handleSetTitle}
        />
    );
}
