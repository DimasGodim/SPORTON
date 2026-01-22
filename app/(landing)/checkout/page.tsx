'use client';

import Button from "@/app/components/ui/button";
import ProductBag from "@/app/components/ui/productBag";
import PriceFormat from "@/app/utils/priceFormater";

import { FiCreditCard } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { UseCartStore, CustomerInfo } from "@/app/hooks/cart";

export default function CheckoutPage() {
  const router = useRouter();

  const { setCustomerInfo, items } = UseCartStore();

  const [formData, setFormData] = useState<CustomerInfo>({
    customerName: "",
    customerContact: "",
    customerAddress: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    if (
      !formData.customerName.trim() ||
      !formData.customerContact.trim() ||
      !formData.customerAddress.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }

    setCustomerInfo(formData);
    router.push("/payment");
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

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
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Whatsapp Number
                </label>
                <input
                  type="text"
                  name="customerContact"
                  value={formData.customerContact}
                  onChange={handleInputChange}
                  placeholder="Enter your whatsapp number"
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Shipping Address
                </label>
                <textarea
                  name="customerAddress"
                  rows={7}
                  value={formData.customerAddress}
                  onChange={handleInputChange}
                  placeholder="Enter your shipping address"
                  className="w-full px-4 py-3 border rounded-lg resize-none"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-lg shadow p-4 space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="font-bold text-lg">Cart Items</h2>
            </div>

            <div className="overflow-auto max-h-80">
              <ProductBag />
            </div>

            <div className="flex justify-between">
              <span className="text-sm font-bold">Total</span>
              <span className="text-sm text-primary">
                {PriceFormat(totalPrice)}
              </span>
            </div>

            <Button
              variant="dark"
              size="normal"
              className="w-full"
              onClick={handlePayment}
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
