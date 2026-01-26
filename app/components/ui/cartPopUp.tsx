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
        <div className="absolute top-14 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 w-96 z-50 overflow-hidden">
            <div className="w-full font-bold text-base border-b border-gray-200 px-6 py-4 bg-gray-50">Shopping Cart</div>
            
            <div className="max-h-96 overflow-auto">
                <ProductBag />
            </div>
            
            <div className="border-t border-gray-200 px-6 py-4 space-y-4">
                <div className="flex justify-between items-center">
                    <div className="font-semibold text-dark">Total:</div>
                    <div className="text-lg font-bold text-primary">{PriceFormat(totalPrice)}</div>
                </div>
                <Button 
                    variant="dark" 
                    size="normal" 
                    className="w-full" 
                    onClick={() => router.push('/checkout')}
                >
                    Checkout <FiArrowRight size={18}/>
                </Button>
            </div>
        </div>
    )

}