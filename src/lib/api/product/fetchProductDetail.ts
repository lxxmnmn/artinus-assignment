import axiosInstance from '@/lib/axiosInstance';

import type { Product } from '@/types/product';

export const fetchProductDetail = async (id: number): Promise<Product> => {
  const response = await axiosInstance.get<Product>(`/products/${id}`);
  return response.data;
};
