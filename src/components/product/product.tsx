import { FC } from "react";
import styles from "./product.module.scss"

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
        element = styles.card_revers;
    } else {
        element = "";
    }
    return (
        <div className={`${styles.bread_card} ${element}`}>
            <div className={styles.control}>
                <img src={src} className={styles.bread_img}/>
            </div>
            <div className={styles.control}>
                <div className={styles.bread_info}>
                    <h4 className={styles.bread_title}>{title}</h4>
                    <p>{description}</p>
                    <h5 className={styles.bread_price}>$ {price}</h5>
                </div>
            </div>
        </div>
    );
}