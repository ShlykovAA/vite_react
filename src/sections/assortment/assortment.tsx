import { Product, IProduct, IProductItem } from "../../components/product";
import sourdoughLoaf from "/1.jpg";
import baguette from "/rr.jpg";
import farmersLoaf from "/gh.jpg";
import roundBread from "/trrt.jpg"
import styles from "./assortment.module.scss"
import { useProductsFetch } from "../search/search";
import { useEffect, useState } from "react";


const config: IProduct[] = [
    {
        src: sourdoughLoaf,
        title: "Sourdough Loaf",
        description: "Sample text, consectetur adipiscing.",
        price: 4.65,
    }, {
        src: baguette,
        title: "Baguette",
        description: "Small-batch sourdough baguette.",
        price: 3.05,
    }, {
        src: farmersLoaf,
        title: "Farmers Loaf",
        description: "Slow-fermented sourdough Rye studded with Kalamata.",
        price: 5.50,
    }, {
        src: roundBread,
        title: "Round Bread",
        description: "Made with 100% whole grain flour and high in fiber.",
        price: 5.15,
    }];

// const useFetchProducts = () => {
//     const [products, setProducts] = useState<undefined | IProductItem[]>();
//     const ids: number[] = [];
//     for (let i=0;i<3;i++) {
//         const id = Math.floor(Math.random() * 10) + 1;
//         ids.push(id)
//     }
//     console.log(ids)
//     useEffect(()=>{
//         const promises: Promise<any>[] = [];
//         for(let i=0; i<3;i++){
//             promises.push(fetch(`https://dummyjson.com/products/${ids[i]}`))
//         }
//         Promise.all(promises)
//         .then((res)=>res.map((promise)=>promise.json()))
//         .then((data)=>{
//             console.log("data",data)
//             setProducts(data)
//         })

//     },[])

//     return products;
// }

export const Assortment = () => {
    // const products = useFetchProducts();
    // console.log(products)
    // return (
    //     <div className={styles.main_bread_div}>
    //         {products?.map((product:any) => {
    //             return (<Product description={product.description} key={product.id} price={product.price} src={product.images[0]} title={product.title} />)
    //         })}
    //     </div>
    // )
};