"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./company.module.css";
import { getPath } from "@/constants/paths";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import PageNav from "@/components/ui/PageNav/PageNav";
import Container from "@/components/ui/Container/Container";

export default function Company() {
  const [isPrincipalExpanded, setIsPrincipalExpanded] = useState(false);
  const [isChairmanExpanded, setIsChairmanExpanded] = useState(false);
  const [isPresidentExpanded, setIsPresidentExpanded] = useState(false);

  return (
    <main>
      <PageHeader enTitle="ABOUT" jaTitle="「北斗祭」について" imgSrc={getPath("/img/temporary/mainvisual.jpg")} />

      <PageNav
        items={[
          { label: "ご挨拶", href: "#service" },
          { label: "テーマ", href: "#philosophy" },
          { label: "ニュース", href: "#overview" },
          { label: "アクセス", href: "#access" },
        ]}
      />

      <section id="service" className={styles.serviceSection}>
        <SectionTitle>ご挨拶</SectionTitle>
        <Container>
          <div className={`${styles.item} ${styles.interior}`}>
            <div className={styles.text}>
              <p className={styles["title-ja"]}>富山高等専門学校　校長</p>
              <p className={styles["title-en"]}>國枝　佳明</p>
              <p className={styles.title}>「ようこそ北斗祭へ！」</p>
              <div className={`${styles.description} ${isPrincipalExpanded ? styles.expanded : ""}`}>
                <div className={styles.inner}>
                  　ケンシロウのようにコツコツと鍛え、作り上げた北斗祭、これを目撃したあなたは、「すでに魅了されている。」・・・かもしれません。
                  <br></br>
                  <br></br>
                  　若葉薫る季節、5月23日・24日、2年に一度の高専祭「第18回北斗祭」を開催します。学生が主体となって創り上げるこの祭のテーマは、「再煌～Reignition～」。再煌には、最高の北斗祭で再び輝き、前回を超えるものを全員で作り上げ、最高を更新し続けるという強い決意が込められています。
                  <br></br>
                  <br></br>
                  　激しく変化する現代において、学生たちは自ら考え、行動し、挑戦を重ねながら大きく成長してきました。失敗を乗り越えた経験の一つ一つが、今の彼らを支えています。その成果は、工夫を凝らした展示や個性あふれる企画はもちろん、生き生きとした一人ひとりの姿にもはっきりと表れています。ぜひ会場を巡り、見て、感じて、そして一緒に参加してください。若者たちが切り拓く未来への想いとエネルギーに満ちた北斗祭を、心ゆくまでお楽しみください。
                </div>
              </div>
              <p
                className={styles["view-more"]}
                onClick={() => setIsPrincipalExpanded(!isPrincipalExpanded)}
              >
                {isPrincipalExpanded ? "CLOSE" : "VIEW MORE"}
              </p>
            </div>
            <div className={styles.img}>
              <img src={getPath("/img/common/校長.jpg")} alt="" />
            </div>
          </div>

          <div className={`${styles.item_sub} ${styles.interior}`}>
            <div className={styles.text_sub}>
              <p className={styles["title-ja"]}>北斗祭実行委員長</p>
              <p className={styles["title-en"]}>冨水　琉花</p>
              <div className={`${styles.description} ${isChairmanExpanded ? styles.expanded : ""}`}>
                <div className={styles.inner}>軽く一言お願いします。</div>
              </div>
              <p
                className={styles["view-more"]}
                onClick={() => setIsChairmanExpanded(!isChairmanExpanded)}
              >
                {isChairmanExpanded ? "CLOSE" : "VIEW MORE"}
              </p>
            </div>
            <div className={styles.text_sub}>
              <p className={styles["title-ja"]}>射水キャンパス学生会長</p>
              <p className={styles["title-en"]}>島　杏彩</p>
              <div className={`${styles.description} ${isPresidentExpanded ? styles.expanded : ""}`}>
                <div className={styles.inner}>軽く一言お願いします。</div>
              </div>
              <p
                className={styles["view-more"]}
                onClick={() => setIsPresidentExpanded(!isPresidentExpanded)}
              >
                {isPresidentExpanded ? "CLOSE" : "VIEW MORE"}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="philosophy" className={styles.philosophySection}>
        <SectionTitle>テーマ</SectionTitle>

        <Container>
          <div className={styles["text-area"]}>
            <div className={styles.inner}>
              <p className={styles.title}>
                再煌
                <br />
                ～Reigntion～
              </p>
              <p className={styles.text}>
                　「最高の北斗祭で再び煌めく」そして、「前回の北斗祭を経てもう一度さらに輝く、今までの北斗祭を越えたより良いものを作ろう」という願いが込められています。
              </p>
              <p className={styles.text}>
                　再煌は、ただ"もう一度輝こう"という意味だけでなく、全員で"最高"を更新していくという強い決意でもあります。
              </p>
            </div>
            <div className={styles["img-top"]}>
              <img src={getPath("/img/common/mainlogo.jpg")} alt="" />
            </div>
          </div>
        </Container>
      </section>

      <section id="overview" className={styles.overviewSection}>
        <SectionTitle>ニュース</SectionTitle>
        <Container>
          <p>ニュ</p>
        </Container>
      </section>

      <section id="access" className={styles.accessSection}>
        <SectionTitle>アクセス</SectionTitle>

        <Container className={styles.info}>
          <p>
            当日は無料シャトルバスをご用意しております。
            <br />
            ぜひ、ご利用ください。
          </p>
          <Link href="/shuttle_bus" className={styles.btn}>
            時刻表
          </Link>
        </Container>

        <Container className={styles.info}>
          <p>
            〒933-0293
            <br />
            富山県射水市海老江練合1-2
          </p>
          <a
            href="https://maps.app.goo.gl/qpgf2kbS3oXDsw3L6"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Google Mapで見る ↗
          </a>
        </Container>

        <Container className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.487505609848!2d137.15628597552555!3d36.758870770028636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff79ea9182a709d%3A0x9d311ac5104b9c23!2z5a-M5bGx6auY562J5bCC6ZaA5a2m5qChIOWwhOawtOOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1775809405908!5m2!1sja!2sjp"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </section>
    </main>
  );
}
