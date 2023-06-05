import React, { ReactNode } from "react";

interface IProductDescription {
    children: ReactNode;
}

export const ProductDescription: React.FC<IProductDescription> = ({ children }) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "280px",
            height: "280px",
            alignContent: "space-between",
        }}>
            {children}
        </div>
    );
};