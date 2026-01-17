import { ScrollArea } from "./ui/scroll-area";
import { BlogList } from "./blogList";
import { useBlogs } from "../hooks/useBlogs";
import { Skeleton } from "./ui/skeleton";
import { Outlet } from "react-router-dom";

export const BlogPage = () => {
  const { data, isLoading, error } = useBlogs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-center py-20 ">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
          CA Monk Blog
        </h1>
        <p className="text-muted-foreground md:text-xl text-center">
          Stay updated with the latest trends in finance, accounting and career
          growth
        </p>
      </section>
      <div className="h-full bg-secondary pt-2">
        <div className="h-full p-6 gap-6 grid grid-cols-1 md:grid-cols-8">
          {/* LEFT PANEL */}
          <div className="md:col-span-2 relative">
            <ScrollArea className=" h-full max-h-[calc(100vh-4rem)]">
              {isLoading ? (
                <Skeleton className="h-[125px] w-full bg-muted-foreground/50 rounded-xl" />
              ) : (
                data && <BlogList blogs={data} />
              )}
            </ScrollArea>
          </div>

          {/* RIGHT PANEL */}
          <div className="hidden md:block bg-white rounded-xl md:col-span-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
