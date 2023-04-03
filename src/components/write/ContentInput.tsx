import React from "react";
import { useEffect, useState, useRef } from "react";
import { ContentInputProps } from "./_write.interface";

export default function ContentInput({ content, setContent }: ContentInputProps) {
    const [defaultContent, setDefaultContent] = useState<string | null>();
    const ref = useRef<HTMLTextAreaElement>(null);

    const handleSetContent = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setContent(target.value);
    };

    useEffect(() => {
        !defaultContent && content && setDefaultContent(content);
    }, [content]);

    useEffect(() => {
        const current = ref.current as HTMLTextAreaElement;
        if (defaultContent) {
            current.value = defaultContent;
        }
    }, [defaultContent]);

    return (
        <textarea
            className="write-info-item textarea-box"
            ref={ref}
            placeholder="해당 상품에 대한 내용을 작성해 주세요."
            onChange={handleSetContent}
        ></textarea>
    );
}
