import { FC, useEffect, useState } from "react";
import styles from "./product.module.scss";
import { Image } from "../image";
import { ProductDescription } from "../product-description";

export interface IProduct {
    src: string;
    title: string;
    description: string;
    price: number;
}

export const Product: FC<IProduct> = ({title, description, src, price}) => {
    // let random = (Math.floor(Math.random() * 100 + 1));
    // const [id, setId] = useState<string>(random.toString());
    // const [userState, setUserState] = useState<any>();

    // useEffect(()=>{
    //     const getUser = async () => {
    //         const user = await fetch(`https://dummyjson.com/products/${id}`);
    //         const data = await user.json();
    //         setUserState(data);
    //     }
    //     getUser();
    // },[]);

    return (
        <div className={styles.bread_card}>
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