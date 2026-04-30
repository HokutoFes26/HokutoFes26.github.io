"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import { getPath } from "@/constants/paths";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import Container from "@/components/ui/Container/Container";
import BaseButton from "@/components/ui/BaseButton/BaseButton";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 150);
  };

  return (
    <main>
      <PageHeader enTitle="CONTACT" jaTitle="お問い合わせ" imgSrc={getPath("/img/temporary/mainvisual.jpg")} />

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

            <div className={styles["form-area"]}>
              <p className={styles["form-title"]}>お問い合わせフォーム</p>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSetR4DmQ9l8-nBAWryIOUuL5Obbemb5ZFAzbcJS35dbzBaETw/formResponse"
                method="post"
                target="hidden_iframe"
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
                    <dt>どこでお知りになりましたか？</dt>
                    <dd className={styles["checkbox-group"]}>
                      <div className={styles["checkbox-item"]}>
                        <input
                          type="checkbox"
                          name="entry.410116180"
                          id="know-1"
                          value="SNS (Instagram, Google検索など)"
                        />
                        <label htmlFor="know-1">SNS (Instagram, Google検索など)</label>
                      </div>
                      <div className={styles["checkbox-item"]}>
                        <input type="checkbox" name="entry.410116180" id="know-2" value="ポスター" />
                        <label htmlFor="know-2">ポスター</label>
                      </div>
                      <div className={styles["checkbox-item"]}>
                        <input type="checkbox" name="entry.410116180" id="know-3" value="紹介・口コミ" />
                        <label htmlFor="know-3">紹介・口コミ</label>
                      </div>
                      <div className={styles["checkbox-item"]}>
                        <input type="checkbox" name="entry.410116180" id="know-4" value="その他" />
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
                      当実行委員会は、ご提供いただいた個人情報について、個人情報保護に関する法令およびその他の規範を遵守し、適切に取り扱います。
                    </p>
                    <ol>
                      <li>1. 収集した個人情報は、お問い合わせへの回答および統計的な分析にのみ利用します。</li>
                      <li>2. 法令に定める場合を除き、個人情報を第三者に提供することはありません。</li>
                      <li>3. 個人情報の漏洩、紛失などを防止するため、適切な安全管理措置を講じます。</li>
                    </ol>
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
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>
    </main>
  );
}
