import { FiX } from "react-icons/fi";

type TModalProps = {
  isOpen: boolean; // true / false
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: TModalProps){
    if (!isOpen) return null;
    
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute bg-black/50 backdrop-blur-sm transition-opacity w-full h-full"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-xl w-full max-w-2xl shadow-2xl">
        <div className="flex justify-between items-center px-8 py-6 border-b border-gray-200">
          <h3 className="font-bold text-2xl text-dark">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>
        <div className="p-8 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}
