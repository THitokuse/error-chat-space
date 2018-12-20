# 大阪の大阪による大阪のためのchat-spaceメンター試験対策　エラー問題

## 準備

- ruby 2.3.1
- rails 5.0.7.1

自分の好きなディレクトリでgit cloneしてください。
```text:作業場所　ターミナル
$ git clone https://github.com/THitokuse/error-chat-space.git <好きな名前>
```

configディレクトリにsecrets.ymlを格納するために、自分のchat-spaceのsecrets.ymlをコピーして貼り付け
→configディレクトリ内に入れる。

データベースを作成する。
```text:作業場所　ターミナル
$ rake db:create
$ rake db:migrate
```


## 問題
- ①　メッセージを投稿しようとすると「500 (Internal Server Error)」がでる。(メッセージ非同期通信)
- ②　自動更新で全てのメッセージが繰り返し表示されてしまう。(自動更新)
- ③　自動更新が他の画面でも行われてしまう。(自動更新)
- ④　ユーザーの追加ボタンを押してもチャットメンバー検索画面から消えない。(インクリメンタルサーチ)
- ⑤　自動更新で画像が表示されない。(自動更新)
