"use client";

import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Bank } from "@/app/api";
import { GetAllBanks } from "@/app/api/service/bank";
import { DeleteBank } from "@/app/api/service/bank";
import Button from "@/app/components/ui/button";
import BankInfoList from "@/app/components/page/admin/bank/list";
import BankInfoModal from "@/app/components/page/admin/bank/modal";
import DeleteModal from "@/app/components/ui/admin/DeleteModal";


export default function BankManagement () {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [bankToDeleteId, setBankToDeleteId] = useState("");

  const fetchBanks = async () => {
    try {
      const data = await GetAllBanks();
      if (data) {
        setBanks(data);
      }
    } catch (error) {
      console.error("Failed to fetch banks", error);
    }
  };

  const handleEdit = (bank: Bank) => {
    setSelectedBank(bank);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setBankToDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!bankToDeleteId) return;
    try {
      await DeleteBank(bankToDeleteId);
      fetchBanks();
      setIsDeleteModalOpen(false);
      setBankToDeleteId("");
    } catch (error) {
      console.error("Failed to delete bank", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBank(null);
  };

  useEffect(() => {
    fetchBanks();
  }, []);

  return (
    <main className="w-full space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bank Management</h1>
        <Button
          onClick={() => {
            setSelectedBank(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2"
        >
          <FiPlus size={20} />
          Add Bank
        </Button>
      </div>

      {banks.length > 0 ? (
        <BankInfoList
          banks={banks}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No banks found. Add one to get started!</p>
        </div>
      )}

      <BankInfoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        bank={selectedBank}
        onSuccess={fetchBanks}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </main>
  );
}
