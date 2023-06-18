import { useAppSelector } from "../hooks";

export const useProductsSelector = () => {
    return useAppSelector((state) => state.products.products);
}

export const useProductSelector = () => {
    return useAppSelector((state) => state.products.product);
}