"use client";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import { Button } from "../ui/button";

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
      <Button
        onClick={() => {
          router.push("/");
        }}
      >
        Назад
      </Button>
    </div>
  );
};

export default PostWrapper;
