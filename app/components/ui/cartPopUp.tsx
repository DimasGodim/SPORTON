import PriceFormat from "@/app/utils/priceFormater";
import Button from "./button";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import ProductBag from "./productBag";
import { UseCartStore } from "@/app/hooks/cart";


export default function CartPopUp(){
    const {items} = UseCartStore();
    const totalPrice = items.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    const router = useRouter();

    return(
        <div className="bg-white absolute top-12 right-0 shadow-xl shadow-black/10 border border-gray-200 w-90 z-100">
            <div className="w-full text-center font-bold text-base border-b border-gray-200 py-4">Shopping Cart</div>
            
            <ProductBag />
            <div className="flex justify-between items-center px-4 py-2">
                <div className="text-sm font-bold">Total</div>
                <div className="text-xs text-primary">{PriceFormat(totalPrice)}</div>
            </div>
            <div className="w-full px-4 pb-4">
                <Button variant="dark" size="small" className="w-full" onClick={() => router.push('/checkout')}>
                Checkout Now <FiArrowRight />
                </Button>
            </div>
        </div>
    )

}