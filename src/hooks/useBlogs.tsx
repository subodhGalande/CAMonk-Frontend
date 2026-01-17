import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Blog } from "../types/blog";

const fetchBlogs = async (): Promise<Blog[]> => {
  const { data } = await axios.get("http://localhost:3001/blogs");
  return data;
};

export const useBlogs = () => {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
};
