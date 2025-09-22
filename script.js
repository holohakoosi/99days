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

// キャラクターランキング（順位付き）
const ranking = [
  { rank: 1, name: "ナイト", ruby: "ないと", class: "戦士", score: 95 },
  { rank: 2, name: "アーチャー", ruby: "あーちゃー", class: "弓使い", score: 90 },
  { rank: 3, name: "メイジ", ruby: "めいじ", class: "魔法使い", score: 85 },
  { rank: 4, name: "ヒーラー", ruby: "ひーらー", class: "回復", score: 80 }
];

const rankingList = document.getElementById("rankingList");
ranking.forEach(c => {
  const li = document.createElement("li");
  li.innerHTML = `#${c.rank} <ruby>${c.name}<rt>${c.ruby}</rt></ruby> (${c.class}) - スコア: ${c.score}`;
  rankingList.appendChild(li);
});

// ステージ情報
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
