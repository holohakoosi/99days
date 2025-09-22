// 簡易パスワード
const PASSWORD = "najayou777";

function checkPassword() {
  const input = document.getElementById("pwInput").value;
  if(input === PASSWORD){
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    document.getElementById("msg").textContent = "パスワードが違います";
  }
}
