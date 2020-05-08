$(function () {

  // ページトップ
  var scrollBtn = $('.footer__button--scroll');
  scrollBtn.hide();

  

  var headerBtn = $('#header-button1');
  var headerBtnContact = $('#header-button2');

  // スクロールが300に達したらスクロールボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      scrollBtn.fadeIn();
    } else{
      scrollBtn.fadeOut();
    }
  });

  // トップにゆっくり戻る
  scrollBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  // ヘッダーボタンのスクロール
  headerBtn.click(function () {
    $('body, html').animate({
      scrollTop: 600
    }, 300);
    return false;
  });

  headerBtnContact.click(function () {
    $('body, html').animate({
      scrollTop: 2300
    }, 300);
    return false;
  });



});