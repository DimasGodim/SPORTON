import Button from "@/app/components/ui/button";
import Modal from "@/app/components/ui/admin/Modal";
import { useState } from "react";
import Image from "next/image";
import PriceFormat from "@/app/utils/priceFormater";
import { FiCheck, FiX } from "react-icons/fi";
import { Transaction } from "@/app/api";
import { GetImageUrl } from "@/app/api/api";

type TTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  transaction: Transaction | null;
  onStatusChange: (id: string, status: "paid" | "rejected") => Promise<void>;
};

export default function TransactionModal({
  isOpen,
  onClose,
  transaction,
  onStatusChange,
}: TTransactionModalProps) {
  const [isUpdating, setIsUpdating] = useState(false);

  // ✅ WAJIB: biar TS & React aman
  if (!transaction) return null;

  const handleStatusUpdate = async (status: "paid" | "rejected") => {
    setIsUpdating(true);
    try {
      await onStatusChange(transaction._id, status);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="flex gap-6">
        <div className="min-w-50">
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>

          {transaction.paymentProof ? (
            <Image
              src={GetImageUrl(transaction.paymentProof)}
              alt="payment proof"
              width={200}
              height={400}
              className="rounded-md border"
            />
          ) : (
            <div className="text-center p-4 border rounded-md">
              <p className="text-sm text-gray-500">
                No payment proof uploaded
              </p>
            </div>
          )}
        </div>

        <div className="w-full">
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>

          <div className="bg-gray-100 rounded-md flex flex-col gap-2.5 p-4 text-sm mb-5">
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Date</div>
              <div className="text-right">
                {new Date(transaction.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>

            <div className="flex justify-between font-medium">
              <div className="opacity-50">Customer</div>
              <div className="text-right">{transaction.customerName}</div>
            </div>

            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right">{transaction.customerContact}</div>
            </div>

            <div className="flex justify-between gap-10 font-medium">
              <div className="opacity-50 whitespace-nowrap">
                Shipping Address
              </div>
              <div className="text-right">
                {transaction.customerAddress}
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>

          <div className="space-y-3">
            {transaction.purchasedItems.map((item, index) => {
              if (!item.productId) {
                return (
                  <div
                    key={index}
                    className="border border-red-200 bg-red-50 rounded-lg p-2 text-sm text-red-600"
                  >
                    Product data not found (possibly deleted)
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-2 flex items-center gap-3"
                >
                  {item.productId.imageUrl && (
                    <div className="bg-gray-100 rounded aspect-square w-8 h-8 overflow-hidden">
                      <Image
                        src={GetImageUrl(item.productId.imageUrl)}
                        width={32}
                        height={32}
                        alt={item.productId.name}
                      />
                    </div>
                  )}

                  <div className="font-medium text-sm">
                    {item.productId.name}
                  </div>

                  <div className="font-medium ml-auto text-sm">
                    {item.qty} units
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between text-sm mt-6">
            <h4 className="font-semibold">Total</h4>
            <div className="text-primary font-semibold">
              {PriceFormat(parseInt(transaction.totalPayment))}
            </div>
          </div>

          <div className="flex justify-end gap-5 mt-12">
            {isUpdating ? (
              <div className="text-center text-sm">Updating...</div>
            ) : (
              <>
                <Button
                  className="text-primary! bg-primary-light! rounded-md"
                  size="small"
                  onClick={() => handleStatusUpdate("rejected")}
                >
                  <FiX size={20} />
                  Reject
                </Button>

                <Button
                  className="text-white! bg-[#50C252]! rounded-md"
                  size="small"
                  onClick={() => handleStatusUpdate("paid")}
                >
                  <FiCheck size={20} />
                  Approve
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}
