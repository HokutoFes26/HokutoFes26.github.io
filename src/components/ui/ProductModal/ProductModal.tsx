"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getPath } from "@/constants/paths";
import styles from "./ProductModal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useMapControl } from "@/components/webapp/contexts/MapContext";

interface ProductModalProps {
  item: {
    name: string;
    team?: string;
    place?: string;
    image?: string;
  };
}

export default function ProductModal({ item }: ProductModalProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const mapControl = useMapControl();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 10);

    if (mapControl) mapControl.setProductModalOpen(true);

    return () => {
      clearTimeout(timer);
      if (mapControl) mapControl.setProductModalOpen(false);
    };
  }, [mapControl]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      router.push("/products/", { scroll: false });
    }, 300);
  };

  const handleLocationClick = () => {
    if (mapControl && item.place) {
      setIsOpen(false);
      mapControl.openMap(item.place);
      setTimeout(() => {
        router.push("/products/", { scroll: false });
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

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleClose}>
          <CloseIcon />
        </button>
        {item.image && <img src={getPath(item.image)} alt={item.name} className={styles.image} />}
        <div className={styles.content}>
          <p className={styles.name}>{item.name}</p>
          {item.team && <p className={styles.team}>{item.team}</p>}
          <div className={styles.details}>
            {item.place && (
              <div
                className={`${styles.detailItem} ${mapControl ? styles.clickable : ""}`}
                onClick={handleLocationClick}
              >
                <div className={styles.iconWrapper}>
                  <LocationOnOutlinedIcon style={{ fontSize: "24px", color: "#1f1f1f" }} />
                </div>
                <div>
                  <span className={styles.label}>場所</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <p className={styles.value}>{item.place} / </p>
                    {mapControl && <p style={{cursor: "pointer" }} className={styles.mapLink}>地図で見る ↗</p>}
                  </div>
                </div>
              </div>
            )}
            {item.team && (
              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}>
                  <GroupsOutlinedIcon style={{ fontSize: "24px", color: "#1f1f1f" }} />
                </div>
                <div>
                  <span className={styles.label}>運営</span>
                  <p className={styles.value}>{item.team}</p>
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
  );
}
