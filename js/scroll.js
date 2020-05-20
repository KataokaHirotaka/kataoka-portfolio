$(function () {

  // ページトップ
  var scrollBtn = $('.footer__button--scroll');
  scrollBtn.hide();

  // ヘッダー各ボタン
  var headerBtnAbout = $('#header-button1');
  var headerBtnWorks = $('#header-button2');
  var headerBtnSkills = $('#header-button3');
  var headerBtnContact = $('#header-button4');
  
  // 要素の位置を取得
  var about = $('#about').offset().top;
  var skills = $('#skills').offset().top;
  var works = $('#works').offset().top;
  var contact = $('#contact').offset().top;

  console.log(about);
  console.log(skills);
  console.log(works);
  console.log(contact);

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

  // ヘッダーの各ボタンのスクロール
  // about
  headerBtnAbout.click(function () {
    $('body, html').animate({
      scrollTop: about
    }, 300);
    return false;
  });


  // works
  headerBtnWorks.click(function () {
    $('body, html').animate({
      scrollTop: works
    }, 300);
    return false;
  });

  // skills
  headerBtnSkills.click(function () {
    $('body, html').animate({
      scrollTop: skills
    }, 300);
    return false;
  });
  // works
  headerBtnContact.click(function () {
    $('body, html').animate({
      scrollTop: contact
    }, 300);
    return false;
  });
});