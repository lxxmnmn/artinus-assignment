import { LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
  wrapperClassName?: string;
}

export default function LoadingSpinner({
  size = 8,
  className,
  wrapperClassName,
}: LoadingSpinnerProps) {
  return (
    <div className={cn('w-full flex justify-center items-center', wrapperClassName)}>
      <LoaderCircle
        role="status"
        className={cn(
          'animate-spin text-neutral-300 cursor-progress',
          `w-${size} h-${size}`,
          className
        )}
      />
    </div>
  );
}
