import OrderSubmited from "@/app/components/page/orderStatus/orderSubmited";
import OrderConfirmed from "@/app/components/page/orderStatus/orderConfirm";
import OrderReject from "@/app/components/page/orderStatus/orderReject";
import { GetTransactionById } from "@/app/api/service/transaction";

export default async function OrderStatus({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;
  const transaction = await GetTransactionById(id);

  return (
    <main className="bg-gray-100 min-h-[80vh] flex flex-col justify-center items-center gap-12">
      <div className="max-w-5xl">
        <h1 className="text-5xl font-bold text-center">
          Order Status
        </h1>
      </div>
      {transaction.status === "pending" && <OrderSubmited />}
      {transaction.status === "paid" && <OrderConfirmed />}
      {transaction.status === "rejected" && <OrderReject />}
    </main>
  );
}
