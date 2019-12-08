# モンスターを俺にプレゼントしちゃう奴(functionの練習的な)

デモ [モンスターを俺にプレゼントしちゃう奴](https://studygroup-17c60.firebaseapp.com/)
↑は1時間に1回しかプレゼントできないようにしてます。

プロジェクトが作られている前提
functionの練習のため、JavaScriptに関するところは省く

1. ```firebase use プロジェクトのid```

2. ```cd functions```

3. ```npm install```

4. ```cd ..```しなくてもいいかも？

5. ```firebase serve```

6. ブラウザで```localhost:5000```にアクセス。モンスターを俺にプレゼントしちゃう奴がでたらok

7. firebaseコンソールでfirestoreを有効化（テストモード）

8. コンソールでコレクションを作成（名前自由)

9. コンソールでドキュメント作成(名前自由)、フィールド:totalCount、タイプ:number、値:0

10. ```public/js/index.js```を開き、4行目あたりに8で作ったコレクション名を入れる。

11. ```functions/index.js```を開き、12行目あたりに8で作ったコレクション名と9で作ったドキュメント名を入れる。

12. サーバを止めて（止めなくてもいいけど）```firebase deploy```をしよう

13. firebase serve立ち上げてるなら```localhost:5000```、もしくはhostingのurlを開く

14. ブラウザでプレゼントするをクリックしたら「今までプレゼントされたモンスターの数」が増えるはず？
