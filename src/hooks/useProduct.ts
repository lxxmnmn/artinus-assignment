import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchProductList, fetchProductDetail } from '@/lib/api/product';
import { PRODUCT_QUERY_KEY } from '@/constants/queryKey';

const LIMIT = 20 as const;

export const useInfiniteProductList = () => {
  return useInfiniteQuery({
    queryKey: [PRODUCT_QUERY_KEY.LIST],
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
    queryKey: [PRODUCT_QUERY_KEY.DETAIL, id],
    queryFn: () => fetchProductDetail(id),
    enabled: !!id,
  });
};
