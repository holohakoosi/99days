// 簡易パスワード
const PASSWORD = "1234";

function checkPassword() {
  const input = document.getElementById("pwInput").value;
  if(input === PASSWORD){
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    document.getElementById("msg").textContent = "パスワードが違います";
  }
}

// キャラクター情報（参考サイトベース）
const characters = [
  { name: "ナイト", ruby: "ないと", class: "戦士", skill: "攻撃力と防御力が高い" },
  { name: "アーチャー", ruby: "あーちゃー", class: "弓使い", skill: "遠距離攻撃に特化" },
  { name: "メイジ", ruby: "めいじ", class: "魔法使い", skill: "魔法攻撃が強力" },
  { name: "ヒーラー", ruby: "ひーらー", class: "回復", skill: "味方回復に特化" }
];

const characterList = document.getElementById("characterList");
characters.forEach(c => {
  const li = document.createElement("li");
  li.innerHTML = `<ruby>${c.name}<rt>${c.ruby}</rt></ruby> (${c.class}) - ${c.skill}`;
  characterList.appendChild(li);
});

// ステージ情報（参考サイトベース）
const stages = [
  { stage: "森の入口", detail: "初心者向け、敵は弱い" },
  { stage: "闇の森", detail: "中ボス出現、罠注意" },
  { stage: "森の奥", detail: "ボス戦、火属性攻撃が有効" }
];

const stageContent = document.getElementById("stageContent");
stages.forEach(s => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${s.stage}</strong>: ${s.detail}`;
  stageContent.appendChild(div);
});

// 攻略メモ機能（localStorage）
const saveBtn = document.getElementById("saveMemo");
const memoInput = document.getElementById("memoInput");
const memoList = document.getElementById("memoList");

saveBtn.addEventListener("click", () => {
  const value = memoInput.value.trim();
  if(!value) return;

  const p = document.createElement("p");
  p.textContent = value;
  memoList.appendChild(p);

  let memos = JSON.parse(localStorage.getItem("memos") || "[]");
  memos.push(value);
  localStorage.setItem("memos", JSON.stringify(memos));

  memoInput.value = "";
});

// ページ読み込み時に保存済みメモを表示
window.addEventListener("load", () => {
  let memos = JSON.parse(localStorage.getItem("memos") || "[]");
  memos.forEach(m => {
    const p = document.createElement("p");
    p.textContent = m;
    memoList.appendChild(p);
  });
});
