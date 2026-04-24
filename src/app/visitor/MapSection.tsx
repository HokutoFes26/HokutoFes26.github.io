"use client";

import MapSectionBase from "@/components/Map/MapSection";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Container from "@/components/ui/Container/Container";

export default function MapSection() {
  return (
    <div className="maps-section">
      <SectionTitle>エリア・フロア別マップ</SectionTitle>
      <Container>
        <MapSectionBase />
      </Container>
    </div>
  );
}
