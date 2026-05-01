import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ItemCard from "@/components/ui/ItemCard/ItemCard";
import CardWrapper from "@/components/ui/CardWrapper/CardWrapper";
import "./works.css";

interface worksDataItem {
  name: string;
  url: string;
  image: string;
  fit: number;
}

type worksDataType = worksDataItem[];

export default function ThanksSection(props: { worksData: worksDataType }) {
  return (
    <div className="sitenavi-section">
      <SectionTitle>協賛企業様一覧</SectionTitle>
      <CardWrapper>
        {props.worksData.map((item, index: number) => (
          <ItemCard
            key={index}
            data={{
              type: "company",
              name: item.name,
              url: item.url,
              image: item.image,
              fit: item.fit
            }}
          />
        ))}
      </CardWrapper>
      <p className="thanksOther">他にも多くの企業様にご協賛いただきましたことを、ここで感謝申し上げます。</p>
    </div>
  );
}
