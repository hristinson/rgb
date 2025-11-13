"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { usePost } from "../../hooks/usePost";
import Loader from "../../components/Loader";

export default function PostPage() {
  const router = useRouter();
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
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Back to Home
      </button>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
