function activeScroll(selector) {
  $(selector).click(function (e) {
      
    e.preventDefault();

    const target = $(this).attr("href");

    $("html , body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });
}

activeScroll("a[href*=panel-about]");
activeScroll("a[href*=panel-speakers]");
activeScroll("a[href*=panel-form]");
