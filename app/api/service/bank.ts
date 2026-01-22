import { FetchApi } from "../api"
import { Bank } from "../index";

export const GetAllBanks = async (): Promise<Bank[]> => {
  return await FetchApi<Bank[]>("/banks");
};