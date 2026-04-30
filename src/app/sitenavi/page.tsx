import { Metadata } from "next";
import SitenaviContent from "./SitenaviContent";

export const metadata: Metadata = {
  title: "サイトナビ",
  description: "第18回北斗祭のホームページのサイトマップ、サイトポリシー、プライバシーポリシーを掲載しています。",
};

export default function SitenaviPage() {
  return <SitenaviContent />;
}
