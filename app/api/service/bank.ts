import { FetchApi } from "../api"
import { Bank } from "../index";
import { GetAuthHeaders } from "../api";

export const GetAllBanks = async (): Promise<Bank[]> => {
  return await FetchApi<Bank[]>("/banks");
};

export const CreateBank = async (data: Partial<Bank>): Promise<Bank> => {
  return await FetchApi<Bank>("/banks", {
    method: "POST",
    headers: {
      ...GetAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const UpdateBank = async (
  id: string,
  data: Partial<Bank>,
): Promise<Bank> => {
  return await FetchApi<Bank>(`/banks/${id}`, {
    method: "PUT",
    headers: {
      ...GetAuthHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const DeleteBank = async (id: string): Promise<void> => {
  return await FetchApi<void>(`/banks/${id}`, {
    method: "DELETE",
    headers: {
      ...GetAuthHeaders(),
      "Content-Type": "application/json",
    },
  });
};