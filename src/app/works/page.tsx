import { Metadata } from "next";
import WorksContent from "./WorksContent";

export const metadata: Metadata = {
  title: "ご協賛企業様",
  description: "第18回北斗祭のご協賛企業様の情報を掲載しています。",
};

export default function WorksPage() {
  return <WorksContent />;
}
