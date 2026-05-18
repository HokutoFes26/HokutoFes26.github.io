"use client";

import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Container from "@/components/ui/Container/Container";
import styles from "./sitenavi.module.css";

export default function SitemapSection() {
  return (
    <div className={styles["sitenavi-section"]}>
      <SectionTitle>サイトマップ</SectionTitle>
      <Container>
        <div className={styles["sitenavi-content"]}>
          <ul className={styles["sitemap-list"]}>
            <li>
              <Link href="/">トップページ</Link>
            </li>
            <li>
              「北斗祭」について
              <ul>
                <li>
                  <Link href="/about/#greeting">ご挨拶</Link>
                </li>
                <li>
                  <Link href="/about/#theme">テーマ</Link>
                </li>
                <li>
                  <Link href="/about/#pamphlet">パンフレット</Link>
                </li>
                <li>
                  <Link href="/about/#app">アプリ</Link>
                </li>
              </ul>
            </li>
            <li>
              企画紹介
              <ul>
                <li>
                  <Link href="/projects/#products">展示</Link>
                </li>
                <li>
                  <Link href="/projects/#booth">模擬店</Link>
                </li>
                <li>
                  <Link href="/projects/#stage">ステージ企画</Link>
                </li>
                <li>
                  <Link href="/projects/#timetable">タイムテーブル</Link>
                </li>
              </ul>
            </li>
            <li>
              ご来場の皆様へ
              <ul>
                <li>
                  <Link href="/visitor/?tab=notice">お願い</Link>
                </li>
                <li>
                  <Link href="/visitor/?tab=faq">よくあるご質問</Link>
                </li>
                <li>
                  <Link href="/visitor/?tab=access">アクセス</Link>
                </li>
                <li>
                  <Link href="/visitor/?tab=maps">校内マップ</Link>
                </li>
              </ul>
            </li>
            <li>
              ご協賛企業様
              <ul>
                <li>
                  <Link href="/works/?tab=works">ご協賛企業様</Link>
                </li>
                <li>
                  <Link href="/works/?tab=thanks">スペシャルサンクス</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact/">お問い合わせ</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
