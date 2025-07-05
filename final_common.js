$(document).ready(function() {
    $(this).scroll(function() {
        if ($(document).scrollTop() > 1) {
            $(".logo img, .head_name_mark, .head_name_desc").addClass('logo-shrink');
            
        }
        else {
            $('.logo img, .head_name_mark, .head_name_desc').removeClass('logo-shrink');
        }
    });
});

$(document).ready(function () {
    $(window).on('scroll load', function () {
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();
  
      if ($('.content2').length > 0) {
        var elementTop2 = $('.content2').offset().top;
        if (scrollPosition + windowHeight >= elementTop2 - 25) {
          $('.content2').addClass('show');
        }
      }
  
      if ($('.content3').length > 0) {
        var elementTop3 = $('.content3').offset().top;
        if (scrollPosition + windowHeight >= elementTop3 - 25) {
          $('.content3').addClass('show');
        }
      }
  
      if ($('.member1').length > 0) {
        var elementTop5 = $('.member1').offset().top;
        if (scrollPosition + windowHeight >= elementTop5 - 25) {
          $('.member1').addClass('show');
        }
      }

      if ($('.member2').length > 0) {
        var elementTop4 = $('.member2').offset().top;
        if (scrollPosition + windowHeight >= elementTop4 - 25) {
          $('.member2').addClass('show');
        }
      }
    });
  });
  