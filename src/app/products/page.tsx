'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useInfiniteProductList } from '@/hooks/useProduct';

import ProductCard from '@/components/product/ProductCard';
import ErrorFallback from '@/components/common/ErrorFallback';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';

import type { Product } from '@/types/product';

export default function ProductListPage() {
  const { data, isError, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteProductList();

  const lazyLoadRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage || !lazyLoadRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(lazyLoadRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  const products: Product[] = data?.pages.flatMap((page) => page.products) ?? [];

  if (isError) return <ErrorFallback message="Failed to load product list." />;

  return (
    <main className="max-w-7xl mx-auto px-12 py-14">
      <h1 className="sticky top-0 z-1 mb-10 px-2 py-4 bg-white border-b-1 border-b-neutral-200 text-3xl font-extrabold">
        Products
      </h1>

      <section className="px-3">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                <ProductCard product={product} priority={i === 0} />
              </Link>
            </li>
          ))}
        </ul>

        <div ref={lazyLoadRef} className="min-h-[60px] flex justify-center items-center mt-10">
          {(!products.length || isFetchingNextPage) && <LoadingSpinner />}
          {products.length > 0 && !hasNextPage && <ScrollToTopButton />}
        </div>
      </section>
    </main>
  );
}
