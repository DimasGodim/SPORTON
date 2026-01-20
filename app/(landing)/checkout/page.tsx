'use client';

import Button from "@/app/components/ui/button";
import ProductBag from "@/app/components/ui/productBag";
import { cartList } from "@/app/static/data";
import PriceFormat from "@/app/utils/priceFormater";
import { FiCreditCard } from "react-icons/fi";
import { useRouter } from "next/navigation";

const totalPrice = cartList.reduce(
  (total, item) => total + item.price * item.qty,
  0
);

export default function checkoutPage() {
  const router = useRouter();

  return (
    <main className="bg-gray-100 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-6xl w-full space-y-12">
        <h1 className="font-bold text-5xl text-center">
          Checkout Now
        </h1>

        <div className="grid grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="bg-white rounded-lg shadow space-y-4">
            <div className="border-b border-gray-200 p-4">
              <h2 className="font-bold text-lg">Order Information</h2>
            </div>

            <div className="space-y-4 px-4 pb-4">
              <div className="input-group space-y-2">
                <label htmlFor="full_name" className="block text-sm font-primary text-dark">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              <div className="input-group space-y-2">
                <label htmlFor="wa_number" className="block text-sm font-primary text-dark">
                  Whatsapp Number
                </label>
                <input
                  type="text"
                  id="wa_number"
                  placeholder="Enter your whatsapp number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              <div className="input-group space-y-2">
                <label htmlFor="shipping_address" className="block text-sm font-primary text-dark">
                  Shipping Address
                </label>
                <textarea
                  id="shipping_address"
                  rows={7}
                  placeholder="Enter your shipping address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-lg shadow p-4 space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="font-bold text-lg">Cart Items</h2>
            </div>

            <div className="overflow-auto max-h-75">
              <ProductBag />
            </div>

            <div className="flex justify-between">
              <div className="text-sm text-dark font-bold">Total</div>
              <div className="text-xs text-primary">
                {PriceFormat(totalPrice)}
              </div>
            </div>

            <Button
              variant="dark"
              size="normal"
              className="w-full"
              onClick={() => router.push("/payment")}
            >
              <FiCreditCard />
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
