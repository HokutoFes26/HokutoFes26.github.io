"use client";

import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./FlipBook.module.css";
import { getPath } from "@/constants/paths";

interface PageProps {
  children: React.ReactNode;
}

const PageCover = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className={styles.page} ref={ref} data-density="hard">
      <div className={styles.pageContent}>
        {props.children}
      </div>
    </div>
  );
});
PageCover.displayName = "PageCover";

const PageContent = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className={styles.page} ref={ref}>
      <div className={styles.pageContent}>
        {props.children}
      </div>
    </div>
  );
});
PageContent.displayName = "PageContent";

export default function FlipBookClient() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth > 0 && windowWidth <= 767;
  const bookWidth = isMobile ? 300 : 450;
  const bookHeight = isMobile ? 424 : 636; // A4 Ratio ~ 1:1.414

  // Try to load up to 10 pages for now (assuming Panfu-1 to Panfu-10)
  // Since we don't know the exact number, we can define a fixed array.
  // The user can add more files by modifying this or ensuring files exist.
  const numPages = 32; // Start with 4 pages for demo
  const pages = Array.from({ length: numPages }, (_, i) => getPath(`/panfu/パンフレット-${i + 1}.webp`));

  if (windowWidth === 0) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.flipbookWrapper}>
      {/* @ts-ignore - react-pageflip types are slightly outdated */}
      <HTMLFlipBook
        width={bookWidth}
        height={bookHeight}
        size="stretch"
        minWidth={300}
        maxWidth={600}
        minHeight={424}
        maxHeight={848}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className={styles.flipbook}
      >
        {pages.map((imagePath, index) => {
          const PageComponent = (index === 0 || index === pages.length - 1) ? PageCover : PageContent;
          return (
            <PageComponent key={index}>
              <div className={styles.pdfContainer}>
                <img
                  src={imagePath}
                  alt={`パンフレット ${index + 1}ページ目`}
                  className={styles.pdfPage}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = getPath("/img/common/mainlogo.png"); // Fallback or placeholder
                    (e.target as HTMLImageElement).style.objectFit = "contain";
                  }}
                />
                <div className={styles.pageNumber}>{index + 1}</div>
              </div>
            </PageComponent>
          );
        })}
      </HTMLFlipBook>
    </div>
  );
}
