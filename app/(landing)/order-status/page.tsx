'use client';

import { useState } from "react";
import OrderSubmited from "@/app/components/page/orderStatus/orderSubmited";
import OrderConfirmed from "@/app/components/page/orderStatus/orderConfirm";

export default function OrderStatus() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <main className="bg-gray-100 min-h-[80vh] flex flex-col justify-center items-center gap-12">
      <div className="max-w-5xl">
        <h1 className="text-5xl font-bold text-center">
          Order Status
        </h1>
      </div>

      {isConfirmed ? <OrderConfirmed /> : <OrderSubmited />}
    </main>
  );
}
