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
                                    <Link href="/about#service">ご挨拶</Link>
                                </li>
                                <li>
                                    <Link href="/about#philosophy">テーマ</Link>
                                </li>
                                <li>
                                    <Link href="/about#overview">ニュース</Link>
                                </li>
                                <li>
                                    <Link href="/about#access">アクセス</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            企画紹介
                            <ul>
                                <li>
                                    <Link href="/projects#service">展示</Link>
                                </li>
                                <li>
                                    <Link href="/projects#philosophy">模擬店</Link>
                                </li>
                                <li>
                                    <Link href="/projects#overview">ステージ企画</Link>
                                </li>
                                <li>
                                    <Link href="/projects#access">タイムテーブル</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            ご来場の皆様へ
                            <ul>
                                <li>
                                    <Link href="/visitor?tab=notice">お願い</Link>
                                </li>
                                <li>
                                    <Link href="/visitor?tab=faq">よくあるご質問</Link>
                                </li>
                                <li>
                                    <Link href="/visitor?tab=maps">校内マップ</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/shuttle_bus">シャトルバス時刻表</Link>
                        </li>
                        <li>
                            <Link href="/works">ご協賛企業様</Link>
                        </li>
                        <li>
                            <Link href="/contact">お問い合わせ</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
