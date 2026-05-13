"use client";

import { useEffect, useState } from "react";
import styles from "./about.module.css";
import { getPath } from "@/constants/paths";
import PageHeader from "@/components/ui/PageHeader/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import PageNav from "@/components/ui/PageNav/PageNav";
import Container from "@/components/ui/Container/Container";
import BaseButton from "@/components/ui/BaseButton/BaseButton";
import CallMadeRoundedIcon from '@mui/icons-material/CallMadeRounded';


export default function AboutContent() {
  const [isPrincipalExpanded, setIsPrincipalExpanded] = useState(false);
  const [isChairmanExpanded, setIsChairmanExpanded] = useState(false);
  const [isPresidentExpanded, setIsPresidentExpanded] = useState(false);

  return (
    <main>
      <PageHeader enTitle="ABOUT" jaTitle="「北斗祭」について" imgSrc={getPath("/img/common/mainvisual.jpg")} />

      <PageNav
        items={[
          { label: "ご挨拶", href: "#greeting" },
          { label: "テーマ", href: "#theme" },
          { label: "アプリ", href: "#app" },
        ]}
      />

      <section id="greeting" className={styles.greetingSection}>
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
              <p className={styles["view-more"]} onClick={() => setIsPrincipalExpanded(!isPrincipalExpanded)}>
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
                <div className={styles.inner}>
                  　こんにちは！今年も2年に1度の北斗祭を開催します！！
                  <br></br>
                  <br></br>
                  　今年度のテーマは「再煌（さいこう）」です。「再煌」には単に“もう一度輝く”という意味だけでなく、参加するすべての人で“最高”を更新していくという強い決意が込められています。このテーマのもと、これまで以上に心に残る北斗祭となるよう準備を進めてまいりました。北斗祭の準備・運営に尽力してくれた実行委員会の皆さんには、心より感謝しています。
                  <br></br>
                  <br></br>
                  　今年の北斗祭では、復興への思いも込め、実行委員会の模擬店において能登の塩味と白エビ味のポップコーンを販売しています。実行委員会だけでなく、それぞれの企画や模擬店、展示には、一人ひとりの想いと工夫が詰まっています。また、この4月に就航した本校練習船「若潮丸Ⅴ世」による体験航海の実施が、多くの関係者のご協力のもと実現しています。北斗祭が、ご来場の皆さまにとって特別な時間となることを願っております。2日間にわたり、個性あふれる富山高専射水キャンパスの北斗祭をぜひお楽しみください。
                  <br></br>
                  <br></br>
                  　最後になりますが、北斗祭の開催にあたり、ご指導・ご協力いただいた先生方、協賛企業の皆さまをはじめとするすべての関係者の方々に心より感謝申し上げます。
                </div>
              </div>
              <p className={styles["view-more"]} onClick={() => setIsChairmanExpanded(!isChairmanExpanded)}>
                {isChairmanExpanded ? "CLOSE" : "VIEW MORE"}
              </p>
            </div>
            <div className={styles.text_sub}>
              <p className={styles["title-ja"]}>射水キャンパス学生会長</p>
              <p className={styles["title-en"]}>島　杏彩</p>
              <div className={`${styles.description} ${isPresidentExpanded ? styles.expanded : ""}`}>
                <div className={styles.inner}>
                  　皆さん、こんにちは！本日は北斗祭にご来場いただき、誠にありがとうございます。
                  <br></br>
                  <br></br>
                  　ついにこの日を迎えましたが、今日のために学生たちは本当に多くの時間を費やして準備を進めてきました。各クラスや部活動、実行委員のみんなが試行錯誤しながら作り上げてきたものを、ようやくこうして形にできたことを私自身もとても嬉しく思っています。
                  <br></br>
                  <br></br>
                  　この北斗祭が、学生のみんなにとっても、そして足を運んでくださった来場者の皆様にとっても、心から楽しめる特別な時間になることを願っています。
                  <br></br>
                  <br></br>
                  　また、開催にあたり多大なるご支援をいただいた協賛企業の皆様、そして温かく指導してくださった先生方、関係者の皆様にこの場を借りて深く御礼申し上げます。
                  <br></br>
                  <br></br>
                  　今日からの２日間、富山高専射水キャンパスならではの活気と熱量を、ぜひ存分に味わってください。最高の文化祭にしましょう！
                </div>
              </div>
              <p className={styles["view-more"]} onClick={() => setIsPresidentExpanded(!isPresidentExpanded)}>
                {isPresidentExpanded ? "CLOSE" : "VIEW MORE"}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="theme" className={styles.themeSection}>
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
              <img src={getPath("/img/common/mainlogo.png")} alt="" />
            </div>
          </div>
        </Container>
      </section>


      <section id="app" className={styles.appSection}>
        <SectionTitle>アプリ</SectionTitle>
        <Container>
          <div className={styles.appContent}>
            <div className={styles.appText}>
              <p className={styles.appLead}>当日はスムーズに楽しく回るためのウェブアプリをご用意しています。</p>
              <p className={styles.appDescription}>
                このアプリでは、各模擬店の混雑状況や在庫、イベントの進行状況、お知らせなどをリアルタイムで確認することができます。
                <br />
                北斗祭を効率よく巡るために、ぜひご活用ください。
              </p>
              <div className={styles.appNote}>
                <p>模擬店の在庫や混雑状況などのリアルタイム情報は、当日の開催時間中のみ更新されます。</p>
                <p>アプリはインストールせずブラウザからすぐにご利用いただけます。事前にブックマーク (ホーム画面に追加) しておくと便利です。</p>
              </div>
              <div className={styles.appBtnWrapper}>
                <BaseButton href="https://hokutofes26.github.io/app" className={styles.appBtn}>
                  アプリを開く
                  <CallMadeRoundedIcon style={{ fontSize: "0.8em", marginLeft: "4px" }} />
                </BaseButton>
              </div>
            </div>
            <div className={styles.demoWrapper}>
              <div className={styles.demo}>
                <img src={getPath("/img/common/demo_1.webp")} alt="アプリ画面デモ1" />
                <img src={getPath("/img/common/demo_2.webp")} alt="アプリ画面デモ2" />
              </div>
            </div>
          </div>
        </Container>
      </section>

    </main >
  );
}
