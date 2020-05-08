$(function() {

  $('.header__slideshow').each(function () {

    var $slides = $(this).find('.header__title--name'), //全てのスライド
        slideCount = $slides.length, //スライドの点数
        currentIndex = 0; //現在のスライドを示すインデックス

    // 最初のスライドをフェードインで表示
    $slides.eq(currentIndex).fadeIn();

    setInterval(showNextSlide, 4000);

    function showNextSlide() {

      // 次に表示するスライドのインデックス
      var nextIndex = (currentIndex + 1) % slideCount;

      // 現在のスライドをフェードアウト
      $slides.eq(currentIndex).fadeOut();

      // 次のスライドをフェードイン
      $slides.eq(nextIndex).fadeIn();
    }
  }) 
})