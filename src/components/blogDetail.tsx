import { useParams, useNavigate } from "react-router-dom";
import { useBlogDetails } from "../hooks/useBlogDetails";
import { Share2, ArrowLeft, ThumbsUp, MessageSquare } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { BlogDetailSkeleton } from "./blogDetailSkeleton";

export const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useBlogDetails(id!);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [imageLoaded, setImageLoaded] = useState(false);
  const showSkeleton = isLoading || !imageLoaded;
  useEffect(() => {
    setImageLoaded(false);
  }, [id]);

  if (error) {
    return <div className="p-6 text-red-500">Failed to load blog</div>;
  }

  if (!data) return null;

  return (
    <div className="relative">
      {/* SKELETON OVERLAY */}
      {showSkeleton && (
        <div className="absolute inset-0 z-10 bg-background">
          <BlogDetailSkeleton />
        </div>
      )}
      {/* MAIN CONTENT */}
      <div
        className={`transition-opacity duration-300 ${
          showSkeleton ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="p-4">
          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="lg:hidden mb-6 text-sm flex items-center gap-1"
          >
            <ArrowLeft className="size-4" />
            Back
          </button>

          {/* COVER */}
          <AspectRatio ratio={isMobile ? 16 / 9 : 21 / 9}>
            <img
              src={data.coverImage}
              alt={data.title}
              onLoad={() => setImageLoaded(true)}
              className="rounded-t-xl object-cover h-full w-full"
            />
          </AspectRatio>

          <div className="mt-6 md:mt-12 md:px-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              {data.title}
            </h2>

            <Button
              className="mt-6 text-xs md:text-base"
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
                  {data.category
                    .map((cat) =>
                      cat
                        .toLowerCase()
                        .split(" ")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")
                    )
                    .join(", ")}
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
            <p className="mt-6 md:text-lg whitespace-pre-line">
              {data.content}
            </p>

            {/* TAGS */}
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl font-semibold">Tags</h2>
              <div className="mt-4 flex gap-2 flex-wrap">
                {data.category.map((tag) => (
                  <div key={tag} className="px-4 py-2 border text-sm">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 py-8 md:px-8 flex justify-between border-t">
            <div className="flex items-center gap-2">
              <div className="rounded-full h-10 w-10 md:h-12 md:w-12 overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6FhncJA57fuJZAgzfnQNBQUxGVmGElTlVw&s"
                  alt="author"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xs md:text-base font-semibold">
                  Written by Arjun Mehta
                </h2>
                <p className="text-[0.6rem] md:text-sm text-muted-foreground">
                  Senior Financial Analyst
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ThumbsUp className="size-4 md:size-6 text-muted-foreground/50" />
              <MessageSquare className="size-4 md:size-6 text-muted-foreground/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
