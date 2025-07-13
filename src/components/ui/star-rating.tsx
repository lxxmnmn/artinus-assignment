'use client';

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  max?: number;
  className?: string;
}

export function StarRating({ rating, max = 5, className }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn('flex items-center gap-0.5 text-yellow-400', className)}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
      ))}

      {hasHalfStar && (
        <div className="relative w-4 h-4">
          <Star className="w-4 h-4 text-yellow-400 absolute" />
          <div className="absolute top-0 left-0 w-2 h-4 overflow-hidden">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
          </div>
        </div>
      )}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 stroke-yellow-400" />
      ))}
    </div>
  );
}
