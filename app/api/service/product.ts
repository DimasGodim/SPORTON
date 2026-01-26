import { FetchApi } from "../api";
import { Product } from "../index";
import { GetAuthHeaders } from "../api";

export const GetAllProducts = async (): Promise<Product[]> => {
  return await FetchApi<Product[]>("/products");
};

export const GetProductDetail = async (id: string): Promise<Product> => {
  return await FetchApi<Product>(`/products/${id}`);
};

export const CreateProduct = async (data: FormData): Promise<Product> => {
  return await FetchApi<Product>("/products", {
    method: "POST",
    headers: {
      ...GetAuthHeaders(),
    },
    body: data,
  });
};

export const UpdateProduct = async (
  id: string,
  data: FormData,
): Promise<Product> => {
  return await FetchApi<Product>(`/products/${id}`, {
    method: "PUT",
    headers: {
      ...GetAuthHeaders(),
    },
    body: data,
  });
};

export const DeleteProduct = async (id: string): Promise<void> => {
  return await FetchApi<void>(`/products/${id}`, {
    method: "DELETE",
    headers: {
      ...GetAuthHeaders(),
    },
  });
};