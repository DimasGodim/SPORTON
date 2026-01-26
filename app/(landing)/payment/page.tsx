import PaymentOptionsCard from "@/app/components/page/payment/paymentOptions";
import PaymentStepsCard from "@/app/components/page/payment/paymentSteps";

export default function PaymentPage() {
    return (
        <main className="bg-gray-50 min-h-[calc(100vh-80px)] py-20">
            <div className="container mx-auto max-w-5xl">
                <h1 className="mb-16 font-black text-4xl md:text-5xl text-center text-dark">Payment</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <PaymentOptionsCard />
                    <PaymentStepsCard />
                </div>
            </div>
        </main>
    )
}