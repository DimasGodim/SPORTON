import { Transaction } from "@/app/api";
import PriceFormat from "@/app/utils/priceFormater";
import { FiEye } from "react-icons/fi";

type TTransactionTableProps = {
  onViewDetails: (transaction: Transaction) => void;
  transactions: Transaction[];
};

export default function TransactionTable  ({
  onViewDetails,
  transactions,
}: TTransactionTableProps)  {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
      case "rejected":
        return "bg-red-100 text-red-600 border-red-300";
      case "paid":
        return "bg-green-100 text-green-600 border-green-300";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50">
          <tr className="border-b border-gray-200">
            <th className="px-6 py-5 font-bold text-dark text-sm">Date</th>
            <th className="px-6 py-5 font-bold text-dark text-sm">Customer</th>
            <th className="px-6 py-5 font-bold text-dark text-sm">Contact</th>
            <th className="px-6 py-5 font-bold text-dark text-sm">Total</th>
            <th className="px-6 py-5 font-bold text-dark text-sm">Status</th>
            <th className="px-6 py-5 font-bold text-dark text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((data) => (
            <tr
              key={data._id}
              className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-5 font-medium text-dark text-sm">
                {new Date(data.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </td>
              <td className="px-6 py-5 font-medium text-dark">{data.customerName}</td>
              <td className="px-6 py-5 font-medium text-dark">{data.customerContact}</td>
              <td className="px-6 py-5 font-medium text-dark">
                {PriceFormat(parseInt(data.totalPayment))}
              </td>

              <td className="px-6 py-5 font-medium">
                <div
                  className={`px-3 py-1.5 rounded-full border text-center w-fit text-xs font-semibold uppercase ${getStatusColor(
                    data.status,
                  )}`}
                >
                  {data.status}
                </div>
              </td>
              <td className="px-6 py-5 flex items-center gap-2">
                <button
                onClick={() => onViewDetails(data)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 text-dark rounded-lg transition-colors font-medium"
                title="View details"
              >
                <FiEye size={18} />
                <span>View Details</span>
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};