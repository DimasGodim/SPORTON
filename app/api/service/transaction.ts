import { FetchApi } from "../api";
import { Transaction } from "../index";

export const TransactionCheckout = async (
  form: FormData
): Promise<Transaction> => {
  return await FetchApi<Transaction>("/transactions/checkout", {
    method: "POST",
    body: form,
  });
};

export const GetTransactionById = async (id: string): Promise<Transaction> => {
  return await FetchApi<Transaction>(`/transactions/${id}`);
};