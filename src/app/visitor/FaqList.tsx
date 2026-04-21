"use client";

import { useState } from "react";
import styles from "./faq.module.css";

interface FaqItemData {
  Q: string;
  A: string;
}

export default function FaqList({ data }: { data: FaqItemData[] }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className={styles["faq-list"]}>
      {data.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <dl key={index} className={`${styles.item} ${isOpen ? styles.active : ""}`}>
            <dt onClick={() => toggleItem(index)}>
              <span className={styles.question}>Q</span>
              {item.Q}
            </dt>
            <dd>
              <div className={styles["answer-content"]}>
                <span className={styles.answer}>A</span>
                <span dangerouslySetInnerHTML={{ __html: item.A }} />
              </div>
            </dd>
          </dl>
        );
      })}
    </div>
  );
}
