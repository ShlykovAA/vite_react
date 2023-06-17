import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchProducts } from "../../store/action/productsAction";
import { useProductsSelector } from "../../store/selectors/productsSelector";

export const Products = () => {
    const dispatch = useDispatch();
    const products = useProductsSelector();

    useEffect(() => {
        dispatch(fetchProducts() as any)
    }, [dispatch])

    console.log(products)

    return (
        <p>Products</p>
    )
}