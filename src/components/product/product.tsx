import { FC, ReactNode, useEffect, useState } from "react";
import styles from "./product.module.scss";
import { Image } from "../image";
import { ProductDescription } from "../product-description";

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
const className = "gserhserhstrjsdtgjdgj";
const transformText = (str: string) => {
    return str.toUpperCase();
}

export const Product: FC<Partial<IProduct>> = ({children, description, price, src, title}) => {
    const [lightTheme, setLightTheme] = useState<boolean>();
    // const [product, setProduct] = useState<any>();

    let calc = 1;
    calc = Math.random();

    // useEffect(()=>{
    //     const loadProduct = async () => {
    //         const id = Math.floor(Math.random() * 10) + 1;
    //         const res = await fetch(`https://dummyjson.com/products/${id}`);
    //         const data = await res.json();
    //         setProduct(data);
    //     }
    //     loadProduct();
    // },[lightTheme]);

    const onClick = () => {
        setLightTheme((prevState) => !prevState);
    }

    return (
        <div className={styles.bread_card}>
            <div className={styles.control}>
                <Image src={src} className={styles.bread_img}/>
            </div>
            <div className={styles.control}>
                <ProductDescription>
                    {true ? (
                        <>
                            <h4 className={styles.bread_title}>{title}</h4>
                            <p>{description}</p>
                            <h5 className={styles.bread_price}>$ {price}</h5>
                        </>
                    ) : (
                        <p>Loading....</p>
                    )}
                </ProductDescription>
            </div>
        </div>
    );
}