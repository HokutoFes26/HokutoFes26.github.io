"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import ProductModal from "./ProductModal";

interface Item {
  name: string;
  team?: string;
  place?: string;
  image?: string;
}

interface ProductModalManagerProps {
  allData: {
    products: Item[][];
    stalls: Item[][];
  };
}

function ModalContent({ allData }: ProductModalManagerProps) {
  const searchParams = useSearchParams();
  const selectedName = searchParams.get("name");

  const selectedItem = useMemo(() => {
    if (!selectedName) return null;

    const findInArray = (arrs: Item[][]) => {
      for (const group of arrs) {
        const found = group.find((item) => item.name === selectedName);
        if (found) return found;
      }
      return null;
    };

    return findInArray(allData.products) || findInArray(allData.stalls);
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
