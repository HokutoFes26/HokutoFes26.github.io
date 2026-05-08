"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import NoticeSection from "./NoticeSection";
import MapSection from "./MapSection";
import FaqSection from "./FaqSection";
import AccessSection from "./AccessSection";
import TabNav from "@/components/ui/TabNav/TabNav";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import PageNav from "@/components/ui/PageNav/PageNav";
import Container from "@/components/ui/Container/Container";
import faqData from "@/../public/data/faq.json";
import { getPath } from "@/constants/paths";

function VisitorInner() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [currentTab, setCurrentTab] = useState<"notice" | "maps" | "faq" | "access">("notice");

  useEffect(() => {
    if (tabParam === "maps" || tabParam === "faq" || tabParam === "notice" || tabParam === "access") {
      setCurrentTab(tabParam as "notice" | "maps" | "faq" | "access");
    }
  }, [tabParam]);

  const tabItems = [
    { label: "お願い", value: "notice" as const },
    { label: "校内マップ", value: "maps" as const },
    { label: "アクセス", value: "access" as const },
    { label: "よくあるご質問", value: "faq" as const },
  ];

  return (
    <>
      <TabNav items={tabItems} currentTab={currentTab} onTabChange={(value) => setCurrentTab(value)} />

      <div>
        {currentTab === "notice" && <NoticeSection />}
        {currentTab === "maps" && <MapSection />}
        {currentTab === "access" && <AccessSection />}
        {currentTab === "faq" && <FaqSection data={faqData} />}
      </div>
    </>
  );
}

export default function VisitorContent() {
  return (
    <main>
      <PageHeader
        enTitle="VISITOR INFORMATION"
        jaTitle="来場者の皆様へ"
        imgSrc={getPath("/img/common/mainvisual.jpg")}
      />
      <Suspense fallback={<div style={{ textAlign: "center", padding: "40px" }}>読み込み中...</div>}>
        <VisitorInner />
      </Suspense>

    </main>
  );
}
