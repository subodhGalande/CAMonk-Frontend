import { ScrollArea } from "./ui/scroll-area";
import { BlogList } from "./blogList";
import { BlogDetail } from "./blogDetail";

export const BlogPage = () => {
  return (
    <div className="h-full bg-secondary pt-2">
      <div className="h-full p-6 gap-6 grid grid-cols-1 md:grid-cols-8">
        {/* LEFT PANEL */}
        <div className="md:col-span-2 relative">
          <ScrollArea className=" h-full max-h-[calc(100vh-4rem)]">
            <BlogList />
          </ScrollArea>
        </div>

        {/* RIGHT PANEL (hidden on mobile) */}
        <div className="hidden md:block bg-white md:col-span-6">
          <BlogDetail />
        </div>
      </div>
    </div>
  );
};
