"use client";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Container from "@/components/ui/Container/Container";
import FaqList from "./FaqList";

interface FaqSectionProps {
    data: any;
}

export default function FaqSection({ data }: FaqSectionProps) {
    return (
        <div id="faq">
            <SectionTitle>よくあるご質問</SectionTitle>
            <Container>
                <FaqList data={data} />
            </Container>
        </div>
    );
}
