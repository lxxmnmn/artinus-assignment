import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchProductList, fetchProductDetail } from '@/lib/api/product';

const LIMIT = 20 as const;

export const useInfiniteProductList = () => {
  return useInfiniteQuery({
    queryKey: ['productList'],
    queryFn: ({ pageParam = 0 }) => fetchProductList(pageParam, LIMIT),
    getNextPageParam: (lastPage, allPages) => {
      const loadedCount = allPages.flatMap((page) => page.products).length;
      return loadedCount < lastPage.total ? loadedCount : undefined;
    },
    initialPageParam: 0,
  });
};

export const useProductDetail = (id: number) => {
  return useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => fetchProductDetail(id),
    enabled: !!id,
  });
};
