$(function () {
  $('#form-button').click(function () {
    // フォームの値の取得
    
    // 貴社名
    var company = $('input[name="company"]').val();
    console.log(company);

    // お名前
    var name = $('input[name="name"]').val();
    console.log(name);

    // メールアドレス
    var mail = $('input[name="mail"]').val();
    console.log(mail);

    // お問い合わせ内容
    var message = $('textarea[name="message"]').val();
    console.log(message);

    var send_data = {
      "company": company,
      "name": name,
      "mail": mail,
      "message": message
    }
    console.log(send_data);

    // ajaxで送信
    $.ajax({
      url: "https://victorialabo.work/kataoka/hirotaka/post.php",
      type: 'post',
      data: send_data
    })
  });
});