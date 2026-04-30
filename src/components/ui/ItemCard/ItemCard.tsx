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

interface Thanks {
  type: "thanks";
  name: string;
  job: string;
}

type Payload = Product | Company | Thanks;

export default function ItemCard({ data: item }: { data: Payload }) {
  const [showHidden, setShowHidden] = React.useState(false);
  const isProduct = item.type === "product";
  const isThanks = item.type === "thanks";

  React.useEffect(() => {
    if (isProduct && (item as Product).image_hidden && Math.random() < 0.35) {
      setShowHidden(true);
    }
  }, [isProduct, item.name]);

  const href = isProduct
    ? item.name === "縁日"
      ? `/projects?name=${encodeURIComponent(item.name)}-${encodeURIComponent(item.team)}${showHidden ? "&hidden=true" : ""}`
      : `/projects?name=${encodeURIComponent(item.name)}${showHidden ? "&hidden=true" : ""}`
    : item.type === "company"
      ? item.url.startsWith("http")
        ? item.url
        : `https://${item.url}`
      : "";

  const target = item.type === "company" ? "_blank" : undefined;

  const imgPath = isThanks
    ? undefined
    : isProduct && showHidden && (item as Product).image_hidden
      ? getPath((item as Product).image_hidden!)
      : item.image
        ? getPath(item.image)
        : "";

  const mainImgStyle: React.CSSProperties = {
    objectFit: "contain",
    transform: !isThanks && item.fit ? `translate(0, ${item.fit ?? 0}px)` : "scale(1)",
  };

  return (
    <>
      {isThanks ? (
        <div className={styles.thanksCard}>
          <p className={styles.thanks_job}>{item.job}</p>
          <p className={styles.thanks_name}>{item.name}</p>
        </div>
      ) : (
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
      )}
    </>
  );
}
