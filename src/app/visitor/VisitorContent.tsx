"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import NoticeSection from "./NoticeSection";
import MapSection from "./MapSection";
import FaqSection from "./FaqSection";
import BusSection from "./BusSection";
import TabNav from "@/components/ui/TabNav/TabNav";
import faqData from "@/../public/data/faq.json";
import { getPath } from "@/constants/paths";
import styles from "./visitor.module.css";

function VisitorInner() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [currentTab, setCurrentTab] = useState<"notice" | "maps" | "faq" | "bus">("notice");

  useEffect(() => {
    if (tabParam === "maps" || tabParam === "faq" || tabParam === "notice" || tabParam === "bus") {
      setCurrentTab(tabParam as "notice" | "maps" | "faq" | "bus");
    }
  }, [tabParam]);

  const tabItems = [
    { label: "お願い", value: "notice" as const },
    { label: "校内マップ", value: "maps" as const },
    { label: "シャトルバス", value: "bus" as const },
    { label: "よくあるご質問", value: "faq" as const },
  ];

  return (
    <>
      <TabNav items={tabItems} currentTab={currentTab} onTabChange={(value) => setCurrentTab(value)} />

      <div>
        {currentTab === "notice" && <NoticeSection />}
        {currentTab === "maps" && <MapSection />}
        {currentTab === "bus" && <BusSection />}
        {currentTab === "faq" && <FaqSection data={faqData} />}
      </div>
    </>
  );
}

export default function VisitorContent() {
  return (
    <main>
      <PageHeader enTitle="VISITOR INFORMATION" jaTitle="来場者の皆様へ" imgSrc={getPath("/img/temporary/mainvisual.jpg")} />
      <Suspense fallback={<div style={{ textAlign: "center", padding: "40px" }}>読み込み中...</div>}>
        <VisitorInner />
      </Suspense>
    </main>
  );
}
