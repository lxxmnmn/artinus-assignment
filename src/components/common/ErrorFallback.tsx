import Link from 'next/link';
import { TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ErrorFallbackProps {
  message?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export default function ErrorFallback({
  message = 'Error',
  buttonText = 'Back to home',
  buttonLink = '/',
  className,
}: ErrorFallbackProps) {
  return (
    <main
      className={cn(
        'w-screen h-screen flex flex-col justify-center items-center gap-12',
        className
      )}
    >
      <section className="flex flex-col justify-center items-center gap-6">
        <TriangleAlert className="w-12 h-12 text-red-500" />
        <p className="text-neutral-600">{message}</p>
      </section>
      <Button asChild>
        <Link href={buttonLink}>{buttonText}</Link>
      </Button>
    </main>
  );
}
