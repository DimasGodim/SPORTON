import { FiAlertCircle } from "react-icons/fi"

export default function OrderReject(){
    
    return(
        <div className="bg-white w-160 p-16 flex flex-col justify-center items-center gap-6">
            <div className="w-20 h-20 bg-primary-light rounded-full mx-auto p-3 flex justify-center items-center text-primary mb-5">
                <FiAlertCircle size={52} />
            </div>
            <h2 className="text-2xl font-semibold">Order Confirmed!!</h2>
            <p className="text-center">
                I'm sorry your order is rejected because your payment proof is not valid
            </p>
        </div>
    )
}