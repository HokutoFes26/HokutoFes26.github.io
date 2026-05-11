# 第 18 回 高専祭 -北斗祭- 特設 HP

このリポジトリは、第 18 回高専祭-北斗祭-のホームページのソースコードを管理するためのものです。  
ホームページでは、来場者の皆さまへ向けた情報の集約と、スムーズな案内を提供することを目的としています。  
当日用のリアルタイムウェブアプリについては[このリポジトリ](https://github.com/HokutoFes26/app)を参照してください。

## 公開URL

- 公式サイト: [https://hokutofes26.github.io/](https://hokutofes26.github.io/)

## ![メインロゴ](./public/img/common/mainlogo.png "メインロゴ")

## 主なコンテンツ

- **企画紹介**: 校内で行われる展示の内容を詳しく紹介。
- **模擬店案内**: 当日楽しめるフードやドリンクなど模擬店の情報を掲載。
- **イベントスケジュール**: ステージ企画のタイムラインを確認可能。
- **来場者案内**: アクセス（バス時刻表）、FAQ、会場マップなど、当日に必要な情報。
- **ご協賛企業紹介**: 北斗祭を支えてくださる企業様のご紹介。
- **最新ニュース**: 開催に関する重要なお知らせを随時配信。
- **マップ機能**: 細かく分割されたマップ画像をインタラクティブに操作可能。

## 技術スタック

[![技術スタック](https://skillicons.dev/icons?i=nextjs,react,ts,css,materialui)](https://skillicons.dev)

- **フレームワーク**: Next.js (App Router / Static Export)
- **言語**: TypeScript
- **スタイル**: CSS, Material UI Icons
- **ホスティング**: GitHub Pages
- **SEO**: Google Search Console / Next-sitemap
- **お問い合わせ機能**: Google Forms

---

### ディレクトリ構成とルーティング

| ページ             | パス        | 関連ディレクトリ                           |
| :----------------- | :---------- | :----------------------------------------- |
| **トップ**         | `/`         | [`src/app/`](./src/app/)                   |
| **北斗祭について** | `/about`    | [`src/app/about/`](./src/app/about/)       |
| **企画紹介**       | `/projects` | [`src/app/projects/`](./src/app/projects/) |
| **来場案内**       | `/visitor`  | [`src/app/visitor/`](./src/app/visitor/)   |
| **ご協賛企業**     | `/works`    | [`src/app/works/`](./src/app/works/)       |
| **お問い合わせ**   | `/contact`  | [`src/app/contact/`](./src/app/contact/)   |
| **サイトマップ**   | `/sitenavi` | [`src/app/sitenavi/`](./src/app/sitenavi/) |

---

## 開発・メンテナンス情報

コンテンツの更新は主に以下のJSONファイルを編集することで行います。

### コンテンツデータ (JSON)

| カテゴリ         | ファイルパス                                               |
| :--------------- | :--------------------------------------------------------- |
| **バス時刻表**   | [`public/data/bus.json`](./public/data/bus.json)           |
| **イベント**     | [`public/data/events.json`](./public/data/events.json)     |
| **よくある質問** | [`public/data/faq.json`](./public/data/faq.json)           |
| **展示企画**     | [`public/data/products.json`](./public/data/products.json) |
| **模擬店**       | [`public/data/booth.json`](./public/data/booth.json)       |
| **ご協賛企業**   | [`public/data/works.json`](./public/data/works.json)       |
| **ニュース**     | [`public/data/news.json`](./public/data/news.json)         |

画像ファイルは `./public/img` 内に配置し、JSONファイルからはそのパスを参照してください。
