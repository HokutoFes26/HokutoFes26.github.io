"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./access.module.css";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Container from "@/components/ui/Container/Container";
import { getPath } from "@/constants/paths";
import PageNav from "@/components/ui/PageNav/PageNav";

const dataUrlBus = getPath("/data/bus.json");

interface BusData {
  HongoToImizu: {
    route: string[];
    time: string[][];
  };
  ImizuToHongo: {
    route: string[];
    time: string[][];
  };
}

const BusTable = ({ routes, times }: { routes: string[]; times: string[][] }) => {
  const tripCount = times[0]?.length || 0;

  const trips = Array.from({ length: tripCount }, (_, tripIndex) => {
    return routes.map((route, routeIndex) => ({
      stop: route,
      time: times[routeIndex][tripIndex],
    }));
  });

  return (
    <div className={styles.cardGrid}>
      {trips.map((trip, i) => (
        <div key={i} className={styles.tripCard}>
          <div className={styles.tripHeader}>{i + 1}便目</div>
          <div className={styles.tripBody}>
            {trip.map((stopInfo, j) => (
              <div key={j} className={styles.stopRow}>
                <div className={styles.stopName}>{stopInfo.stop}</div>
                <div className={styles.stopTime}>{stopInfo.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function AccessSection() {
  const [busData, setBusData] = useState<BusData | null>(null);

  useEffect(() => {
    fetch(dataUrlBus)
      .then((response) => response.json())
      .then((data) => {
        setBusData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <PageNav
        items={[
          { label: "アクセスマップ", href: "#map" },
          { label: "シャトルバス時刻表", href: "#bus" },
          { label: "駐車場", href: "#parking" },
        ]}
      />
      <section id="map" className={styles.accessSection}>
        <SectionTitle>アクセスマップ</SectionTitle>
        <Container className={styles.info}>
          <p>
            当日は無料シャトルバスをご用意しております。
            <br />
            ぜひ、ご利用ください。
          </p>
          <Link href="#bus" className={styles.btn}>
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
      <section id="bus" className={styles.accessSection}>
        <SectionTitle>シャトルバス時刻表</SectionTitle>
        <Container>
          <div className={styles.main}>
            <div className={styles.skipNav}>
              <a href="#to-imizu" className={styles.skipBtn}>
                本郷 / 富山駅 → 射水
              </a>
              <a href="#to-hongo" className={styles.skipBtn}>
                射水 → 本郷 / 富山駅
              </a>
            </div>

            <div className={styles.timetable} id="timetable">
              {!busData ? (
                <h5>データ準備中！</h5>
              ) : (
                <>
                  <h2 className={styles.h2} id="to-imizu">
                    本郷キャンパス / 富山駅<br></br>↓<br></br>射水キャンパス
                  </h2>
                  <div className={styles.busNotice}>
                    <p>シャトルバスをご利用のお客様へ</p>
                    <ul>
                      <li>1日目、2日目共通の時刻表です。</li>
                      <li>混雑状況により、ご希望の便にご乗車いただけない場合があります。</li>
                      <li>本郷C～富山駅北口間のみの利用はご遠慮いただいております。</li>
                    </ul>
                    <p style={{marginTop: "1em"}}>乗降場所</p>
                    <div style={{ maxWidth: "300px", marginLeft: "15px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1.5px dashed #999", paddingBottom: "8px" }}>
                        <span style={{ color: "#555" }}>富山駅</span>
                        <span style={{ fontWeight: "500" }}>北口観光バス駐車場</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <span style={{ color: "#555" }}>射水キャンパス</span>
                        <span style={{ fontWeight: "500" }}>管理棟前の噴水付近</span>
                      </div>
                    </div>
                  </div>
                  <BusTable routes={busData.HongoToImizu.route} times={busData.HongoToImizu.time} />

                  <h2 className={`${styles.h2} ${styles.toHongo}`} id="to-hongo">
                    射水キャンパス<br></br>↓<br></br>本郷キャンパス / 富山駅
                  </h2>
                  <BusTable routes={busData.ImizuToHongo.route} times={busData.ImizuToHongo.time} />
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
      <section id="parking" className={styles.accessSection}>
        <SectionTitle>駐車場</SectionTitle>
        <Container className={styles.info}>
          <p>
            キャンパス内への駐車はできません。
            <br />
            東明小学校隣の臨時駐車場をご利用ください。
            <br />
            周辺の店舗、道路、公園等への駐車はご遠慮ください。
          </p>
        </Container>
        <Container className={styles.map}>
          <img src="/img/visitor/parking.png" />
        </Container>
      </section>
    </div>
  );
}
