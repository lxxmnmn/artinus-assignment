import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full overflow-hidden flex flex-col rounded-xl shadow-lg bg-neutral-50 hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="relative w-full aspect-[3/2]">
        <Image src={product.thumbnail} alt={product.title} fill className="object-contain" />
      </div>
      <CardContent className="flex flex-col justify-between flex-1 p-4 pb-0">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold line-clamp-2">{product.title}</h2>
          <p className="text-sm text-neutral-500 truncate">{product.brand}</p>
        </div>
        <div className="flex flex-row items-center mt-2">
          <span className="text-xs font-bold text-red-400 mr-2">{product.discountPercentage}%</span>
          <span className="font-bold text-neutral-800">${product.price}</span>
        </div>
      </CardContent>
    </Card>
  );
}
