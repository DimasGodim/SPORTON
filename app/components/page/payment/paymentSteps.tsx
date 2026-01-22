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
    <div className="bg-white rounded-lg shadow space-y-4">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <h1 className="font-bold text-lg">Payment Steps</h1>
      </div>

      {/* Steps + Upload */}
      <div className="border-b border-gray-200 px-4 pb-4 space-y-4">
        <ol className="list-decimal text-xs pl-4 space-y-3">
          <li>
            Transfer the total amount of <b>{PriceFormat(totalPrice)}</b> to your preferred
            bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
          </li>
          <li>
            After completing the transfer, <b>keep the payment receipt</b> or a
            screenshot of the transfer confirmation.
          </li>
          <li>
            Upload the payment receipt/screenshot using the{" "}
            <b>'Upload Receipt & Confirm'</b> button below.
          </li>
        </ol>

        <FileUpload onFileSelect={setFile} />
      </div>

      {/* Total */}
      <div className="flex justify-between px-4">
        <div className="font-semibold text-dark">Total</div>
        <div className="text-primary">
          {PriceFormat(totalPrice)}
        </div>
      </div>

      {/* Action */}
      <div className="px-4 pb-4">
        <Button variant="dark" className="w-full" onClick={handleConfirmPayment}>
          <FiCheckCircle color="white" />
          Upload Receipt & Confirm
        </Button>
      </div>
    </div>
  );
}
