"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getPath } from "@/constants/paths";
import styles from "./ProductModal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ListIcon from "@mui/icons-material/List";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMapControl } from "@/components/Map/MapContext";

type ProductModalPropsMenu = {
  content: string;
  price: number;
};

interface ProductModalProps {
  item: {
    name: string;
    team?: string;
    place?: string;
    menu?: ProductModalPropsMenu[];
    image?: string;
    image2?: string;
    image_hidden?: string;
  };
}

export default function ProductModal({ item }: ProductModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isHiddenFromUrl = searchParams.get("hidden") === "true";
  const [isOpen, setIsOpen] = useState(false);
  const [showHidden, setShowHidden] = useState(isHiddenFromUrl);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const mapControl = useMapControl();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHiddenFromUrl && item.image_hidden && Math.random() < 0) {
      setShowHidden(true);
    }
  }, [isHiddenFromUrl, item.name]);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 10);
    if (mapControl) mapControl.setProductModalOpen(true);
    return () => {
      clearTimeout(timer);
      if (mapControl) mapControl.setProductModalOpen(false);
    };
  }, [mapControl]);

  useEffect(() => {
    if (isMenuExpanded && modalRef.current) {
      const scrollTarget = modalRef.current;
      const timer = setTimeout(() => {
        scrollTarget.scrollTo({
          top: scrollTarget.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isMenuExpanded]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      router.back();
    }, 200);
  };

  const handleLocationClick = () => {
    if (mapControl && item.place) {
      setIsOpen(false);
      mapControl.openMap(item.place);
      setTimeout(() => {
        router.back();
      }, 300);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${item.name} | 企画紹介`,
      text: `${item.name} (${item.team || ""}) の企画詳細をチェック！`,
      url: window.location.href,
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(window.location.href);
        alert("URLをクリップボードにコピーしました");
      }
    } catch (err) {
      console.error("Share error:", err);
    }
  };

  const isAccordion = (item.menu?.length ?? 0) >= 4;

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleClose}>
          <CloseIcon />
        </button>
        <div className={styles.scrollArea} ref={modalRef}>
          {showHidden && item.image_hidden ? (
            <img src={getPath(item.image_hidden)} alt={item.name} className={styles.image} />
          ) : item.image2 ? (
            <img src={getPath(item.image2)} alt={item.name} className={styles.image2} />
          ) : (
            item.image && (
              <>
                <img src={getPath(item.image)} alt={item.name} className={styles.image} />
                <img src={getPath(item.image)} alt={item.name} className={styles.imageback} />
              </>
            )
          )}
          <div className={styles.content}>
            <p className={styles.name}>{item.name}</p>
            {item.team && <p className={styles.team}>{item.team}</p>}
            <div className={styles.details}>
              {item.place && (
                <div
                  className={`${styles.detailItem} ${mapControl ? styles.clickable : ""}`}
                  onClick={handleLocationClick}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className={styles.iconWrapper}>
                    <LocationOnOutlinedIcon style={{ fontSize: "20px", color: "#1f1f1f" }} />
                  </div>
                  <div>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4px" }}>
                      <p className={styles.value}>{item.place}&ensp;</p>
                      {mapControl && (
                        <p
                          style={{ cursor: "pointer", color: "#0033cc", textDecoration: "underline" }}
                          className={styles.mapLink}
                        >
                          地図で見る ↗
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {item.menu && item.menu.length > 0 && (
                <div className={styles.detailItem}>
                  <div className={styles.iconWrapper}>
                    <ListIcon style={{ fontSize: "20px", color: "#1f1f1f" }} />
                  </div>
                  <div style={{ flex: 1, marginTop: "0.5em" }}>
                    {isAccordion ? (
                      <>
                        <div className={styles.accordionHeader} onClick={() => setIsMenuExpanded(!isMenuExpanded)}>
                          <p className={styles.value}>メニューを見る ({item.menu.length}件)</p>
                          <ExpandMoreIcon
                            className={`${styles.accordionIcon} ${isMenuExpanded ? styles.expanded : ""}`}
                          />
                        </div>
                        <div className={`${styles.accordionContent} ${isMenuExpanded ? styles.expanded : ""}`}>
                          <div className={styles.menuGrid}>
                            {item.menu.map((item_menu, index) => (
                              <React.Fragment key={index}>
                                <span className={styles.value}>{item_menu.content}</span>
                                <span className={`${styles.value} ${styles.menuPrice}`}>{item_menu.price}円</span>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className={styles.menuGrid}>
                        {item.menu.map((item_menu, index) => (
                          <React.Fragment key={index}>
                            <span className={styles.value}>{item_menu.content}</span>
                            <span className={`${styles.value} ${styles.menuPrice}`}>{item_menu.price}円</span>
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <button className={styles.shareBtn} onClick={handleShare}>
              <ShareOutlinedIcon style={{ fontSize: "20px" }} />
              共有する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
