import Button from "../button";
import Modal from "./Modal";
import { FiAlertTriangle } from "react-icons/fi";

type TDeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteModal({ isOpen, onClose, onConfirm }: TDeleteModalProps){
    return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Confirmation">
      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <div className="bg-red-100 p-3 rounded-lg text-red-600 shrink-0">
            <FiAlertTriangle size={24} />
          </div>
          <div>
            <p className="font-semibold text-dark text-lg">Are you sure?</p>
            <p className="text-gray-600 mt-2">
              This action cannot be undone. This will permanently delete this item from the system.
            </p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm text-red-700">⚠ This action is permanent and cannot be reversed.</p>
        </div>

        <div className="flex gap-4">
          <Button variant="ghost" size="big" className="w-full" onClick={onClose}>
            Cancel
          </Button>
          <Button size="big" className="w-full bg-red-600 hover:bg-red-700" onClick={onConfirm}>
            Yes, Delete it
          </Button>
        </div>
      </div>
    </Modal>
)}
