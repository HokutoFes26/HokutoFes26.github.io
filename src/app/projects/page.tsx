import { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "企画紹介",
  description: "第18回北斗祭の展示や模擬店、ステージ企画についてご紹介します。",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
