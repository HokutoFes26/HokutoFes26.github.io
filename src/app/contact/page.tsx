import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "お問い合わせフォームです。ご質問やご意見がございましたら、下記のフォームからお気軽にお問い合わせください。",
};

export default function ContactPage() {
  return <ContactContent />;
}
