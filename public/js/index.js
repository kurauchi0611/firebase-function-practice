// いつもの
const db = firebase.firestore();
// コレクション名
const presents = db.collection('');//作ったコレクションの名前
// function の関数名
const countUp= firebase.functions().httpsCallable('countUP');

// index.htmlのクラス
const receivedMonster=document.querySelector('.receivedMonster');
const result=document.querySelector('.result');

// カウント数の監視
presents.onSnapshot(querySnapshot =>{
  querySnapshot.forEach(doc =>{
    receivedMonster.textContent=doc.data().totalCount;
  })
})
// あげる クリックでfunctionを走らせる。
document.querySelector('.go-present').addEventListener('click',()=>{
  // function呼び出し
  countUp().then(res=>{
    // res返ってきた後の処理
    result.textContent=res.data['message']
  });
})
// あげない クリックでメッセージ出力
document.querySelector('.no-present').addEventListener('click',()=>{
  result.textContent='どぼじでええええええええええええええええええええええええ'
})