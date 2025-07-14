import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { IMAGE_SIZES_FULL } from '@/constants/common';

import type { Product } from '@/types/product';

type ProductCarouselProps = Pick<Product, 'images' | 'title'>;

export default function ProductCarousel({ images, title }: ProductCarouselProps) {
  return (
    <Carousel className="w-full max-w-lg mx-auto">
      <CarouselContent>
        {images.map((src, i) => (
          <CarouselItem key={i}>
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={src}
                alt={`${title} ${i + 1}`}
                fill
                priority={i === 0}
                sizes={IMAGE_SIZES_FULL}
                className="object-contain p-2"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
