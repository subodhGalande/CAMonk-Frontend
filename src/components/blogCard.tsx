import { Card, CardDescription, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import type { Blog } from "../types/blog";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Card className="p-4 relative bg-white overflow-hidden w-full ">
      <div className="h-full w-[.2rem] bg-primary absolute left-0 top-0"></div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className=" text-accent-foreground text-xs ">
            {blog.category}
          </Badge>
        </div>
        <div>
          <p className="text-muted-foreground text-xs ">{blog.date}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <CardTitle className="text-lg">{blog.title}</CardTitle>
        <CardDescription className="line-clamp-2 text-muted-foreground ">
          {blog.content}
        </CardDescription>
      </div>
    </Card>
  );
};
