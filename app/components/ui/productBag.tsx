import Image from "next/image";
import Button from "./button";
import PriceFormat from "@/app/utils/priceFormater";
import { FiTrash2 } from "react-icons/fi";
import { UseCartStore } from "@/app/hooks/cart";
import { GetImageUrl } from "@/app/api/api";

export default function ProductBag() {
  const {items, removeItem} = UseCartStore();
  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => (
          <div className="border-b border-gray-200 p-4 flex gap-4 hover:bg-gray-50 transition-colors" key={item._id}>
            <div className="bg-gray-100 rounded-lg aspect-square w-20 flex justify-center items-center shrink-0">
              <Image
                src={GetImageUrl(item.imageUrl)}
                width={60}
                height={60}
                alt={item.name}
                className="aspect-square object-contain"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <p className="text-sm font-semibold text-dark">{item.name}</p>
              <div className="flex gap-3 font-medium text-xs text-gray-600 mt-1">
                <span className="text-dark font-semibold">{item.qty}x</span>
                <span className="text-primary">{PriceFormat(item.price)}</span>
              </div>
            </div>

            <Button
              size="small"
              variant="ghost"
              className="w-8 h-8 p-0 shrink-0 text-gray-500 hover:text-red-500"
              onClick={() => removeItem(item._id)}
            >
              <FiTrash2 size={16} />
            </Button>
          </div>
        ))
      ) : (
        <div className="p-8 text-center text-gray-500 text-sm">
          Your cart is empty
        </div>
      )}
    </div>
  );
}
