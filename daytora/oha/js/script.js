$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();

  $("#js-drawer-icon").toggleClass("is-checked");
  $("#js-drawer-content").toggleClass("is-checked");
});

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
