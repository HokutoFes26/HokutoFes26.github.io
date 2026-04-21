"use client";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Container from "@/components/ui/Container/Container";
import styles from "./sitenavi.module.css";

export default function PrivacySection() {
    return (
        <div className={styles["sitenavi-section"]}>
            <SectionTitle>プライバシーポリシー</SectionTitle>
            <Container>
                <div className={styles["sitenavi-content"]}>
                    <h3>プライバシーポリシー</h3>
                </div>
            </Container>
        </div>
    );
}
