"use client";

import { useMapControl } from "@/components/webapp/contexts/MapContext";
import MapModal from "@/components/webapp/components/Map/MapModal";
import "@/app/(site)/visitor/visitor.css"

export default function MapModalWrapper() {
  const mapControl = useMapControl();

  if (!mapControl) return null;

  const { isMapOpen, closeMap, targetPlace } = mapControl;

  return (
    <MapModal 
      isOpen={isMapOpen} 
      onClose={closeMap} 
      targetPlace={targetPlace || undefined} 
    />
  );
}
