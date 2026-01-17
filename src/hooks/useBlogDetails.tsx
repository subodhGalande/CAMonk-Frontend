import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Blog } from "../types/blog";

export const useBlogDetails = (id: string | undefined) => {
  return useQuery<Blog>({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3001/blogs/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
};
