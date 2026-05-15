"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./contact.module.css";
import { getPath } from "@/constants/paths";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import Container from "@/components/ui/Container/Container";
import BaseButton from "@/components/ui/BaseButton/BaseButton";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [knowValues, setKnowValues] = useState<Record<string, boolean>>({});

  const handleKnowChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKnowValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.checked,
    }));
  };

  const isKnowSelected = Object.values(knowValues).some(Boolean);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isKnowSelected) {
      alert("「どこでお知りになりましたか？」を1つ以上選択してください。");
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        params.append(key, value);
      }

    try {
      await fetch(form.action, {
        method: "POST",
        mode: "no-cors",
        body: params,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("送信中にエラーが発生しました。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <PageHeader enTitle="CONTACT" jaTitle="お問い合わせ" imgSrc={getPath("/img/common/mainvisual.jpg")} />

      <Container>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "100px 20px" }}>
            <p style={{ fontSize: "20px", fontWeight: "700", marginBottom: "20px" }}>送信が完了しました</p>
            <p style={{ marginBottom: "40px", lineHeight: "1.8" }}>
              お問い合わせいただきありがとうございます。
              <br />
              内容を確認次第、担当者よりご連絡させていただきます。
            </p>
            <BaseButton href="/">TOPに戻る</BaseButton>
          </div>
        ) : (
          <>
            <p style={{ textAlign: "center", margin: "40px 0" }}>
              ご不明点やご質問などございましたら、
              <br className="pc" />
              下記のフォームからお気軽にお問い合わせください。
            </p>

            <div className={styles["faq-callout"]}>
              <p>お問い合わせの前に、よくあるご質問をご確認ください。</p>
              <BaseButton href="/visitor/?tab=faq" centered className={styles["contact-btn"]}>
                よくあるご質問 (FAQ) を見る
              </BaseButton>
            </div>

            <div className={styles["form-area"]}>
              <p className={styles["form-title"]}>お問い合わせフォーム</p>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSetR4DmQ9l8-nBAWryIOUuL5Obbemb5ZFAzbcJS35dbzBaETw/formResponse"
                method="post"
                onSubmit={handleSubmit}
              >
                <dl>
                  <div className={styles.item}>
                    <dt>
                      <label htmlFor="kind">お問い合わせ種別</label>
                      <span className={styles.require}>必須</span>
                    </dt>
                    <dd>
                      <select name="entry.979236933" id="kind" required>
                        <option value="">選択してください</option>
                        <option value="不明点について">不明点について</option>
                        <option value="不具合について">不具合について</option>
                        <option value="落とし物について">落とし物について</option>
                        <option value="協賛について">協賛について</option>
                        <option value="その他">その他</option>
                      </select>
                    </dd>
                  </div>
                  <div className={styles.item}>
                    <dt>
                      <label htmlFor="name">お名前</label>
                      <span className={styles.require}>必須</span>
                    </dt>
                    <dd>
                      <input id="name" type="text" name="entry.491853441" placeholder="高専　太郎" required />
                    </dd>
                  </div>
                  <div className={styles.item}>
                    <dt>
                      <label htmlFor="mail">メールアドレス</label>
                      <span className={styles.require}>必須</span>
                    </dt>
                    <dd>
                      <input id="mail" type="email" name="entry.1735437390" placeholder="xxxxxxxx@xxx.xxxx" required />
                    </dd>
                  </div>
                  <div className={styles.item}>
                    <dt>
                      どこでお知りになりましたか？
                      <span className={styles.require}>必須</span>
                    </dt>
                    <dd className={styles["checkbox-group"]}>
                      <div className={styles["checkbox-item"]}>
                        <input
                          type="checkbox"
                          name="entry.410116180"
                          id="know-1"
                          value="SNS (Instagram, Google検索など)"
                          onChange={handleKnowChange}
                        />
                        <label htmlFor="know-1">SNS (Instagram, Google検索など)</label>
                      </div>
                      <div className={styles["checkbox-item"]}>
                        <input
                          type="checkbox"
                          name="entry.410116180"
                          id="know-2"
                          value="ポスター"
                          onChange={handleKnowChange}
                        />
                        <label htmlFor="know-2">ポスター</label>
                      </div>
                      <div className={styles["checkbox-item"]}>
                        <input
                          type="checkbox"
                          name="entry.410116180"
                          id="know-3"
                          value="紹介・口コミ"
                          onChange={handleKnowChange}
                        />
                        <label htmlFor="know-3">紹介・口コミ</label>
                      </div>
                      <div className={styles["checkbox-item"]}>
                        <input
                          type="checkbox"
                          name="entry.410116180"
                          id="know-4"
                          value="その他"
                          onChange={handleKnowChange}
                        />
                        <label htmlFor="know-4">その他</label>
                      </div>
                    </dd>
                  </div>
                  <div className={styles.item}>
                    <dt>
                      <label htmlFor="message">お問い合わせ内容</label>
                      <span className={styles.require}>必須</span>
                    </dt>
                    <dd>
                      <textarea id="message" cols={40} rows={8} name="entry.1692701868" required></textarea>
                    </dd>
                  </div>
                </dl>

                <div className={styles["privacy-policy"]}>
                  <div className={styles["privacy-text"]}>
                    <p className={styles["privacy-title"]}>プライバシーポリシー</p>
                    <p>
                      第18回北斗祭実行委員会 (以下「本委員会」) は、個人情報 (個人情報の保護に関する法律)
                      の適切な保護、並びに利用が極めて重要であることを認識し、その取り扱いにあたり本プライバシーポリシーを遵守します。
                    </p>
                    <br />
                    <div>
                      <h4>法令の遵守</h4>
                      <p>
                        本委員会は、個人情報の取り扱いの際、個人情報に関する法令を遵守します。
                        <br />
                        <br />
                      </p>
                    </div>
                    <div>
                      <h4>収集する情報</h4>
                      <p>お問い合わせにあたり、氏名、メールアドレス等の個人情報を入力して頂く場合があります。</p>
                      <br />
                    </div>
                    <div>
                      <h4>第三者提供</h4>
                      <p>本委員会では、以下の場合を除き収集した情報を第三者へ提供致しません。</p>
                      <ul>
                        <li className="list">・本人の同意が得られた場合</li>
                        <li className="list">・法令に基づく開示請求があった場合</li>
                        <li className="list">・不正アクセス、脅迫等の違法行為があった場合</li>
                        <li className="list">・その他特段の事情がある場合</li>
                        <br />
                      </ul>
                    </div>
                    <div>
                      <h4>委員会内提供</h4>
                      <p>
                        本委員会では、取得した個人情報を次期以降 (第20回「高専祭～北斗祭～」以降)
                        の北斗祭実行委員会に提供する場合がございます。予めご了承ください。
                      </p>
                      <br />
                    </div>
                    <div>
                      <h4>利用</h4>
                      <ul>
                        <li>・本委員会からの諸連絡、お問い合わせへの返信のため</li>
                        <li>・本委員会が提供するサービス改善のため</li>
                        <li>・その他、文化祭（北斗祭）または委員会に関わるサービス提供のため</li>
                      </ul>
                      <p>
                        また、法令により認められる範囲で、ユーザーの同意を得ることなく、上記の目的以外の目的で個人情報を取り扱う場合があります。
                      </p>
                      <br />
                    </div>
                    <div>
                      <h4>Google Forms</h4>
                      <p>
                        このお問い合わせページでは、円滑な運営のため Google LLC が提供する「Google
                        フォーム」を利用しています。 入力された情報は Google LLC
                        のサーバーに保存されますが、本委員会は、取得した個人情報を当委員会のプライバシーポリシーに基づき適切に管理いたします。
                        なお、Google フォーム自体のデータ処理の詳細については、Google LLC
                        のプライバシーポリシーをご確認ください。
                        <a
                          style={{ color: "#0066cc", textDecoration: "underline" }}
                          href="https://policies.google.com/privacy?hl=ja"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google プライバシーポリシー
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className={styles["privacy-item"]}>
                    <input type="checkbox" id="privacy" required />
                    <label htmlFor="privacy">プライバシーポリシーに同意する</label>
                  </div>
                </div>

                <input className={styles["btn-submit"]} type="submit" value="送信" />
              </form>
            </div>
          </>
        )}
      </Container>
    </main>
  );
}
