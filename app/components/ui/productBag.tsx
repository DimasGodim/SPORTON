import Image from "next/image";
import {cartList} from "@/app/static/data";
import Button from "./button";
import PriceFormat from "@/app/utils/priceFormater";
import { FiTrash2 } from "react-icons/fi";

export default function ProductBag() {
  return (
    <div>
      {cartList.map((item, index) => (
        <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
          <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
            <Image
              src={item.imgUrl}
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
          >
            <FiTrash2 />
          </Button>
        </div>
      ))}
    </div>
  );
}
