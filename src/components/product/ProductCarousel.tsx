import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import type { Product } from '@/types/product';

type ProductCarouselProps = Pick<Product, 'images' | 'title'>;

export default function ProductCarousel({ images, title }: ProductCarouselProps) {
  return (
    <Carousel className="w-full max-w-lg mx-auto">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image src={src} alt={`${title} ${index + 1}`} fill className="object-contain p-2" />
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
