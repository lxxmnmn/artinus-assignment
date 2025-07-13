'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { LoaderCircle, CircleAlert } from 'lucide-react';
import { useProductDetail } from '@/hooks/useProduct';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const { data: product, isLoading, isError } = useProductDetail(id);

  if (isLoading)
    return (
      <div className="flex justify-center align-center text-neutral-300">
        <LoaderCircle role="status" className="w-8 h-8 animate-spin cursor-progress" />
      </div>
    );

  if (isError || !product)
    return (
      <div className="flex justify-center align-center text-neutral-300">
        <CircleAlert className="w-8 h-8" />
        <p className="p-4 text-sm">상품 정보를 불러오지 못했습니다.</p>
      </div>
    );

  return (
    <main className="max-w-6xl mx-auto p-8 pt-12">
      <Breadcrumb className="py-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/products">All products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>{product.category}</BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.brand}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="w-full">
          <Carousel className="w-full max-w-lg mx-auto">
            <CarouselContent>
              {product.images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={src}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {product.images.length > 1 && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </div>

        <article className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">{product.brand}</h2>
            <h1 className="text-3xl font-bold">{product.title}</h1>
          </div>

          <div className="flex flex-row items-center">
            <span className="text-lg font-bold text-red-400 mr-4">
              {product.discountPercentage}%
            </span>
            <p className="text-3xl font-extrabold">${product.price}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                {tag}
              </Badge>
            ))}
          </div>

          <div>
            <p className="text-neutral-600">{product.description}</p>
          </div>
        </article>
      </section>
    </main>
  );
}
