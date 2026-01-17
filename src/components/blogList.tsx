import { BlogCard } from "./blogCard";
import type { Blog } from "../types/blog";
import { Link } from "react-router-dom";

export const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {blogs.map((blog) => (
        <Link key={blog.id} to={`/blog/${blog.id}`} className="block">
          <BlogCard blog={blog} />
        </Link>
      ))}
    </div>
  );
};
