import { useParams, useNavigate } from "react-router-dom";
import { useBlogDetails } from "../hooks/useBlogDetails";
import { Share2, ArrowLeft } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Skeleton } from "./ui/skeleton";
import { useMediaQuery } from "react-responsive";

export const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const { data, isLoading, error } = useBlogDetails(id!);

  if (isLoading) {
    return (
      <div className="p-6">
        <Skeleton className="h-[400px] bg-muted-foreground/50 w-full rounded-xl" />
        <Skeleton className="h-20 mt-12 bg-muted-foreground/50 md:px-8" />
        <Skeleton className="h-20 mt-12 bg-muted-foreground/50 md:px-8" />
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-500">Failed to load blog</div>;
  }

  if (!data) return null;

  return (
    <div className="p-4">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="md:hidden mb-6 text-sm justify-center flex items-center text-center gap-1"
      >
        <ArrowLeft className="size-4" />
        Back
      </button>

      {/* COVER */}
      {isMobile ? (
        <AspectRatio ratio={16 / 9}>
          <img
            src={data.coverImage}
            alt={data.title}
            className="rounded-t-xl object-cover h-full w-full"
          />
        </AspectRatio>
      ) : (
        <AspectRatio ratio={21 / 9}>
          <img
            src={data.coverImage}
            alt={data.title}
            className="rounded-t-xl object-cover h-full w-full"
          />
        </AspectRatio>
      )}

      <div className="mt-6 md:mt-12 md:px-8">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
          {data.title}
        </h2>

        <Button
          className="mt-6 text-xs md:text-base "
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            toast("Copied to clipboard");
          }}
        >
          <Share2 className="size-4" />
          Share Article
        </Button>

        {/* CATEGORY + DATE */}
        <div className="flex rounded-lg mt-6 border-2 bg-secondary">
          <div className="w-full text-center border-r-2 p-4">
            <p className="text-xs tracking-widest text-muted-foreground">
              CATEGORY
            </p>
            <p className="text-sm md:text-base font-semibold">
              {data.category.join(", ")}
            </p>
          </div>

          <div className="w-full text-center p-4">
            <p className="text-xs tracking-widest text-muted-foreground">
              DATE
            </p>
            <p className="text-sm md:text-base font-semibold">
              {new Date(data.date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-12 md:text-2xl text-lg font-light">
          {data.description}
        </p>

        {/* CONTENT */}
        <p className="mt-6 md:text-lg whitespace-pre-line">{data.content}</p>

        {/* TAGS */}
        <div className="mt-12">
          <h2 className=" text-xl md:text-2xl font-semibold">Tags</h2>
          <div className="mt-4 flex gap-2 flex-wrap">
            {data.category.map((tag) => (
              <div key={tag} className="px-4 py-2 border text-sm">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
