'use client';

import { FiCheckCircle } from "react-icons/fi";
import FileUpload from "../../ui/fileUploud";
import PriceFormat from "@/app/utils/priceFormater";
import Button from "../../ui/button";
import { useRouter } from "next/navigation";
import { cartList } from "@/app/static/data";

const totalPrice = cartList.reduce(
  (total, item) => total + item.price * item.qty,
  0
);

export default function PaymentStepsCard() {
  const router = useRouter();

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

        <FileUpload />
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
        <Button
          variant="dark"
          className="w-full"
          onClick={() => router.push("/order-status")}
        >
          <FiCheckCircle color="white" />
          Upload Receipt & Confirm
        </Button>
      </div>
    </div>
  );
}
