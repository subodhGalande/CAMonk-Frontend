import { Skeleton } from "./ui/skeleton";
import { AspectRatio } from "./ui/aspect-ratio";

export const BlogDetailSkeleton = () => {
  return (
    <div className="p-6">
      <AspectRatio ratio={21 / 9}>
        <Skeleton className="h-full w-full rounded-xl" />
      </AspectRatio>

      <div className="mt-12 space-y-6">
        <Skeleton className="h-16 w-3/4" />
        <Skeleton className="h-10 w-40" />

        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-16" />
          <Skeleton className="h-16" />
        </div>

        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    </div>
  );
};
