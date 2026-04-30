"use client";

import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Container from "@/components/ui/Container/Container";

export default function NoticeSection() {
    return (
        <div className="notice-section">
            <SectionTitle>ご来場の皆様へのお願い</SectionTitle>
            <Container>
                <div style={{ lineHeight: "2", marginBottom: "80px" }}>
                    <p>第18回北斗祭を安全に楽しく開催するため、来場者の皆様には以下の点にご協力をお願いいたします。</p>
                    <ul style={{ marginTop: "20px", listStyle: "disc", paddingLeft: "20px" }}>
                        <li>・キャンパス内は終日全面禁煙となっております。喫煙所のご用意もございませんので、何卒ご理解とご協力のほどお願い申し上げます。</li>
                        <li>・キャンパス内への酒類の持ち込みは固くお断りしております。ノンアルコール飲料につきましても、同様にご遠慮いただけますようお願い申し上げます。</li>
                        <li>・北斗祭では、環境美化のためゴミの分別回収を行っております。キャンパス内各所に設置しております専用のゴミ箱へ、『可燃ゴミ』『ペットボトル』『空き缶』に分別してお出しいただけますようお願いいたします。なお、家庭ゴミの持ち込みはご遠慮ください。皆様の温かいご協力を心よりお願い申し上げます。</li>
                        <li>・ご来場の際は、キャンパス内の駐車場はご利用いただけません。お車でお越しの際は、東明小学校隣の『臨時駐車場』をご利用くださいますようお願い申し上げます。なお、駐車場内での事故や盗難等のトラブルにつきましては、本委員会では責任を負いかねますので、十分ご注意ください。また、近隣店舗や路上、公園等への無断駐車は、周囲のご迷惑となりますので固くお断りいたします。</li>
                        <li>・北斗祭2026の公式SNSは、Instagramのみとなっております。その他のSNSアカウントにつきましては本委員会とは一切関係がございませんので、ご確認のうえ、ご留意いただけますようお願い申し上げます。</li>
                        <li>　Instagram：https://www.instagram.com/toyama.hokutosai_2026</li>
                        <li>・お忘れ物に関するご案内</li>
                        <li>＜5月23日・24日の期間中＞</></li>
                        <li>【受付場所】北斗祭本部</li>
                        <li>※落とし物を拾得された際も、本部までお持ちいただけますようご協力をお願いいたします。</li>
                        <li></li>
                        <li>＜北斗祭終了後＞</></li>
                        <li>【受付場所】射水キャンパス 学生支援課</li>
                        <li>お問い合わせは、窓口へ直接お越しいただくか、お問い合わせフォームより承っております。</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
