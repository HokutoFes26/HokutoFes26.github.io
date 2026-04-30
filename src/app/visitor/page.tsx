import { Metadata } from "next";
import VisitorContent from "./VisitorContent";

export const metadata: Metadata = {
  title: "来場者の皆様へ",
  description: "第18回北斗祭の来場者向け情報 (お願い、校内マップ、シャトルバス、FAQ) をご案内します。",
};

export default function VisitorPage() {
  return <VisitorContent />;
}
