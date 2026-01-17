import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Blog } from "../types/blog";

const API_URL = "http://localhost:3001/blogs";

export const useBlogDetails = (id: string | undefined) => {
  const fetchBlogDetails = async () => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  };
  return useQuery<Blog>({
    queryKey: ["blog", id],
    queryFn: fetchBlogDetails,
    enabled: !!id,
  });
};
