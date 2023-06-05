import React from "react";

interface IImage {
    src: string | undefined;
    alt?: string;
    className?: string;
}

export const Image: React.FC<IImage> = ({src, alt, className}) => {
    return <img src={src} alt={alt} className={className}/>;
}