import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Blog } from "../types/blog";

const API_URL = "http://localhost:3001/blogs";

const fetchBlogs = async (): Promise<Blog[]> => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const useBlogs = () => {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
};
