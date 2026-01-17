import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import type { Blog } from "../types/blog";

export type BlogData = Omit<Blog, "id">;

const API_URL = "http://localhost:3001/blogs";

const createBlogPost = async (newBlog: BlogData) => {
  const response = await axios.post(API_URL, newBlog);
  return response.data;
};

export const useBlogPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBlogPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
