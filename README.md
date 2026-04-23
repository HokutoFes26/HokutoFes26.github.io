Pagesリンク : https://hokutofes26.github.io/ \
Web Appリンク : https://hokutofes26.github.io/app

### 各データjson場所

| 中身           | ファイル                      |
| -------------- | ----------------------------- |
| バス時刻       | `./public/data/bus.json`      |
| イベントリスト | `./public/data/events.json`   |
| Q&A            | `./public/data/faq.json`      |
| 展示一覧       | `./public/data/products.json` |
| 模擬店一覧     | `./public/data/booth.json`   |
| 企業一覧       | `./public/data/works.json`    |

画像は`./public/img`、そのパスを`.json`へ

---

### `products.json`と`booth.json`のグループ分け

| json内ID | 展示   | 模擬店 |
| -------- | ------ | ------ |
| L1       | クラス | 運動部 |
| L2       | 部活動 | 文化部 |
| L3       | 学科   | クラス |
| L4       | 特別   | その他 |

| json内アイテムID | 役割     |
| ---------------- | -------- |
| name             | 店名     |
| team             | 運営名   |
| place            | 配置場所 |
| image            | 画像パス |

---

### `works.json`のグループ分け

| json内ID | 区分     |
| -------- | -------- |
| works    | 協賛     |
| thanks   | サンクス |

| json内アイテムID | 役割     |
| ---------------- | -------- |
| name             | 企業     |
| url              | 企業URL  |
| image            | 画像パス |

---
