import { useEffect } from "react"
import { fetchProducts, fetchProduct } from "../../store/reducers/productReducer";
import { useProductsSelector, useProductSelector } from "../../store/selectors/productsSelector";
import { useAppDispatch } from "../../store/hooks";

export const Products = () => {
    const dispatch = useAppDispatch();
    const products = useProductsSelector();
    const product = useProductSelector();

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchProduct(1))
    }, [dispatch])

    console.log(products)

    return (
        <div>
            <h1>Products</h1>
        </div>
    )
}