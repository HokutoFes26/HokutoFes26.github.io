"use client";

import React, { Suspense, useState, useMemo, useRef, useEffect } from "react";
import "@/components/webapp/App.css";
import Menu from "@/components/webapp/components/Layout/menu";
import EventStatus from "@/components/webapp/components/Status/EventStatus";
import BoothStatus from "@/components/webapp/components/Status/BoothStatus";
import NewsStatus from "@/components/webapp/components/Status/NewsStatus";
import { useRole } from "@/components/webapp/contexts/RoleContext";
import { useData } from "@/components/webapp/contexts/DataContext";
import { useAppTime } from "@/components/webapp/contexts/TimeContext";
import MapIcon from "@mui/icons-material/Map";
import dayjs from "dayjs";

const BusStatus = React.lazy(() => import("@/components/webapp/components/Status/BusStatus"));
const LostStatus = React.lazy(() => import("@/components/webapp/components/Status/LostStatus"));
const QAStatus = React.lazy(() => import("@/components/webapp/components/Status/QAStatus"));
const MapModal = React.lazy(() => import("@/components/webapp/components/Map/MapModal"));
const NewsManager = React.lazy(() => import("@/components/webapp/components/Admin/NewsManager"));
const BoothManager = React.lazy(() => import("@/components/webapp/components/Admin/BoothManager"));
const LostManager = React.lazy(() => import("@/components/webapp/components/Admin/LostManager"));
const QAManager = React.lazy(() => import("@/components/webapp/components/Admin/QAManager"));
const ServerConfig = React.lazy(() => import("@/components/webapp/components/Misc/ServerConfig"));
const AppShare = React.lazy(() => import("@/components/webapp/components/Layout/AppShare"));

const FallbackLoader = () => (
  <div style={{ textAlign: "center", padding: "20px", color: "var(--text-sub-color)" }}>Loading Panel...</div>
);

export default function PC() {
  const { isAdmin, isStallAdmin, assignedStall } = useRole();
  const {
    api: { fetchedData },
  } = useData();
  const { currentTime } = useAppTime();

  const mainRef = useRef<HTMLDivElement>(null);
  const scheRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isMapOpen, setIsMapMapOpen] = useState(false);

  const news = fetchedData?.news || [];
  const hotTime = 20;

  const hasHotNews = useMemo(() => {
    const now = currentTime.valueOf();
    return news.some((item) => {
      const created = dayjs(item.created_at).valueOf();
      const diffMin = (now - created) / (1000 * 60);
      return diffMin > -1 && diffMin <= hotTime;
    });
  }, [news, currentTime]);

  const MainContent = useMemo(() => {
    const isServerAdmin = assignedStall === "server";
    if (isAdmin) {
      return (
        <Suspense fallback={<FallbackLoader />}>
          {isServerAdmin && <ServerConfig />}
          <NewsManager />
          {!isServerAdmin && <BoothManager />}
        </Suspense>
      );
    }
    if (isStallAdmin) {
      return (
        <Suspense fallback={<FallbackLoader />}>
          <BoothManager />
        </Suspense>
      );
    }
    return (
      <>
        {hasHotNews && (
          <div style={{ border: "2px solid #ff4d4f", borderRadius: "34px", marginBottom: "15px" }}>
            <NewsStatus onlyHot={true} />
          </div>
        )}
        <EventStatus />
        <BoothStatus />
        <NewsStatus />
      </>
    );
  }, [isAdmin, isStallAdmin, hasHotNews, assignedStall]);

  const SubContent = useMemo(() => {
    if (isAdmin) {
      return (
        <Suspense fallback={<FallbackLoader />}>
          <QAManager />
          <LostManager />
        </Suspense>
      );
    }
    if (isStallAdmin) {
      return <NewsStatus />;
    }
    return (
      <Suspense fallback={<FallbackLoader />}>
        <LostStatus />
        <BusStatus />
        <QAStatus />
      </Suspense>
    );
  }, [isAdmin, isStallAdmin]);

  return (
    <div className="mainCanvas">
      <div className="PCCanvas" ref={canvasRef}>
        <Suspense fallback={null}>
          <MapModal isOpen={isMapOpen} onClose={() => setIsMapMapOpen(false)} />
        </Suspense>
        <div className="main" id="main" ref={mainRef}>
          <div className="mainCards">{MainContent}</div>
        </div>
        <div className="sche" id="sche" ref={scheRef}>
          <div className="mainCards">{SubContent}</div>
        </div>
        <AppShare/>
        <button className="map-float-btn" onClick={() => setIsMapMapOpen(true)}>
          <MapIcon style={{ fontSize: "28px" }} />
          <span style={{ fontSize: "10px", fontWeight: "bold" }}>MAP</span>
        </button>
      </div>
      <Menu />
    </div>
  );
}
