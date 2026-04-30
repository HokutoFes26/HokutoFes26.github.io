"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./main.module.css";
import { getPath } from "@/constants/paths";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import BaseButton from "@/components/ui/BaseButton/BaseButton";

export default function Home() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const handleVideoEnded = () => {
    setIsVideoFinished(true);
    const isMobile = window.innerWidth <= 767;
    const targetPosition = isMobile ? window.innerHeight * 0.4 : window.innerHeight * 0.8;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    if (distance <= 0) return;
    const duration = 1400;
    let start: number | null = null;
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    const easeInOutSine = (t: number): number => {
      return -(Math.cos(Math.PI * t) - 1) / 2;
    };

    let requestId: number;
    const stopAnimation = () => {
      cancelAnimationFrame(requestId);
      window.removeEventListener("wheel", stopAnimation);
      window.removeEventListener("touchmove", stopAnimation);
      window.removeEventListener("mousedown", stopAnimation);
      html.style.scrollBehavior = originalScrollBehavior;
    };
    window.addEventListener("wheel", stopAnimation, { passive: true });
    window.addEventListener("touchmove", stopAnimation, { passive: true });
    window.addEventListener("mousedown", stopAnimation);

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentPos = startPosition + distance * easeInOutSine(progress);
      window.scrollTo(0, currentPos);

      if (progress < 1) {
        requestId = requestAnimationFrame(step);
      } else {
        stopAnimation();
      }
    }

    requestId = requestAnimationFrame(step);
  };
  const [randomImages, setRandomImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const [boothRes, productsRes] = await Promise.all([
          fetch(getPath("/data/booth.json")),
          fetch(getPath("/data/products.json")),
        ]);
        const boothData = await boothRes.json();
        const productsData = await productsRes.json();

        const extract = (obj: any): string[] => {
          let found: string[] = [];
          if (Array.isArray(obj)) {
            obj.forEach((item) => {
              [item.image, item.image2].forEach((img) => {
                if (typeof img === "string" && /\.(jpg|jpeg|png)$/i.test(img)) {
                  found.push(img);
                }
              });
            });
          } else if (obj && typeof obj === "object") {
            Object.values(obj).forEach((val) => {
              found = found.concat(extract(val));
            });
          }
          return found;
        };

        const allImages = Array.from(new Set([...extract(boothData), ...extract(productsData)]));
        const shuffled = allImages.sort(() => 0.5 - Math.random());
        setRandomImages(shuffled.slice(0, 8));
      } catch (e) {
        console.error("Failed to load images (json)", e);
      }
    };
    loadImages();
  }, []);

  return (
    <div>
      <main className={styles["top-page"]}>
        <div className={styles.mainvisual}>
          <div className={styles["twinkling-stars-container"]}>
            {[...Array(15)].map((_, i) => (
              <div key={`ts-${i}`} className={`${styles["twinkling-star"]} ${styles[`ts-${i + 1}`]}`}></div>
            ))}
          </div>
          <div className={styles["star-orbits-container"]}>
            <div className={`${styles["star-orbit"]} ${styles["orbit-1"]}`}>
              <span className={styles.star}>★</span>
            </div>
            <div className={`${styles["star-orbit"]} ${styles["orbit-2"]}`}>
              <span className={styles.star}>✦</span>
            </div>
            <div className={`${styles["star-orbit"]} ${styles["orbit-3"]}`}>
              <span className={styles.star}>✧</span>
            </div>
          </div>
          <div className={styles["shooting-stars-container"]}>
            <div className={`${styles["shooting-star"]} ${styles["ss-1"]}`}></div>
            <div className={`${styles["shooting-star"]} ${styles["ss-2"]}`}></div>
            <div className={`${styles["shooting-star"]} ${styles["ss-3"]}`}></div>
            <div className={`${styles["shooting-star"]} ${styles["ss-4"]}`}></div>
            <div className={`${styles["shooting-star"]} ${styles["ss-5"]}`}></div>
            <div className={`${styles["shooting-star"]} ${styles["ss-6"]}`}></div>
          </div>
          {!isVideoFinished ? (
            <video
              className={styles.mainlogo}
              src={getPath("/img/common/animation.mp4")}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
            />
          ) : (
            <img className={styles.mainlogo} src={getPath("/img/common/mainlogo.jpg")} alt="Hokuto Fes Logo" />
          )}
        </div>

        <section className={`${styles.about} fadein`}>
          <SectionTitle type="top">VISITOR INFORMATION</SectionTitle>

          <div className={styles.flex}>
            <div className={styles.img}>
              <img src={getPath("/img/temporary/about.jpg")} alt="" />
            </div>
            <div className={styles.text}>
              <p className={styles.title}>ご来場の皆様へ</p>
              <p className={styles.description}>
                ご来場の皆様とともに、最高の北斗祭を創り上げるため、いくつかのお願いがございます。
                <br />
                また、よくあるご質問に対する回答もご用意しておりますので、ぜひ一度ご覧ください。
              </p>
              <BaseButton href="/visitor">VIEW MORE</BaseButton>
            </div>{" "}
          </div>
        </section>

        <section className={`${styles.projects} fadein`}>
          <div className={styles.text}>
            <SectionTitle type="top">PROJECTS</SectionTitle>
            <p className={styles.description}>
              私たち富山高専生がつくる、色とりどりの展示や模擬店、
              <br />
              ステージ企画の情報を掲載しています。ぜひご活用ください。
            </p>
          </div>

          <div className={styles["products-list-area"]}>
            <ul className={styles["products-list"]}>
              {(randomImages.length > 0
                ? randomImages
                : [
                    "/img/top/products1.jpg",
                    "/img/top/products2.jpg",
                    "/img/top/products3.jpg",
                    "/img/top/products4.jpg",
                    "/img/top/products5.jpg",
                    "/img/top/products6.jpg",
                  ]
              ).map((src, i) => (
                <li key={i}>
                  <img src={getPath(src)} alt="" />
                </li>
              ))}
            </ul>
            <ul className={styles["products-list"]}>
              {(randomImages.length > 0
                ? randomImages
                : [
                    "/img/top/products1.jpg",
                    "/img/top/products2.jpg",
                    "/img/top/products3.jpg",
                    "/img/top/products4.jpg",
                    "/img/top/products5.jpg",
                    "/img/top/products6.jpg",
                  ]
              ).map((src, i) => (
                <li key={i}>
                  <img src={getPath(src)} alt="" />
                </li>
              ))}
            </ul>
          </div>

          <BaseButton href="/projects" centered>
            VIEW MORE
          </BaseButton>
        </section>

        {/* <section className={`${styles.works} fadein`}>
          <div className={styles.text}>
            <SectionTitle type="top">ABOUT</SectionTitle>
            <p className={styles.description}>
              富山高専のことや第18回北斗祭について
              <br />
              詳しい情報を掲載しています。
            </p>
            <p className={styles.description}>
              また、情報を発信するニュースや当日のアクセスの方法も掲載しています。
            </p>
            <p className={styles.description}>ぜひご活用ください。</p>
            <BaseButton href="/about">VIEW MORE</BaseButton>
          </div>

          <ul className={styles["works-list"]}>
            <li>
              <img src={getPath("/img/temporary/works1.jpg")} alt="" />
            </li>
            <li>
              <img src={getPath("/img/temporary/works2.jpg")} alt="" />
            </li>
            <li>
              <img src={getPath("/img/temporary/works3.jpg")} alt="" />
            </li>
            <li>
              <img src={getPath("/img/temporary/works4.jpg")} alt="" />
            </li>
          </ul>
        </section> */}

        <div className={`${styles["faq-contact"]} fadein`}>
          {/* company */}
          <Link className={styles.item} href="/about">
            <div className={styles.img}>
              <img src={getPath("/img/top/about.jpg")} alt="" />
            </div>
          </Link>
          {/* map */}
          <Link className={styles.item} href="/visitor?tab=maps">
            <div className={styles.img}>
              <img src={getPath("/img/top/faq.jpg")} alt="" />
            </div>
          </Link>
          {/* sponsor */}
          <Link className={styles.item} href="/works">
            <div className={styles.img}>
              <img src={getPath("/img/top/contact.jpg")} alt="" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
