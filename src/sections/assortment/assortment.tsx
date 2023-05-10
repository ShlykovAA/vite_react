import { Product, IProduct } from "../../components/product";
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import "./assortment.css"

const config: IProduct[] = [
    {
        src: viteLogo,
        title: "Sourdough Loaf",
        description: "Sample text, consectetur adipiscing.",
        price: 4.65,
    }, {
        src: reactLogo,
        title: "Baguette",
        description: "Small-batch sourdough baguette.",
        price: 3.05,
    }, {
        src: viteLogo,
        title: "Farmers Loaf",
        description: "Slow-fermented sourdough Rye studded with Kalamata.",
        price: 5.50,
        revers: true,
    }, {
        src: reactLogo,
        title: "Round Bread",
        description: "Made with 100% whole grain flour and high in fiber.",
        price: 5.15,
        revers: true,
    }];

export const Assortment = () => {
    return (
        <div className="main_bread_div">
            {config.map((item)=> (<Product {...item}/>))}
        </div>
    )
};