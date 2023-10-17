'use strict'
{
const $about_img_box = $('.about_img_box');
const $about_text_box = $('.about_text_box');


  //フォードアップエフェクトを付与
  function fadeUpEffect() {
    $('.fadeUpTrigger').each(function () {
      var position = $(this).offset().top + 100;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
  
      if (scroll >= position - windowHeight) {
        $(this).addClass('fadeUp');
      }
    });
  }

  //スライドエフェクトを付与
  function slideEffect() {
    $('.rlslideTrigger').each(function () {
      var position = $(this).offset().top + 400;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
  
      if (scroll >= position - windowHeight) {
        $(this).addClass('rlslide');
      }
    });

    $('.lrslideTrigger').each(function () {
      var position = $(this).offset().top + 100;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
  
      if (scroll >= position - windowHeight) {
        $(this).addClass('lrslide');
      }
    });
  }
  
  $(window).scroll(function () {
    fadeUpEffect();
    slideEffect();
  });




  $('#open').click(function () {//ボタンがクリックされたら
    $(this).toggleClass('hide');//openに hideクラスを付与
      $(".hide-navi").toggleClass('show');//ナビにshowクラスを付与
      $("#close").toggleClass('show');//closeにshowクラスを付与
  });
  
  $(".hide-navi a").click(function () {//ナビゲーションのリンクがクリックされたら
    $("#open").removeClass('hide');//openのhideクラスを除去
      $(".hide-navi").removeClass('show');//ナビのshowクラスを除去
      $("#close").removeClass('show');//closeのshowクラスを除去
  });


  $("#close").click(function () {//ナビゲーションのリンクがクリックされたら
    $("#open").removeClass('hide');//openのhideクラスを除去
      $(".hide-navi").removeClass('show');//ナビのshowクラスを除去
      $("#close").removeClass('show');//closeのshowクラスを除去
  });



//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

  var scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll >= 200){//200pxスクロールしたら
    $('#page-top').removeClass('DownMove');   // DownMoveというクラス名を除去して
    $('#page-top').addClass('UpMove');      // UpMoveというクラス名を追加して出現
  }else{//それ以外は
    if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
      $('#page-top').removeClass('UpMove'); //  UpMoveというクラス名を除去し
      $('#page-top').addClass('DownMove');  // DownMoveというクラス名を追加して非表示
    }
  }
  
  var wH = window.innerHeight; //画面の高さを取得
  var footerPos =  $("footer").offset().top; //footerの位置を取得
  if(scroll+wH >= (footerPos+16)) {
    var pos = (scroll+wH) - footerPos+10; //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
    $('#page-top').css('bottom',pos); //#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
  }else{//それ以外は
    if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
      $('#page-top').css('bottom','16px');// 下から10pxの位置にページリンクを指定
    }
  }
}




// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});





//ローディング
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});


}