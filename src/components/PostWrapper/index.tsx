"use client";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";

type PostWrapperProps = {
  id: number;
  title: string;
  body: string;
};

const PostWrapper = ({ id, title, body }: PostWrapperProps) => {
  const router = useRouter();
  return (
    <div className={styles.postDetailWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body}>{body}</p>
      <div className={styles.actions}></div>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        <div className={styles.readMore}>Назад</div>
      </button>
    </div>
  );
};

export default PostWrapper;
