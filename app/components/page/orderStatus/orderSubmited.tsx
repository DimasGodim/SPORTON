'use client';

import Image from "next/image";
import Button from "../../ui/button";
import { FiRefreshCw } from "react-icons/fi";

export default function OrderSubmited(){
    const reloadOrderStatus = () => {
        window.location.reload();
    };
    
    return(
        <div className="bg-white w-160 p-16 flex flex-col justify-center items-center gap-6">
            <Image src="/icon-order-submitted.svg" alt="" width={117} height={117}/>
            <h2 className="text-2xl font-semibold">Order Submitted !!</h2>
            <p className="text-center">
                Your Order is recorded in our system, we are still confirming the
                payment status, please wait and your order status will be updated in
                less than 12 hours.
            </p>
            <Button variant="dark" onClick={reloadOrderStatus}>
                <FiRefreshCw />
                Refresh Order Status
            </Button>
        </div>
    )
}