import { useSelector } from "react-redux"
import { IStore } from "../types"

export const useProductsSelector = () => {
    return useSelector((state: IStore) => state.products);
}