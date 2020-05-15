jQuery(document).ready(function ($) {
  let main = $('main');
  init();

  function initAnimate(){
    setTimeout(function () {
      $('.b-animate-go .b-wrapper').each(function (i, v) {
        var this_h = $(v).height();
        var el_h = 0;
        var m_t = 0;
        var m_b = 0;
        var el_len = $(v).children().length;
        $(v).children().each(function (ii, vv) {
          el_h += $(vv).height();
          if (ii > 0) {
            m_t += parseInt($(vv).css('margin-top'));
          }
          if ((ii + 1) <= el_len - 1) {
            m_b += parseInt($(vv).css('margin-bottom'));
          }
        });
        var set_mar = parseInt((this_h / 2) - ((m_t + m_b + el_h) / 2));
        $(v).children().first().css('margin-top', set_mar);
      });
    },10);
  }

  function init() {
    main.empty();
    main.load('part/top.html', function () {
      initAnimate();
    });
  };

  $(window).scroll(function () {
    $('.si').each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 400) {
        $(this).addClass("slideUp");
      }
    });
  });

  $(document).on('click', 'header .text', function () {
    init();
  });

  $(document).on('click', '.btn-link', function () {
    let target = $(this).text().toLowerCase();
    main.empty();
    main.load('part/' + target + '.html', function () {
      initAnimate();
    });
  });

  $(document).on('click', '.more button', function () {
    let target = $(this).val();
    main.empty();
    main.load('part/' + target + '.html', function () {
      initAnimate();
    });
  });
});
