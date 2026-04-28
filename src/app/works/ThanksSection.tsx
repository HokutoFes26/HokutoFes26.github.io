import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ItemCard from "@/components/ui/ItemCard/ItemCard";
import CardWrapper from "@/components/ui/CardWrapper/CardWrapper";

interface Thanks {
  name: string;
  job: string;
}

type ThanksDataType = Thanks[];

export default function ThanksSection(props: { worksData: ThanksDataType }) {
  return (
    <div className="sitenavi-section">
      <SectionTitle>スペシャルサンクス</SectionTitle>
      <CardWrapper>
        {props.worksData.map((item, index: number) => (
          <ItemCard
            key={index}
            data={{
              type: "thanks",
              name: item.name,
              job: item.job,
            }}
          />
        ))}
      </CardWrapper>
    </div>
  );
}
