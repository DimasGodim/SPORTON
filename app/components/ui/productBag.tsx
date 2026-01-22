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
      {items.map((item) => (
        <div className="border-b border-gray-200 p-4 flex gap-3" key={item._id}>
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={GetImageUrl(item.imageUrl)}
              width={63}
              height={63}
              alt={item.name}
              className="aspect-square object-contain"
            />
          </div>

          <div className="self-center">
            <div className="text-sm font-medium">{item.name}</div>
            <div className="flex gap-3 font-medium text-xs">
              <div>{item.qty}x</div>
              <div className="text-primary">{PriceFormat(item.price)}</div>
            </div>
          </div>

          <Button
            size="small"
            variant="ghost"
            className="w-7 h-7 p-0! self-center ml-auto"
            onClick={() => removeItem(item._id)}
          >
            <FiTrash2 />
          </Button>
        </div>
      ))}
    </div>
  );
}
