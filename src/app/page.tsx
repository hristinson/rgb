"use client";
import Link from "next/link";
import { usePosts } from "../hooks/usePosts";
import Loader from "../components/Loader";

export default function Home() {
  const { data, error, isLoading } = usePosts();
  if (isLoading) {
    return <Loader />;
  }
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.map((post: { id: number; title: string }) => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`}>{post.title}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
