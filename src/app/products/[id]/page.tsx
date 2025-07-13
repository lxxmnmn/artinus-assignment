'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { LoaderCircle, CircleAlert } from 'lucide-react';
import { useProductDetail } from '@/hooks/useProduct';
import ProductCarousel from '@/components/product/ProductCarousel';
import ProductReviewCard from '@/components/product/ProductReviewCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { StarRating } from '@/components/ui/star-rating';

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
        <p className="p-4 text-sm">Failed to get product details.</p>
      </div>
    );

  return (
    <main className="max-w-5xl mx-auto p-8 py-12">
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
            <BreadcrumbPage>{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <ProductCarousel images={product.images} title={product.title} />

        <article className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{product.brand}</h2>
            <h1 className="text-3xl font-bold">{product.title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="text-sm text-neutral-500">{product.rating.toFixed(1)}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-red-400">{product.discountPercentage}%</span>
            <p className="text-3xl font-extrabold">${product.price}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-neutral-600">{product.description}</p>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-neutral-400">
              Size:&nbsp;
              {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth}
            </p>
            <p className="text-xs text-neutral-400">Shipping: {product.shippingInformation}</p>
            <p className="text-xs text-neutral-400">Warranty: {product.warrantyInformation}</p>
            <p className="text-xs text-neutral-400">Return policy: {product.returnPolicy}</p>
          </div>
        </article>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Review</h2>
        <article>
          <ul className="flex flex-col gap-4">
            {product.reviews.map((review, i) => (
              <li key={i}>
                <ProductReviewCard review={review} />
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
