/*
関数概要
 買い物リストの内容をLINEに送信する処理

引数
 to 送る宛先

戻り値
 送信した結果のレスポンス
———————————–*/
function pushShoppingLists(to) {
  /* スクリプトプロパティ情報を取得 */
  const prop = PropertiesService.getScriptProperties();
  /* 設定値を0にする */
  prop.setProperty("CONF", 0);
  /* 買い物リストの文字列を取得 */
  const stringLists = prop.getProperty("LIST");
  /* 買い物リストの文字列を配列に変換して取得 */
  const ArrayLists = stringLists.split(",");
  /* 先頭の『初期値』は削除する */
  ArrayLists.shift();

  /* 買い物リストが空の場合 */
  if (stringLists == "初期値") {
    let lineMessageObject = [
      {
        type: "text",
        text: "リストは空っぽです。"
      }
    ];
    return pushLine(lineMessageObject, to);
    /* 買い物リストがある場合 */
  } else {
    return pushLine(createContents(ArrayLists, "買い物リスト", "primary"), to);
  }
}
