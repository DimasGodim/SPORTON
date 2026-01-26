import { FiCreditCard } from "react-icons/fi";
import { GetAllBanks } from "@/app/api/service/bank";

export default async function PaymentOptionsCard() {
  const bank = await GetAllBanks();

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden h-fit">
      <div className="text-dark px-8 py-6 border-b border-gray-300">
        <h2 className="font-bold text-xl">Payment Methods</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {bank.map((payment, index) => (
          <div
            key={index}
            className="p-6 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between gap-6">
              
              <div className="flex items-center gap-4 min-w-0">
                <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                  <FiCreditCard size={24} className="text-blue-600" />
                </div>

                <div className="min-w-0">
                  <div className="font-bold text-dark text-lg">
                    {payment.bankName}
                  </div>
                  <div className="text-sm text-gray-600 mt-1 font-mono break-all">
                    {payment.accountNumber}
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                <span className="bg-blue-50 text-blue-700 text-xs px-4 py-1.5 rounded-full font-semibold">
                  Bank Transfer
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
