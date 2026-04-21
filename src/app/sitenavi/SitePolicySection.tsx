"use client";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Container from "@/components/ui/Container/Container";
import styles from "./sitenavi.module.css";

export default function SitePolicySection() {
    return (
        <div className={styles["sitenavi-section"]}>
            <SectionTitle>サイトポリシー</SectionTitle>
            <Container>
                <div className={styles["sitenavi-content"]}>
                    <h3>サイトポリシー</h3>
                </div>
            </Container>
        </div>
    );
}
