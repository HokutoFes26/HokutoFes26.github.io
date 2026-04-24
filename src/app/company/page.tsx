import Link from "next/link";
import styles from "./company.module.css";
import { getPath } from "@/constants/paths";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import PageNav from "@/components/ui/PageNav/PageNav";
import Container from "@/components/ui/Container/Container";

export default function Company() {
  return (
    <main>
      <PageHeader enTitle="ABOUT" jaTitle="「北斗祭」について" imgSrc={getPath("/img/company/mainvisual.jpg")} />

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
          <Link className={`${styles.item} ${styles.interior}`} href="/products">
            <div className={styles.text}>
              <p className={styles["title-ja"]}>富山高等専門学校　校長</p>
              <p className={styles["title-en"]}>名前</p>
              <p className={styles.description}>軽く一言お願いします。</p>
              <p className={styles["view-more"]}>VIEW MORE</p>
            </div>
            <div className={styles.img}>
              <img src={getPath("/img/company/products-interior.jpg")} alt="" />
            </div>
          </Link>

          {/* <Link className={`${styles.item} ${styles.store}`} href="/works">
            <div className={styles.text}>
              <p className={styles["title-ja"]}>北斗祭実行委員長</p>
              <p className={styles["title-en"]}>名前</p>
              <p className={styles.description}>軽く一言お願いします。</p>
              <p className={styles["view-more"]}>VIEW MORE</p>
            </div>
            <div className={styles.img}>
              <img src={getPath("/img/company/products-store.jpg")} alt="" />
            </div>
          </Link>

          <Link className={`${styles.item} ${styles.interior}`} href="/products">
            <div className={styles.text}>
              <p className={styles["title-ja"]}>射水キャンパス学生会長</p>
              <p className={styles["title-en"]}>名前</p>
              <p className={styles.description}>軽く一言お願いします。</p>
              <p className={styles["view-more"]}>VIEW MORE</p>
            </div>
            <div className={styles.img}>
              <img src={getPath("/img/company/products-interior.jpg")} alt="" />
            </div>
          </Link> */}

          <Link className={`${styles.item_sub} ${styles.interior}`} href="/products">
            <div className={styles.text_sub}>
              <p className={styles["title-ja"]}>北斗祭実行委員長</p>
              <p className={styles["title-en"]}>名前</p>
              <p className={styles.description}>軽く一言お願いします。</p>
              <p className={styles["view-more"]}>VIEW MORE</p>
            </div>
            <div className={styles.text_sub}>
              <p className={styles["title-ja"]}>射水キャンパス学生会長</p>
              <p className={styles["title-en"]}>名前</p>
              <p className={styles.description}>軽く一言お願いします。</p>
              <p className={styles["view-more"]}>VIEW MORE</p>
            </div>
          </Link>
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
              <p className={styles.text}>文章は誰かに任せます</p>
              <p className={styles.text}>以下同文</p>
            </div>
          </div>
          <div className={styles["img-top"]}>
            <img src={getPath("/img/common/mainlogo.jpg")} alt="" />
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
