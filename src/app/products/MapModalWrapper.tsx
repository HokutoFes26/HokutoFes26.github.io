"use client";

import { useMapControl } from "@/components/Map/MapContext";
import MapModal from "@/components/Map/MapModal";

export default function MapModalWrapper() {
  const mapControl = useMapControl();

  if (!mapControl) return null;

  const { isMapOpen, closeMap, targetPlace } = mapControl;

  return <MapModal isOpen={isMapOpen} onClose={closeMap} targetPlace={targetPlace || undefined} />;
}
