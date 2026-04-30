"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getPath } from "@/constants/paths";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import WorksSection from "./WorksSection";
import ThanksSection from "./ThanksSection";
import TabNav from "@/components/ui/TabNav/TabNav";
import worksData from "@/../public/data/works.json";

function WorksContent() {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");

    const [currentTab, setCurrentTab] = useState<"works" | "thanks">("works");

    useEffect(() => {
        if (tabParam === "works" || tabParam === "thanks") {
            setCurrentTab(tabParam as "works" | "thanks");
        }
    }, [tabParam]);

    const tabItems = [
        { label: "ご協賛企業様", value: "works" as const },
        { label: "スペシャルサンクス", value: "thanks" as const },
    ];

    return (
        <>
            <TabNav
                items={tabItems}
                currentTab={currentTab}
                onTabChange={(value) => setCurrentTab(value)}
            />

            {currentTab === "works" && <WorksSection worksData={worksData.works}/>}
            {currentTab === "thanks" && <ThanksSection worksData={worksData.thanks} />}
        </>
    );
}

export default function WorksPage() {
    return (
        <main>
            <PageHeader enTitle="WORKS" jaTitle="ご協賛企業様" imgSrc={getPath("/img/temporary/mainvisual.jpg")} />
            <Suspense fallback={<div>Loading...</div>}>
                <WorksContent />
            </Suspense>
        </main>
    );
}
