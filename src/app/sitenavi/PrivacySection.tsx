"use client";

import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Container from "@/components/ui/Container/Container";
import styles from "./sitenavi.module.css";

export default function PrivacySection() {
    return (
        <div className={styles["sitenavi-section"]}>
            <SectionTitle>プライバシーポリシー</SectionTitle>
            <Container>
                <div className={styles["sitenavi-content"]}>
                    <p>
                        第18回北斗祭実行委員会（以下「本委員会」）は、個人情報（個人情報の保護に関する法律）の適切な保護、並びに利用が極めて重要であることを認識し、その取り扱いにあたり本プライバシーボリシーを遵守します。
                    </p>
                    <div>
                        <h3>法令の遵守</h3>
                        <p>本委員会は、個人情報の取り扱いの際、個人情報に関する法令を遵守します。</p>
                    </div>
                    <div>
                        <h3>収集のする情報</h3>
                        <p>お問い合わせにあたり、氏名、メールアドレス等の個人情報を入力して頂く場合があります。</p>
                    </div>
                    <div>
                        <h3>第三者提供</h3>
                        <p>本委員会では、以下の場合を除き収集した情報を第三者へ提供致しません。</p>
                        <ul>
                            <li className="list">・本人の同意が得られた場合</li>
                            <li className="list">・法令に基づく開示請求があった場合</li>
                            <li className="list">・不正アクセス、脅迫等の違法行為があった場合</li>
                            <li className="list">・その他特段の事情がある場合</li>
                        </ul>
                    </div>
                    <div>
                        <h3>委員会内提供</h3>
                        <p>
                            本委員会では、取得した個人情報を次期以降（第20回「高専祭～北斗祭～」以降）の北斗祭実行委員会に提供する場合がございます。予めご了承ください。
                        </p>
                    </div>
                    <div>
                        <h3>利用</h3>
                        <p>
                            本委員会からの諸連絡、お問い合わせへの返信のため 本委員会が提供するサービス改善のため
                            その他、北斗祭または委員会に関わるサービス提供のため
                            また、委員会は、法令により認められる範囲で、ユーザーの同意を得ることなく、上記の目的以外の目的で個人情報を取り扱う場合があります。
                        </p>
                    </div>
                    <div>
                        <h3>Cookie</h3>
                        <p>
                            本委員会の提供するウェブサイトには、Cookie（クッキー）を利用したページがございます。
                            利用者が使用しているブラウザの設定によりCookie（クッキー）を無効にすることができます。
                            しかしながら、ウェブサイトの一部コンテンツにおいて利用できなくなる場合がございますが、ご了承ください。
                        </p>
                    </div>
                    {/* <div >
                        <h3 >Google Forms</h3>
                        <p >
                            本委員会の提供するウェブサイトには、Google LLCが提供しております、オンライン　フォーム作成ツール　Google
                            Forms（フォーム）を利用したページがございます。
                            お問い合わせページ、投票ページ、アンケートページ等でGoogle
                            Formを使用したデータの集約を行っております。これはGoogle LLCが独自のプライバシーポリシーを有しており、当委員会がこれに対して責任を負うものではございません。詳細につきましては、Google LLCの利用規約や
                            <a href="https://policies.google.com/privacy?hl=ja">「プライバシーポリシー」</a>
                            をご覧いただきますようよろしくお願い申し上げます。
                        </p>
                    </div> */}
                    <div>
                        <h3>問い合わせ</h3>
                        <p>
                            本委員会における個人情報の取り扱いについてのお問い合わせは、下記のメールアドレス又はお問い合わせフォームよりお願い致します。
                        </p>
                        <p>
                            富山高等専門学校　射水キャンパス
                            <br />
                            北斗祭実行委員会
                            <br />
                            E-mail:{/*info[at]hokutosai.email */}
                            <br />
                            ※[at]の部分を@に変更してお送りください。
                        </p>
                    </div>
                    <div>
                        <Link
                            style={{
                                maxWidth: "200px",
                                padding: "12px 30px",
                                margin: "0 auto",
                                borderRadius: "30px",
                                border: "1px solid #1f1f1f",
                                background: "transparent",
                                color: "#1f1f1f",
                                cursor: "pointer",
                                fontSize: "16px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                whiteSpace: "nowrap",
                            }}
                            href="/contact"
                        >
                            <span>お問い合わせフォーム</span>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
