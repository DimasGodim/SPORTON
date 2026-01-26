import { FetchApi } from "../api";
import { Transaction } from "../index";
import { GetAuthHeaders } from "../api";

export const TransactionCheckout = async (
  form: FormData,
): Promise<Transaction> => {
  return await FetchApi<Transaction>("/transactions/checkout", {
    method: "POST",
    body: form,
  });
};

export const GetTransactionById = async (id: string): Promise<Transaction> => {
  const res= await FetchApi<Transaction>(`/transactions/${id}`);
  return res
};

export const GetAllTransactions = async (): Promise<Transaction[]> => {
  const res= await FetchApi<Transaction[]>("/transactions", {
    headers: {
      ...GetAuthHeaders(),
    },
  });
  return res
};

export const UpdateTransaction = async (
  id: string,
  data: FormData,
): Promise<Transaction> => {
  const res =  await FetchApi<Transaction>(`/transactions/${id}`, {
    method: "PUT",
    headers: {
      ...GetAuthHeaders(),
    },
    body: data,
  });
  return res

};