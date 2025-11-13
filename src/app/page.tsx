"use client";

import { usePosts } from "../hooks/usePosts";
import Loader from "../components/Loader";
import PostsWrapper from "../components/PostsWrapper";

export default function Home() {
  const { data, error, isLoading } = usePosts();
  if (isLoading) {
    return <Loader />;
  }
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  type Post = { id: number; title: string; body: string };

  return (
    <div className="root">
      <ul>
        {data?.map((post: Post) => (
          <li key={post.id}>
            <PostsWrapper
              id={post.id}
              title={post.title}
              body={post.body}
            ></PostsWrapper>
          </li>
        ))}
      </ul>
    </div>
  );
}
