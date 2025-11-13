"use client";
import { useSearchParams } from "next/navigation";
import { usePost } from "../../hooks/usePost";
import Loader from "../../components/Loader";
import PostWrapper from "../../components/PostWrapper";

export default function PostPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

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
