import fs from "fs";
import path from "path";
import TabbedSectionClient from "./TabbedSectionClient";
import { getPath } from "@/constants/paths";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import PageNav from "@/components/ui/PageNav/PageNav";
import ProductModalManager from "@/components/ui/ProductModal/ProductModalManager";
import { MapProvider } from "@/components/Map/MapContext";
import MapModalWrapper from "./MapModalWrapper";

function getLocalData(fileName: string) {
  const filePath = path.join(process.cwd(), "public/data", fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export default function ProjectsContent() {
  const p = getLocalData("products.json");
  const s = getLocalData("booth.json");
  const e = getLocalData("events.json");

  const allData = {
    products: [p.L1 || [], p.L2 || [], p.L3 || [], p.L4 || []],
    stalls: [s.L1 || [], s.L2 || [], s.L3 || [], s.L4 || []],
    events: [e.day1 || [], e.day2 || []],
  };

  return (
    <main>
      <MapProvider>
        <ProductModalManager allData={allData} />

        <PageHeader enTitle="PROJECTS" jaTitle="企画紹介" imgSrc={getPath("/img/common/mainvisual.jpg")} />

        <PageNav
          items={[
            { label: "展示", href: "#products" },
            { label: "模擬店", href: "#booth" },
            { label: "ステージ企画", href: "#stage" },
            { label: "タイムテーブル", href: "#timetable" },
          ]}
        />

        <TabbedSectionClient
          id="products"
          title="展示"
          tabs={["クラス展示", "部活動展示", "学科展示", "特別展示"]}
          data={allData.products}
          type="card"
          description={
            <div style={{ maxWidth: "300px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #ddd", paddingBottom: "4px" }}>
                <span style={{ fontWeight: "bold", color: "#555" }}>23日(土)</span>
                <span style={{ fontWeight: "500" }}>10:00 - 15:30</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #ddd", paddingBottom: "4px" }}>
                <span style={{ fontWeight: "bold", color: "#555" }}>24日(日)</span>
                <span style={{ fontWeight: "500" }}>10:00 - 14:30</span>
              </div>
            </div>
          }
        />

        <TabbedSectionClient
          id="booth"
          title="模擬店"
          tabs={["運動部", "文化部", "クラス", "その他"]}
          data={allData.stalls}
          type="card"
          description={
            <div style={{ maxWidth: "300px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #ddd", paddingBottom: "4px" }}>
                <span style={{ fontWeight: "bold", color: "#555" }}>23日(土)</span>
                <span style={{ fontWeight: "500" }}>10:00 - 15:00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #ddd", paddingBottom: "4px" }}>
                <span style={{ fontWeight: "bold", color: "#555" }}>24日(日)</span>
                <span style={{ fontWeight: "500" }}>10:00 - 14:30</span>
              </div>
            </div>
          }
        />

        <TabbedSectionClient
          id="stage"
          title="ステージ企画"
          tabs={["1日目", "2日目"]}
          data={allData.events}
          type="list"
        />

        <TabbedSectionClient
          id="timetable"
          title="タイムテーブル"
          tabs={["1日目", "2日目"]}
          data={allData.events}
          type="timeline"
        />

        <MapModalWrapper />
      </MapProvider>
    </main>
  );
}
