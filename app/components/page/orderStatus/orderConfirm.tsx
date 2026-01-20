import Image from "next/image";

export default function OrderConfirmed(){
    const reloadOrderStatus = () => {
        window.location.reload();
    };
    
    return(
        <div className="bg-white w-160 p-16 flex flex-col justify-center items-center gap-6">
            <Image src="/icon-order-confirmed.svg" alt="" width={117} height={117}/>
            <h2 className="text-2xl font-semibold">Order Confirmed!!</h2>
            <p className="text-center">
                We have received your payment, and your order is currently processed by
                our staff, just wait until your favorite sportswear arrive in your home.
                We will contact you in Whatsapp for further shipping updates.
            </p>
        </div>
    )
}