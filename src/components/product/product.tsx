import { FC } from "react";
import "./product.css"

export interface IProduct {
    src: string;
    title: string;
    description: string;
    price: number;
    revers?: boolean;
}

export const Product: FC<IProduct> = ({src, title, description, price, revers}) => {
    let element:string;
    if (revers) {
        element = "card_revers"
    } else {
        element = "";
    }
    return <div className={`bread_card ${element}`}>
        <img src={src} className="bread_img"/>
        <div className="bread_info">
            <h4 className="bread_title">{title}</h4>
            <p>{description}</p>
            <h5 className="bread_price">$ {price}</h5>
        </div>
    </div>;
}