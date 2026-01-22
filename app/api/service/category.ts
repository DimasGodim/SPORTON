import { FetchApi } from "../api";
import { Category } from "../index";

export const GetAllCategories = async (): Promise<Category[]> => {
  return await FetchApi<Category[]>("/categories");
};