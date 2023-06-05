import React, { FC, ReactNode} from "react";
import styles from "./product.module.scss";
import { Image } from "../image";
import { ProductDescription } from "../product-description";
import {lessonThemeContext} from "../../providers/theme-provider"


export interface IProduct {
    src: string;
    title: string;
    description: string;
    price: number;
    unique?: boolean;
    children?: ReactNode;
}

export interface IProductItem {
    title: string;
    description: string;
    price: number;
    thumbnail?: string;
    id: number;
}

export const Product: FC<Partial<IProduct>> = ({children, description, price, src, title}) => {
    const x = React.useContext(lessonThemeContext)
    return (
        <div className={`${styles.bread_card} ${styles[x.theme]}`}>
            <div className={styles.control}>
                <Image src={src} className={styles.bread_img}/>
            </div>
            <div className={styles.control}>
                <ProductDescription>
                    <h4 className={styles.bread_title}>{title}</h4>
                    <p>{description}</p>
                    <h5 className={styles.bread_price}>$ {price}</h5>
                </ProductDescription>
            </div>
        </div>
    );
}