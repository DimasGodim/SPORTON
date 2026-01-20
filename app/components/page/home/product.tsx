import ProductCard from "../../ui/productCard";
import PriceFormat from "@/app/utils/priceFormater";
import {productList} from "../../../static/data"

export default function ProductSection(){
    return(
        <section id="products-section" className="container mx-auto my-32">
            <h2 className="font-bold italic text-4xl text-center mb-11 text-primary">OUR <span className="text-dark">PRODUCT</span></h2>
            <div className="grid grid-cols-4 gap-x-5 gap-y-10">
                {productList.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.imgUrl}
                        name={product.name}
                        caterory={product.category}
                        price={PriceFormat(product.price)}
                    />
                ))}
            </div>
        </section>
    )
}