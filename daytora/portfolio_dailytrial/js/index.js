// ハンバーガーメニューとドロワー
$("#js-button-drawer").on("click", function() {
  $(this).toggleClass("is-checked");

  // メニュー開閉処理
  $("#js-drawer").slideToggle();

  // メニュー開閉時にスクロールできなくするようにCSSで制御する用のクラスを追加
  $("body").toggleClass("is-fixed");
});