'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { LoaderCircle } from 'lucide-react';
import { useInfiniteProductList } from '@/hooks/useProduct';
import { Card, CardContent } from '@/components/ui/card';
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
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <section>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <li key={product.id}>
              <Card key={product.id} className="flex flex-col overflow-hidden rounded-xl shadow-lg">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h2 className="text-lg font-semibold truncate" title={product.title}>
                      {product.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {product.brand}
                    </p>
                  </div>
                  <div className="mt-3">
                    <span className="font-bold">${product.price.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
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
