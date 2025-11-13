"use client";
import Link from "next/link";
import styles from "./index.module.css";

type PostsWrapperProps = {
  id: number;
  title: string;
  body: string;
};

const PostsWrapper = ({ id, title, body }: PostsWrapperProps) => {
  return (
    <div className={styles.postWrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body.slice(0, 30) + "..."}</p>
      <button>
        <Link href={`/post/${id}`}>
          <div className={styles.readMore}>Детальніше</div>
        </Link>
      </button>
    </div>
  );
};

export default PostsWrapper;
