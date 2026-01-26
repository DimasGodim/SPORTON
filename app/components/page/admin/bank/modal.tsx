import Button from "@/app/components/ui/button";
import Modal from "@/app/components/ui/admin/Modal";
import { useEffect, useState } from "react";
import { Bank } from "@/app/api";
import { CreateBank, UpdateBank } from "@/app/api/service/bank";

type TBankInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  bank: Bank | null;
  onSuccess: () => void;
};

export default function BankInfoModal({
  isOpen,
  onClose,
  bank,
  onSuccess,
}: TBankInfoModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<Bank>>({
    accountName: "",
    accountNumber: "",
    bankName: "",
  });

  const isEditMode = Boolean(bank);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (isEditMode && bank?._id) {
        await UpdateBank(bank._id, formData);
      } else {
        await CreateBank(formData);
      }

      setFormData({
        accountName: "",
        accountNumber: "",
        bankName: "",
      });

      onSuccess();
      onClose();
    } catch (error) {
      console.error(
        isEditMode
          ? "Failed to update bank info"
          : "Failed to create bank info",
        error
      );
      alert(
        isEditMode
          ? "Failed to update bank info"
          : "Failed to create bank info"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  
  useEffect(() => {
    if (bank && isOpen) {
      setFormData({
        accountName: bank.accountName,
        accountNumber: bank.accountNumber,
        bankName: bank.bankName,
      });
    } else if (isOpen) {
      setFormData({
        accountName: "",
        accountNumber: "",
        bankName: "",
      });
    }
  }, [bank, isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditMode ? "Edit Bank Account" : "Add New Bank Account"}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="input-group-admin">
            <label htmlFor="bankName">Bank Name</label>
            <input
              id="bankName"
              type="text"
              placeholder="e.g. Mandiri, BCA, BRI"
              value={formData.bankName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group-admin">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              id="accountNumber"
              type="text"
              placeholder="1234567890"
              value={formData.accountNumber}
              onChange={handleChange}
            />
          </div>

          <div className="input-group-admin">
            <label htmlFor="accountName">Account Name / Holder</label>
            <input
              id="accountName"
              type="text"
              placeholder="Account holder name"
              value={formData.accountName}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button
          className="ml-auto mt-3 rounded-lg"
          type="submit"
          disabled={isSubmitting}
        >
          {isEditMode ? "Update Bank Info" : "Create Bank Info"}
        </Button>
      </form>
    </Modal>
  );
}
