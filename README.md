## アプリ名
グランパー

## アプリ作成背景
身内がグランピングの経営を始め、私自身もグランピングに興味があり、インスタグラムや
インターネットで検索して調べていくうちにグランピングの情報が載っていてかつ、グランピングの
予約ができるアプリを作成したいと思い、開発しました。

またグランピングは小資金で事業を作ることができますが、小資金な人ほど
集客に苦戦しているのが現状です。

そんな方達を支援したく、集客ができて予約や販売ができてグランピングだけの
収益だけではなく、 ECでの販売や商品のレンタルなどができて複数のキャッシュを生み出すことができる
そんなサイトを目指していきます。

## テスト環境

### URL
https://glamping-book-client-h9kb2gm85-mitsuhiro0602.vercel.app/

### sellerアカウント
- email: 0hornet0@gmail.com
- password: mitsu0602

### buyerアカウント
- email: Buyer_test@gmail.com
- password: Buyer_test

### github:
【フロント】：https://github.com/mitsuhiro0602/glamping-book-client
【バックエンド】：https://github.com/mitsuhiro0602/glamping-book-server
## 使用技術

バックエンド：Node.js（Express）
フロントエンド： React / Redux
インフラ： Heroku + Vercel
DB：mongoDB(mongoDBAtlas)

### その他の技術
・JWTトークンによるAuth認証
・Reduxによるstateの管理
・Algoliaを使った全文検索

### 【UI/UX】
・ styled-component
・TailwindCSS
・一部bootstrap

***
***

## 詳細画面
  
![グランピング施設登録画面](https://gyazo.com/ca30862ef45212d5518c683783f1dc91)  
![stripe決済](https://gyazo.com/4b8ac110dd3ff0dcc92dddd636bfa77b)  
![明細確認画面](https://gyazo.com/019d21706ea08b5349141c3449e7d189)  

## 機能一覧

### 新規登録、ログイン
・JWTトークンを使用したメールアドレスでの新規登録、ログイン
### stripeアカウントの取得
・stripeApiを使ったユーザーとstripeアカウントの紐付け

### グランピング施設のCROUD
・グランピング施設の投稿、編集、読み取り、更新、削除

【投稿情報】
・画像
・タイトル
・説明
・滞在開始年月
・滞在終了年月
・場所情報
・滞在人数
・金額


### 決済機能
・stripeApiを使った決済機能

### 検索機能
・mongoDBは日本語対応していなかったためAlgoliaを使った全文検索


