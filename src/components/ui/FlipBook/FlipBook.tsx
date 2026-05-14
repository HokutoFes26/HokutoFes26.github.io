"use client";

import dynamic from "next/dynamic";
import styles from "./FlipBook.module.css";

const FlipBookClient = dynamic(() => import("./FlipBookClient"), {
  ssr: false,
  loading: () => <div className={styles.loading}>Loading Pamphlet...</div>,
});

export default function FlipBook() {
  return (
    <div className={styles.wrapper}>
      <FlipBookClient />
    </div>
  );
}
