"use client";
import { use } from "react";
import { usePost } from "../../../hooks/usePost";
import Loader from "../../../components/Loader";
import PostWrapper from "../../../components/PostWrapper";

export default function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  if (!id) {
    return <div>No post ID provided</div>;
  }

  const { data, error, isLoading } = usePost(id);

  if (isLoading) {
    return <Loader />;
  }
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <PostWrapper title={data.title} body={data.body} id={data.id} />
    </div>
  );
}
