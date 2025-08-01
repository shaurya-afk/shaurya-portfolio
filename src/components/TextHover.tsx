import React from "react";

export function TitleText({ text }: { text: string }) {
    return (
        <div className="w-full px-12 pt-28">
            <h2 className="text-[5rem] font-extrabold text-[#f5f5f5]">{text}</h2>
        </div>
    );
}
