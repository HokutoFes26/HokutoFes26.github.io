"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useEffect } from "react";
import ProductModal from "./ProductModal";

interface Item {
  name: string;
  team?: string;
  place?: string;
  image?: string;
  image_hidden?: string;
}

interface ProductModalManagerProps {
  allData: {
    products: Item[][];
    stalls: Item[][];
    events?: Item[][];
  };
}

function ModalContent({ allData }: ProductModalManagerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedName = searchParams.get("name");

  useEffect(() => {
    const autoOpen = sessionStorage.getItem("autoOpenProduct");
    if (autoOpen && !selectedName) {
      sessionStorage.removeItem("autoOpenProduct");
      router.push(`/projects?name=${encodeURIComponent(autoOpen)}`, { scroll: false });
    }
  }, [router, selectedName]);

  const selectedItem = useMemo(() => {
    if (!selectedName) return null;

    const findInArray = (arrs: Item[][] | undefined) => {
      if (!arrs) return null;
      for (const group of arrs) {
        const found = group.find((item) => {
          if (item.name === selectedName) return true;
          if (item.team && `${item.name}-${item.team}` === selectedName) return true;
          return false;
        });
        if (found) return found;
      }
      return null;
    };

    return (
      findInArray(allData.products) ||
      findInArray(allData.stalls) ||
      findInArray(allData.events)
    );
  }, [selectedName, allData]);

  if (!selectedItem) return null;

  return <ProductModal item={selectedItem} />;
}

export default function ProductModalManager(props: ProductModalManagerProps) {
  return (
    <Suspense fallback={null}>
      <ModalContent {...props} />
    </Suspense>
  );
}
