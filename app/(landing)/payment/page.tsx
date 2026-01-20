import PaymentOptionsCard from "@/app/components/page/payment/paymentOptions";
import PaymentStepsCard from "@/app/components/page/payment/paymentSteps";

export default function PaymentPage() {
    return (
        <main className="bg-gray-100 min-h-[80vh] flex items-center justify-center py-20">
            <div className="max-w-5xl w-full space-y-12">
                <h1 className="font-bold text-5xl text-center">Payment</h1>
                <div className="grid grid-cols-2 gap-12">
                    <PaymentOptionsCard />
                    <PaymentStepsCard />
                </div>
            </div>
            
        </main>
    )
}