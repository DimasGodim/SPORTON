import { FetchApi } from "../api";
import { Category } from "../index";
import { GetAuthHeaders } from "../api";

export const GetAllCategories = async (): Promise<Category[]> => {
  return await FetchApi<Category[]>("/categories");
};

export const CreateCategory = async (data: FormData): Promise<Category> => {
  return await FetchApi<Category>("/categories", {
    method: "POST",
    headers: {
      ...GetAuthHeaders(),
    },
    body: data,
  });
};

export const UpdateCategory = async (
  id: string,
  data: FormData,
): Promise<Category> => {
  return await FetchApi<Category>(`/categories/${id}`, {
    method: "PUT",
    headers: {
      ...GetAuthHeaders(),
    },
    body: data,
  });
};

export const DeleteCategory = async (id: string): Promise<void> => {
  return await FetchApi<void>(`/categories/${id}`, {
    method: "DELETE",
    headers: {
      ...GetAuthHeaders(),
    },
  });
};