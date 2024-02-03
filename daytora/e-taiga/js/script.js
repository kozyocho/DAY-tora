$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();

  $("#js-drawer-icon").toggleClass("is-checked");
  $("#js-drawer-content").toggleClass("is-checked");
});

/*
summaryをクリックした時にopen属性があったらslideUp()でコンテンツ隠す
open属性がなかったらslideDown()でコンテンツ表示
open属性がついたらマイナスボタンにする
*/

$(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if ($(this).parent().hasClass("is-open")) {
    $(this).parent().removeClass("is-open");
    $(this).next().slideUp();
  } else {
    $(this).parent().addClass("is-open");
    $(this).next().slideDown();
  }
});
