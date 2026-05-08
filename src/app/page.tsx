"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./main.module.css";
import { getPath } from "@/constants/paths";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import BaseButton from "@/components/ui/BaseButton/BaseButton";
import { booth_projects_images } from "@/constants/imagePool";

export default function Home() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch((error) => {
      console.warn("Autoplay logo was blocked: ", error);
      setIsVideoFinished(true);
      setTimeout(() => {
        handleVideoEnded();
      }, 700);
    });
  }, []);

  const handleVideoEnded = () => {
    setIsVideoFinished(true);
    const isMobile = window.innerWidth <= 767;
    const targetPosition = isMobile ? window.innerHeight * 0.4 : window.innerHeight * 0.8;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    if (distance <= 0) return;

    const duration = 1400;
    let start: number | null = null;
    let requestId: number;

    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const easeInOutQuad = (t: number): number => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

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
      const currentPos = startPosition + distance * easeInOutQuad(progress);

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
      const allImages = Array.from(new Set([...booth_projects_images]));
      const shuffled = allImages.sort(() => 0.5 - Math.random());
      setRandomImages(shuffled.slice(0, 8));
    };
    loadImages();
  }, []);

  return (
    <div>
      <main className={styles["top-page"]}>
        <div className={styles.mainvisual}>
          <div className={`${styles["twinkling-stars-container"]} animate-optimize`}>
            {[...Array(15)].map((_, i) => (
              <div key={`ts-${i}`} className={`${styles["twinkling-star"]} ${styles[`ts-${i + 1}`]}`}></div>
            ))}
          </div>
          <div className={`${styles["star-orbits-container"]} animate-optimize`}>
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
          <div className={`${styles["shooting-stars-container"]} animate-optimize`}>
            <div className={`${styles["shooting-star"]} ${styles["ss-1"]}`}></div>
            <div className={`${styles["shooting-star"]} ${styles["ss-2"]}`}></div>
            <div className={`${styles["shooting-star"]} ${styles["ss-3"]}`}></div>
            <div className={`${styles["shooting-star"]} ${styles["ss-4"]}`}></div>
            <div className={`${styles["shooting-star"]} ${styles["ss-5"]}`}></div>
            <div className={`${styles["shooting-star"]} ${styles["ss-6"]}`}></div>
          </div>
          {!isVideoFinished ? (
            <video
              ref={videoRef}
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

        <section className={`${styles.about} fadein`} style={{ opacity: "1" }}>
          <SectionTitle type="top">VISITOR INFORMATION</SectionTitle>
          <div className={styles.flex}>
            <div className={styles.img}>
              <img src={getPath("/img/top/visitorinfo.jpg")} alt="" />
            </div>
            <div className={styles.text}>
              <p className={styles.title}>ご来場の皆様へ</p>
              <p className={styles.description}>
                ご来場の皆様とともに、最高の北斗祭を創り上げるため、いくつかのお願いがございます。
                <br />
                また、よくあるご質問に対する回答もご用意しておりますので、ぜひ一度ご覧ください。
              </p>
              <BaseButton href="/visitor">VIEW MORE</BaseButton>
            </div>
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

          <div className={`${styles["products-list-area"]} animate-optimize`}>
            <ul className={styles["products-list"]}>
              {(randomImages.length > 0 ? randomImages : []).map((src, i) => (
                <li key={i}>
                  <img src={getPath(src)} alt="" />
                </li>
              ))}
            </ul>
            <ul className={styles["products-list"]}>
              {(randomImages.length > 0 ? randomImages : []).map((src, i) => (
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
          {/* sponsor */}
          <Link className={styles.item} href="/works">
            <div className={styles.img}>
              <img src={getPath("/img/top/works.jpg")} alt="" />
            </div>
          </Link>
          {/* map */}
          <Link className={styles.item} href="/visitor?tab=maps">
            <div className={styles.img}>
              <img src={getPath("/img/top/visitor.jpg")} alt="" />
            </div>
          </Link>
          {/* access */}
          <Link className={styles.item} href="/visitor?tab=access">
            <div className={styles.img}>
              <img src={getPath("/img/top/access.jpg")} alt="" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
