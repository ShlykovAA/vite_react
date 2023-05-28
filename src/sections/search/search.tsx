import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IProductItem, Product } from "../../components/product";
import { Input } from "../../components/input";

export const useProductsFetch = (query: string | undefined) => {
    const [products, setProducts] = useState<IProductItem[]>([]);
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res)=> res.json())
        .then((data) => {
            setProducts(data.products);
        });
    },[query])
    return products;
}

export const Search = () => {
    const [query, setQuery] = useState<string>();
    const products = useProductsFetch(query);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=> {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    },[query]);

    return (
        <>
            <div>
                <input ref={inputRef} type="text" value={query} onChange={(e)=>{
                    setQuery(e.target.value);
                }}/>
            </div>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
            }}>
                { products.length ? products.map((product:any) => {
                return <Product
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                src={product.images[0]}
                />
                }) : <p>Loading...</p>}
            </div>
        </>
    )
}