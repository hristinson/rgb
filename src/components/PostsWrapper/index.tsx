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
      <button className={styles.readMore}>
        <Link href={`/post/${id}`}>Детальніше</Link>
      </button>
    </div>
  );
};

export default PostsWrapper;
