import { useEffect, useState } from "react";
import { IProductItem, Product } from "../../components/product";

const useProductsFetch = () => {
    const [products, setProducts] = useState<any>([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products`).then((res)=>{
           return res.json();
        }).then((data) => {
            setProducts(data.products);
            console.log(data.products)
        })
    },[])
    return products;
}

export const Search = () => {
    const [query, setQuery] = useState<string>();
    const [products, setProducts] = useState<any>([])

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/search?q=${query}`).then((res)=>{
           return res.json();
        }).then((data) => {
            setProducts(data.products);
            console.log(data.products)
        })
    },[query])

    return (
        <>
            <div>
                <input type="text" value={query} onChange={(e)=>{
                    setQuery(e.target.value);
                }}/>
            </div>
            <br />
            { products.length ? products.map((product:any) => {
              return <Product
               key={product.id}
               title={product.title} 
               description={product.description} 
               price={product.price} 
               src={product.images[0]} 
               />
            }) : <p>Loading...</p>}
            <br />
        </>
    )
}