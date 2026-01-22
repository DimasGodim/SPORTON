import { FetchApi } from "../api";
import { Product } from "../index";

export const GetAllProducts = async (): Promise<Product[]> => {
  return await FetchApi<Product[]>("/products");
};

export const GetProductDetail = async (id: string): Promise<Product> => {
  return await FetchApi<Product>(`/products/${id}`);
};