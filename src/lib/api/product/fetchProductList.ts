import axiosInstance from '@/lib/axiosInstance';

import type { Product } from '@/types/product';

interface ProductListResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const fetchProductList = async (
  skip: number,
  limit: number
): Promise<ProductListResponse> => {
  const response = await axiosInstance.get<ProductListResponse>(`/products`, {
    params: { skip, limit },
  });

  return response.data;
};
