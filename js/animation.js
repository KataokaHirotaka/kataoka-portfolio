$(function () {

  // 要素の位置を取得
  var about = $('#about').offset().top - 10;
  var works = $('#works').offset().top - 10;
  var skills = $('#skills').offset().top - 10;


  // スクロール時にクラスを追加
  $(window).scroll(function () {
    if ($(this).scrollTop() > about) {
      $('.about__text').addClass('about-left');
    }

    if ($(this).scrollTop() > works) {
      $('.works__cards').addClass('works-right');
    }

    if($(this).scrollTop() > skills) {
      $('.skills__wrapper').addClass('skills-left');
    }
  });
});