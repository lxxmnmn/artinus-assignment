import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { StarRating } from '@/components/ui/star-rating';

import type { Review } from '@/types/product';

interface ProductReviewCardProps {
  review: Review;
}

export default function ProductReviewCard({ review }: ProductReviewCardProps) {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const yyyy = date.getFullYear();
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');

    return `${yyyy}.${MM}.${dd} ${hh}:${mm}`;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <h5 className="font-semibold">{review.reviewerName}</h5>
          <p className="text-xs text-neutral-400">{formatDate(review.date)}</p>
        </div>
        <StarRating rating={review.rating} />
      </CardHeader>
      <CardContent>
        <p>{review.comment}</p>
      </CardContent>
    </Card>
  );
}
