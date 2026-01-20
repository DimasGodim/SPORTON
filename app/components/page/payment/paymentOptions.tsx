import { paymentList } from "@/app/static/data";
import { FiCreditCard } from "react-icons/fi";

export default function PaymentOptionsCard() {
  return (
    <div className="bg-white rounded-lg shadow space-y-4">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <h2 className="font-bold text-lg">Payment Options</h2>
      </div>

      {/* List */}
      <div className="space-y-4 px-4 pb-4">
        {paymentList.map((payment, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
          >
            {/* Icon */}
            <div className="bg-blue-100 p-3 rounded-md">
              <FiCreditCard size={22} color="#3b82f6" />
            </div>

            {/* Info */}
            <div className="space-y-1">
              <div className="font-bold">
                {payment.bank_name}
              </div>
              <div className="text-sm text-gray-600">
                {payment.account_number}
              </div>
            </div>

            {/* Badge */}
            <div className="ml-auto bg-blue-50 text-dark-alternate text-xs px-3 py-1 rounded-md">
              Bank Transfer
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
