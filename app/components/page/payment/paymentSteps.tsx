'use client';

import { FiCheckCircle } from "react-icons/fi";
import FileUpload from "../../ui/fileUploud";
import PriceFormat from "@/app/utils/priceFormater";
import Button from "../../ui/button";
import { useRouter } from "next/navigation";
import { UseCartStore } from "@/app/hooks/cart";
import { TransactionCheckout } from "@/app/api/service/transaction";
import { useState } from "react";

export default function PaymentStepsCard() {
  const { items, customerInfo, reset } = UseCartStore();
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const router = useRouter();

  const [file, setFile] = useState<File | null>();

  const handleConfirmPayment = async () => {
    if (!file) {
      alert("Please upload your payment receipt!");
      return;
    }

    if (!customerInfo) {
      alert("Customer information is missing, please return to checkout");
      router.push("/checkout");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("customerName", customerInfo.customerName);
      formData.append(
        "customerContact",
        customerInfo.customerContact!.toString()
      );
      formData.append("customerAddress", customerInfo.customerAddress);
      formData.append("image", file);
      formData.append(
        "purchasedItems",
        JSON.stringify(
          items.map((item) => ({ productId: item._id, qty: item.qty }))
        )
      );
      formData.append("totalPayment", totalPrice!.toString());

      const res = await TransactionCheckout(formData);

      reset();
      router.push(`/order-status/${res._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden h-fit">
      <div className="text-dark px-8 py-6 border-b border-gray-300">
        <h2 className="font-bold text-xl">Payment Steps</h2>
      </div>

      <div className="p-8 space-y-8">
        <div className="space-y-4">
          <ol className="list-decimal font-semibold text-dark pl-2 flex flex-col gap-4 mb-5">
            <li>
              Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred
              bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
            </li>
            <li>
              After completing the transfer, <b>keep the payment receipt</b> or a
              screenshot of the transfer confirmation. This will be needed for the
              next step.
            </li>
            <li>
              Upload the payment receipt/screenshot using the{" "}
              <b>'Upload Receipt & Confirm'</b> button below to validate your
              transaction.
            </li>
          </ol>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="font-semibold text-dark mb-4">Upload Your Payment Receipt</p>
          <FileUpload onFileSelect={setFile} />
        </div>

        <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
          <div className="font-semibold text-dark">Total Amount</div>
          <div className=" font-black text-primary">
            {PriceFormat(totalPrice)}
          </div>
        </div>

        <Button variant="dark" size="big" className="w-full" onClick={handleConfirmPayment}>
          <FiCheckCircle size={20} />
          Upload Receipt & Confirm Order
        </Button>
      </div>
    </div>
  );
}
      