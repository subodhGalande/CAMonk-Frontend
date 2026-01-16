import { ScrollArea } from "@radix-ui/react-scroll-area";
import { BlogList } from "./blogList";
import { BlogDetail } from "./blogDetail";

export const BlogPage = () => {
  return (
    <div className="h-screen p-6 gap-6 grid grid-cols-1 md:grid-cols-8">
      {/* LEFT PANEL */}
      <ScrollArea className="border-r md:col-span-2">
        <div className="">
          <BlogList />
        </div>
      </ScrollArea>

      {/* RIGHT PANEL (hidden on mobile) */}
      <div className="hidden md:block bg-white md:col-span-6">
        <ScrollArea className="h-full">
          <div className="">
            <BlogDetail />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
