import { ScrollArea } from "./ui/scroll-area";
import { BlogList } from "./blogList";
import { useBlogs } from "../hooks/useBlogs";
import { Skeleton } from "./ui/skeleton";
import { Outlet } from "react-router-dom";
import { CreateBlog } from "./createBlog";

export const BlogPage = () => {
  const { data, isLoading, error } = useBlogs();

  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-center py-20 ">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
          CA Monk Blog
        </h1>
        <p className="text-muted-foreground md:text-xl px-4 text-center">
          Stay updated with the latest trends in finance, accounting and career
          growth
        </p>
      </section>
      <div className="h-full bg-secondary pt-2">
        <div className="h-full p-6 gap-6 grid grid-cols-1 md:grid-cols-8">
          {/* LEFT PANEL */}
          <div className="md:col-span-2 relative">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Latest Articles</h2>
              <CreateBlog />
            </div>
            <ScrollArea className=" mt-4 h-full max-h-[calc(100vh-4rem)]">
              {isLoading ? (
                <Skeleton className="h-[125px] w-full bg-muted-foreground/50 rounded-xl" />
              ) : (
                data && <BlogList blogs={data} />
              )}
            </ScrollArea>
            {error && (
              <div className="text-red-500">Error: {error.message}</div>
            )}
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
