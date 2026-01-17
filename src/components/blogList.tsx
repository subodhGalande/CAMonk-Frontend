import { BlogCard } from "./blogCard";
import type { Blog } from "../types/blog";
import { Link } from "react-router-dom";

export const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex flex-col gap-4">
      {sortedBlogs.map((blog) => (
        <Link key={blog.id} to={`/blog/${blog.id}`} className="block">
          <BlogCard blog={blog} />
        </Link>
      ))}
    </div>
  );
};
