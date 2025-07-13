'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { LoaderCircle } from 'lucide-react';
import { useInfiniteProductList } from '@/hooks/useProduct';
import ProductCard from '@/components/product/ProductCard';
import ScrollToTopButton from '@/components/common/ScrollToTopButton';

export default function ProductListPage() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteProductList();

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

  const products = data?.pages.flatMap((page) => page.products) ?? [];

  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <section>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </li>
          ))}
        </ul>

        <div ref={lazyLoadRef} className="min-h-[80px] flex justify-center items-center mt-8">
          {isFetchingNextPage && (
            <LoaderCircle
              role="status"
              className="w-8 h-8 text-neutral-300 animate-spin cursor-progress"
            />
          )}
          {!hasNextPage && <ScrollToTopButton />}
        </div>
      </section>
    </main>
  );
}
