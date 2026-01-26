'use client';
import PriceFormat from "@/app/utils/priceFormater";
import { Product } from "@/app/api/index";
import { GetImageUrl } from "@/app/api/api";
import Link from "next/link";
import { UseCartStore } from "@/app/hooks/cart";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

export default function ProductSection({ products } : { products : Product[] }   ){
    const { addItem } = UseCartStore();
    const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product);
    };

    return(
        <section id="products-section" className="container mx-auto my-32">
            <h2 className="font-bold italic text-4xl text-center mb-11 text-primary">OUR <span className="text-dark">PRODUCT</span></h2>
            <div className="grid grid-cols-4 gap-x-5 gap-y-10">
                {products.map((product) => (
                    <Link href={`/product/${product._id}`} className="w-full p-1.5 hover:drop-shadow-xl duration-300" key={product._id}>
                        <div className="bg-[#F4EBEB] aspect-square w-full flex justify-center items-center relative rounded-lg overflow-hidden">
                            <Image src={GetImageUrl(product.imageUrl)} alt="" className="object-contain" fill />
                            <button className="w-10 h-10 bg-orange-500 absolute right-3 top-3 flex justify-center items-center hover:bg-orange-600 duration-300 rounded-lg" onClick={(e) => handleAddtoCart(e, product)}>
                                <FiPlus color="white" size={20}/>   
                            </button>
                        </div>
                        <div className="mt-4 relative">
                            <h2 className="text-[18px] font-medium">{product.name}</h2>
                            <div className="text-gray-600 text-sm">{product.category.name}</div>
                            <div className="absolute right-0 bottom-0 text-primary text-base font-medium">{PriceFormat(product.price)}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}