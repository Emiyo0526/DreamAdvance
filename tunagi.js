/*
関数概要
 ログを書き込む処理

引数
 log シートに書き込む文字列

戻り値
 log シートに書き込む文字列
———————————–*/
function addLog(log) {
  const ss = SpreadsheetApp.openById("1icEJZ8Ht51WQxoAdHM6P3x-S0roqt97T0blklzW4_OU");
  const sheet = ss.getSheetByName("シート1");
  sheet.appendRow([new Date(), log]);
  return log
}
