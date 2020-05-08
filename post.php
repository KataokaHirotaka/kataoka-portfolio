<?php

// 値の取得

// 貴社名
$company = $_POST['company'];

// お名前
$name = $_POST['name'];

// メールアドレス
$mail = $_POST['mail'];

// お問い合わせ内容
$message_content = $_POST['message'];

// 問い合わせ時間
$now_time = date("Y/m/d H:i:s");
$id_time = date("y-md-Hi-s");


// 通知内容を生成

$subject = "{$id_time}フォーム問合せ" ;
$message =
"
会社名: {$company}
お名前: {$name}
メールアドレス: {$mail}
お問い合わせ内容: {$message_content}
";



/**
 * チャットワークに通知する処理
 **/

$apiKey = "80577177d03a49679ec1c2f064e42f66";
$roomID = "189708632";
$room_url = "https://api.chatwork.com/v2/rooms/".$roomID."/messages";

// ヘッダ
header("Content-type: text/html; charset=utf-8");

$params = array(
    "body" => "[info][title]".$subject."[/title]".$message."[/info]"
);

// cURLでPOST
$ch = curl_init();

// cURLのオプション設定　{roomId}の箇所には取得したルームIDを入れる
curl_setopt($ch, CURLOPT_URL, $room_url);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('X-ChatWorkToken: '. $apiKey));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);   // 結果を文字列で返す
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);  // サーバー証明書の検証を行わない
curl_setopt($ch, CURLOPT_POST, true);       // HTTP POSTを実行
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params, '', '&'));

$rsp = curl_exec($ch);
curl_close($ch);

// 送信結果も見ておく
$res = json_decode($rsp);
var_dump($res);


?>

