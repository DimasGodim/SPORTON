"use client";

import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "@/app/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { UseCartStore } from "@/app/hooks/cart";
import { Product } from "@/app/api/index";

export default function ProductActions({product, stock} : {product: Product; stock: number}) {
  const { addItem } = UseCartStore();
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  return (
    <div className="flex gap-8">
      <div className="border border-gray-500 inline-flex w-fit min-w-20.5">
        <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button
            className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty + 1)}
          >
            <FiChevronUp />
          </button>
          <button
            className="cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty > stock ? qty - 1 : qty)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>

      <Button onClick={() =>addItem(product, qty)}>
        <FiShoppingBag size={24} />
        Add to Cart
      </Button>

      <Button variant="dark" onClick={() => {addItem(product); push("/checkout");}}>
        Checkout Now
        <FiArrowRight size={24} />
      </Button>
    </div>
  );
}
