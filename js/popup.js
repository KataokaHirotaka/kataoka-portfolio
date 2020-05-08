$(function () {

  // ポップアップの表示
  $('#form-button').click(function () {
    $('.popup').addClass('show').fadeIn(500);
  });

  // ポップアップを閉じる
  $('#close').click(function (){
    $('.popup').removeClass('show');
    window.location.reload();
  });
});