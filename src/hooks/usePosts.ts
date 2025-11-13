import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../lib/config";

const fetchPosts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/posts`);
    return data;
  } catch (error) {
    throw new Error("Network response was not ok");
  }
};

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};
