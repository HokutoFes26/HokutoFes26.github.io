import React, { useState, useEffect, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { useMap } from "react-leaflet";
import { getPath } from "@/constants/paths";
import { mapList } from "@/components/Map/MapPins";
import { MapPins } from "@/components/Map/MapPins";
import "leaflet/dist/leaflet.css";
import styles from "@/app/visitor/MapSection.module.css";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const ImageOverlay = dynamic(() => import("react-leaflet").then((mod) => mod.ImageOverlay), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });

function MapController({ onFullscreen }: { onFullscreen: () => void }) {
  const map = useMap();
  return (
    <div className={styles["maps-controls"]}>
      <button className={styles["maps-control-btn"]} onClick={() => map.zoomIn()}>＋</button>
      <button className={styles["maps-control-btn"]} onClick={() => map.zoomOut()}>－</button>
      <button className={`${styles["maps-control-btn"]} ${styles["fs-btn"]}`} onClick={onFullscreen}>全画面</button>
    </div>
  );
}

export default function MapSection({ initialPlace }: { initialPlace?: string | null }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ratio, setRatio] = useState(1.414);
  const [L, setL] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const pinData = useMemo(() => {
    if (!initialPlace) return null;
    return MapPins[initialPlace] || null;
  }, [initialPlace]);

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet);
    });
  }, []);

  useEffect(() => {
    if (pinData) {
      setActiveIndex(pinData.mapId);
    }
  }, [pinData, initialPlace]);

  useEffect(() => {
    setIsReady(false);
    const imgSrc = getPath(mapList[activeIndex].src);
    const img = new window.Image();
    img.src = imgSrc;
    img.onload = () => {
      setRatio(img.width / img.height);
      setIsReady(true);
    };
    img.onerror = () => {
      setRatio(1.414);
      setIsReady(true);
    };
  }, [activeIndex]);

  const getBounds = () => [[0, 0], [1000, 1000 * ratio]] as [number, number][];

  const categories = Array.from(new Set(mapList.map((item) => item.category)));

  return (
    <div className={styles["pr-map-section"]}>
      <div className={styles["webapp-map-wrapper"]}>
        <table className={styles["maps-nav-table"]}>
          <tbody>
            {categories.map((category) => (
              <tr key={category} className={styles["maps-nav-row"]}>
                <th className={styles["maps-nav-cell-category"]}>{category}</th>
                <td className={styles["maps-nav-cell-buttons"]}>
                  {mapList
                    .map((map, index) => ({ ...map, index }))
                    .filter((map) => map.category === category)
                    .map((map) => (
                      <button
                        key={map.index}
                        onClick={() => setActiveIndex(map.index)}
                        className={`${styles["maps-button"]} ${activeIndex === map.index ? styles.active : styles.inactive}`}
                      >
                        {map.title}
                      </button>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div ref={containerRef} className={styles["maps-container"]} style={{ height: "600px", position: "relative" }}>
          {L && isReady ? (
            <MapContainer
              key={`${activeIndex}-${ratio}`}
              crs={L.CRS.Simple}
              bounds={[[-40, -40 * ratio], [1040, 1040 * ratio]]}
              style={{ height: "100%", width: "100%" }}
              zoomSnap={0}
              minZoom={-2}
              zoomControl={false}
              attributionControl={false}
            >
              <ImageOverlay url={getPath(mapList[activeIndex].src)} bounds={getBounds()} />
              
              {pinData && pinData.mapId === activeIndex && (
                <Marker 
                  position={[pinData.y, pinData.x]} 
                  icon={L.divIcon({
                    className: "custom-pin",
                    html: `<div style="background-color: #ff4d4f; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 8px rgba(0,0,0,0.4); transform: translate(-7px, -7px);"></div>`,
                    iconSize: [0, 0]
                  })}
                />
              )}
              <MapController onFullscreen={() => containerRef.current?.requestFullscreen()} />
            </MapContainer>
          ) : (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>Loading Map...</div>
          )}
        </div>
      </div>
    </div>
  );
}
