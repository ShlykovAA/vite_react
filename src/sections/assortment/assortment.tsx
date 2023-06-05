import { Product, IProduct } from "../../components/product";
import sourdoughLoaf from "/1.jpg";
import baguette from "/rr.jpg";
import farmersLoaf from "/gh.jpg";
import roundBread from "/trrt.jpg"
import styles from "./assortment.module.scss"


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



export const Assortment = () => {
    return (
        <div className={styles.main_bread_div}>
            {/* {config.map((item)=> (<Product {...item}/>))} */}
        </div>
    )
};