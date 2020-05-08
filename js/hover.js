$(function() {

  // アニメーションにかける時間
  var duration = 300;

  // ヘッダーのボタンのアニメーション
  $('.header__button')
  .mouseover(function () {
    $(this).stop(true).animate({
      backgroundColor: '#fff',
      color: '#7d7070'
    }, duration);
  })
  .mouseout(function () {
    $(this).stop(true).animate({
      backgroundColor: '#7d7070',
      color: '#fff'
    }, duration);
  });


  $('.header__button--contact')
  .mouseover(function () {
    $(this).stop(true).animate({
      backgroundColor: '#fff',
      color: '#e89936'
    }, duration);
  })
  .mouseout(function () {
    $(this).stop(true).animate({
      backgroundColor: '#e89936',
      color: '#fff'
    }, duration);
  });


  // cardボタンのアニメーション
  $('#card-button1').mouseover(function () {
    $(this).stop(true).animate({
      borderWidth: '3px',
      backgroundColor: '#fff',
      color: '#25e2e2'
    }, duration, 'easeOutSine');
  })
  .mouseout(function () {
    $(this).stop(true).animate({
      borderWidth: '0px',
      backgroundColor: '#b3f7f7',
      color: '#333'
    }, duration, 'easeOutSine');
  });

  $('#card-button2')
  .mouseover(function () {
    $(this).stop(true).animate({
      borderWidth: '3px',
      backgroundColor: '#fff',
      color: '#25e2e2'
    }, duration, 'easeOutSine');
  })
  .mouseout(function () {
    $(this).stop(true).animate({
      borderWidth: '0px',
      backgroundColor: '#b3f7f7',
      color: '#333'
    }, duration, 'easeOutSine');
  });


  // フォームボタンのアニメーション
  $('#form-button')
  .mouseover(function () {
    $(this).stop(true).animate({
      borderWidth: '3px',
      backgroundColor: '#fff',
      color: '#999'
    }, duration, 'easeOutSine');
  })
  .mouseout(function () {
    $(this).stop(true).animate({
      borderWidth: '1px',
      backgroundColor: '#999',
      color: '#FFF'
    },duration, 'easeOutSine');
  });



  // ポップアップボタンのアニメーション
  $('#close')
  .mouseover(function () {
    $(this).stop(true).animate({
      backgroundColor: '#999',
      color: '#fff'
    }, duration, 'easeOutSine');
  })
  .mouseout(function () {
    $(this).stop(true).animate({
      backgroundColor: '#fff',
      color: '#999'
    }, duration, 'easeOutSine');
  });



});