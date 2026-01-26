'use client';

import Button from "@/app/components/ui/button";
import PriceFormat from "@/app/utils/priceFormater";

import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { GetImageUrl } from "@/app/api/api";

import { UseCartStore, CustomerInfo } from "@/app/hooks/cart";

export default function CheckoutPage() {
  const router = useRouter();

  const { setCustomerInfo, items, removeItem } = UseCartStore();

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
    <main className="bg-gray-50 min-h-[calc(100vh-80px)] py-20">
      <div className="container mx-auto max-w-6xl">
        <h1 className="font-black text-4xl md:text-5xl text-center mb-16 text-dark">
          Checkout Now
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="text-black px-8 py-6 border-b border-gray-300">
              <h2 className="font-bold text-xl">Order Information</h2>
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-dark">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-dark">
                  WhatsApp Number *
                </label>
                <input
                  type="text"
                  name="customerContact"
                  value={formData.customerContact}
                  onChange={handleInputChange}
                  placeholder="08123456789"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-dark">
                  Shipping Address *
                </label>
                <textarea
                  name="customerAddress"
                  rows={5}
                  value={formData.customerAddress}
                  onChange={handleInputChange}
                  placeholder="Enter your complete shipping address"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden h-fit sticky top-20">
            <div className="text-dark px-8 py-6 border-b border-gray-300">
              <h2 className="font-bold text-xl">Cart Items</h2>
            </div>

            <div className="p-8 space-y-4">
              <div className="max-h-96 overflow-y-auto mb-4 divide-y divide-gray-100">
              {items.length > 0 ? (
                items.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-4 py-4"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                      <img
                        src={GetImageUrl(item.imageUrl)}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="font-semibold text-dark leading-snug">
                        {item.name}
                      </p>
                      <p className="flex items-center gap-3 text-sm font-bold text-dark">
                        {item.qty}x{" "}
                        <span className="text-primary font-semibold">
                          {PriceFormat(item.price)}
                        </span>
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item._id)}
                      type="button"
                      className="text-dark"
                      aria-label="Remove item"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-8">
                  Your cart is empty
                </p>
              )}
            </div>


              <div className="border-t-2 border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>{PriceFormat(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-200 mt-2">
                  <span className="font-bold text-dark">Total</span>
                  <span className=" font-black text-primary">
                    {PriceFormat(totalPrice)}
                  </span>
                </div>
              </div>

              <Button
                variant="dark"
                size="big"
                className="w-full mt-6"
                onClick={handlePayment}
              >
                <FiCreditCard size={20} />
                Proceed to Payment
              </Button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
