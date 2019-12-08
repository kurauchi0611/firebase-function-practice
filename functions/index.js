const functions = require('firebase-functions');
// firebase adminの初期化
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
// firestoreの初期化
const db = admin.firestore();
// resメッセージ設定
const message = {message:'ぷれぜんと失敗！'}

exports.countUP = functions.https.onCall(async(data, context) => {
  // 作成したコレクション名とドキュメント名を入れる
  await db.collection('').doc('').set({
    totalCount: admin.firestore.FieldValue.increment(1)
  }, { merge: true }).then(() => {
    message['message']='ありがとおおおおおおおおおおおおおおおおおおおおおおおお'
  })
  return message
})