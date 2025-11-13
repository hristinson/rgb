import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../lib/config";

const fetchPost = async (id: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/posts/${id}`);
    return data;
  } catch (error) {
    throw new Error("Post not found");
  }
};

export const usePost = (id: string) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPost(id),
  });
};
