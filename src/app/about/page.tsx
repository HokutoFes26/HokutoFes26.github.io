import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "北斗祭について",
  description: "第18回北斗祭のテーマやご挨拶、アクセス情報についてご紹介します。",
};

export default function AboutPage() {
  return <AboutContent />;
}