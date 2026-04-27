"use client";
import React from "react";
import Link from "next/link";
import { getPath } from "@/constants/paths";
import styles from "./ItemCard.module.css";

interface Product {
  type: "product";
  name: string;
  team: string;
  place: string;
  image: string;
  image_hidden?: string;
  fit?: number;
}

interface Company {
  type: "company";
  name: string;
  url: string;
  image: string;
  fit?: number;
}

type Payload = Product | Company;

export default function ItemCard({ data: item }: { data: Payload }) {
  const [showHidden, setShowHidden] = React.useState(false);
  const isProduct = item.type === "product";

  React.useEffect(() => {
    if (isProduct && (item as Product).image_hidden && Math.random() < 0.35) {
      setShowHidden(true);
    }
  }, [isProduct, item.name]);

  const href = isProduct
    ? item.name === "縁日"
      ? `/products?name=${encodeURIComponent(item.name)}-${encodeURIComponent(item.team)}${showHidden ? "&hidden=true" : ""}`
      : `/products?name=${encodeURIComponent(item.name)}${showHidden ? "&hidden=true" : ""}`
    : item.url.startsWith("http")
      ? item.url
      : `https://${item.url}`;

  const target = isProduct ? undefined : "_blank";

  const imgPath = isProduct && showHidden && (item as Product).image_hidden
    ? getPath((item as Product).image_hidden!)
    : item.image ? getPath(item.image) : "";

  const mainImgStyle: React.CSSProperties = {
    objectFit: "contain",
    transform: item.fit ? `translate(0, ${item.fit ?? 0}px)` : "scale(1)",
  };

  return (
    <li className={styles.card}>
      <Link href={href} target={target} scroll={false}>
        {imgPath && (
          <div className={styles.imageWrapper}>
            <img src={imgPath} alt="" className={styles.bgImage} aria-hidden="true" />
            <img src={imgPath} alt={item.name} className={styles.image} style={mainImgStyle} />
          </div>
        )}
        <div className={`${styles.info} ${isProduct ? "" : styles.textOnlyInfo}`}>
          <p className={styles.name}>{item.name}</p>
          {isProduct ? (
            <div className={styles.details}>
              {item.team && <p>{item.team}</p>}
              {item.place && <p>{item.place}</p>}
            </div>
          ) : (
            <span className={styles.companyUrl}>{item.url}</span>
          )}
        </div>
      </Link>
    </li>
  );
}
