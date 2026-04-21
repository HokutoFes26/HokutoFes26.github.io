"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getPath } from "@/constants/paths";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import PrivacySection from "./PrivacySection";
import SitemapSection from "./SitemapSection";
import SitePolicySection from "./SitePolicySection";
import TabNav from "@/components/ui/TabNav/TabNav";

function SitenaviContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [currentTab, setCurrentTab] = useState<"sitemap" | "policy" | "privacy">("sitemap");

  useEffect(() => {
    if (tabParam === "policy" || tabParam === "privacy" || tabParam === "sitemap") {
      setCurrentTab(tabParam as "sitemap" | "policy" | "privacy");
    }
  }, [tabParam]);

  const tabItems = [
    { label: "サイトマップ", value: "sitemap" as const },
    { label: "サイトポリシー", value: "policy" as const },
    { label: "プライバシーポリシー", value: "privacy" as const },
  ];

  return (
    <main>
      <PageHeader enTitle="SITE NAVI" jaTitle="サイトナビ" imgSrc={getPath("/img/common/mainvisual.jpg")} />

      <TabNav items={tabItems} currentTab={currentTab} onTabChange={(value) => setCurrentTab(value)} />

      {currentTab === "sitemap" && <SitemapSection />}
      {currentTab === "policy" && <SitePolicySection />}
      {currentTab === "privacy" && <PrivacySection />}
    </main>
  );
}

export default function SitenaviPage() {
  return;
  <Suspense fallback={<div style={{ textAlign: "center", padding: "40px" }}>読み込み中...</div>}>
    <SitenaviContent />
  </Suspense>;
}
